문제: https://leetcode.com/problems/range-sum-query-immutable/              

문제 요약: 정수로 이루어진 배열 `nums`가 주어지는데, `left`, `right` 사이의 주어지는 구간의 합을 구하자.        

처음엔 그냥 벡터 만들고 더해버리면 되니 엄청 쉽지 않나? 하는 생각을 했다.      
근데 코드 돌아가는 속도가... 하위 95퍼였다. 이런.        
```cpp
class NumArray {
public:
    vector<int> vec;
    NumArray(vector<int>& nums) {
        vec = nums;
    }
    
    int sumRange(int left, int right) {
        int sum = 0;
        for (int i=left; i<=right; ++i) {
            sum += vec.at(i);
        }
        return sum;
    }
};

// Runtime: 444 ms, faster than 5.01% of C++ online submissions for Range Sum Query - Immutable.
// Memory Usage: 17.1 MB, less than 33.79% of C++ online submissions for Range Sum Query - Immutable.
```
           

생성자를 통해 int 배열을 받고, `sumRange()` 를 통해 i 번째 index 부터 j번째 index 까지의 합을 반환해야 한다. 어떻게 해야할까?
0, 5 라고 한다면 `arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5]` 의 결과를 반환해야 한다.
하지만, 3, 5 라고 한다면 `arr[3] + arr[4] + arr[5]` 의 결과를 반환해야 한다.
`sumRange(3, 5)` 는 `sumRange(0, 5) - sumRange(0, 2)`다.          
`sumRange(0, 2) = arr[0] + arr[1] + arr[2]` 이다.
여기에 착안해 0 부터 `nums.length()-1` 까지의 합을 저장해두고, 그때그때 계산해주었다.       
```cpp
class NumArray {
public:
    vector<int> vec;
    NumArray(vector<int>& nums) {
        int sum =0;
        for(auto x: nums){
            sum += x;
            dp.push_back(sum);
        }
    }
    
    int sumRange(int left, int right) {
        if(left ==0)
            return vec[right];
        else
            return vec[right]-vec[left-1];
    }
};

// Runtime: 24 ms, faster than 58.22% of C++ online submissions for Range Sum Query - Immutable.
// Memory Usage: 17.1 MB, less than 33.79% of C++ online submissions for Range Sum Query - Immutable.
```
