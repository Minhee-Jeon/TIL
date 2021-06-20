문제: https://leetcode.com/problems/missing-number/        
         
문제 요약: 주어진 배열 `nums`에는 0에서 `nums`의 크기인 `n` 사이 범위의 수가 임의의 한 수만 빼고 들어있다. 그 빠진 임의의 수를 구해 반환하기           
         
일단 `nums`를 정렬한 후 연속되지 않는 구간을 찾아 해당하는 수를 리턴하면 되겠다는 생각이 들었다. 그렇게 풀어본 방식은 아래와 같다.        
시간복잡도는 `sort()`를 따라 O(nlogn)이다. 이것보다 더 빨리 구할 수 있지 않을까?        
```cpp
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        // if (nums.at(0) != 0) return 0;
        // for (int i=0; i<nums.size()-1; ++i) {
        //     if (nums.at(i) + 1 != nums.at(i+1)) {
        //         return nums.at(i) + 1;
        //     }
        // }
        // return nums.size();
        
        for (int i=0; i<nums.size(); ++i) {
          if(i!=nums[i]) return i;
        }
        return nums.size();
    }
};

// Runtime: 20 ms, faster than 51.54% of C++ online submissions for Missing Number.
// Memory Usage: 18.1 MB, less than 15.31% of C++ online submissions for Missing Number.
```        
            
0에서 `num.size()`만큼의 모든 수를 더한 값에서 `nums`에 들어있는 모든 정수를 더한 값을 뺀다면 missing number가 도출될 것이다.        
`nums`의 처음부터 끝까지의 합만 구하기에 시간복잡도는 O(n).           
```cpp
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int n = nums.size();
        int totalNums = (n)*(n+1)/2;
        int sumOfNums = accumulate(nums.begin(),nums.end(),0);
        return toalNums - sumOfNums;
    }
};

// Runtime: 20 ms, faster than 51.54% of C++ online submissions for Missing Number.
// Memory Usage: 18.1 MB, less than 60.51% of C++ online submissions for Missing Number.
```
