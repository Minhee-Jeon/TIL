문제: https://leetcode.com/problems/move-zeroes/         
     
문제 요약: 주어진 배열 `nums`에 들어있는 0들의 위치를 배열의 끝으로 옮기자. 단, 주어진 배열의 복사본을 이용할 수 없다.         
        
배열을 순회하며 0인 경우 `zeros` 변수에 0의 개수를 저장하며 해당 정수를 `erase()`로 지워둔다.      
순회가 끝나면 `zeros`에 저장된 0의 개수만큼 `nums`의 끝에 0을 추가한다.      
과연 내가 `erase()`를 몰랐다면 풀 수 있었을까?         
시간복잡도는 O(n)이라고 생각이 든다. 

```cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int zeros = 0;
        for(int i=0; i<nums.size(); ++i) {
            if (nums.at(i) == 0) {
                zeros += 1;
                nums.erase(nums.begin() + i);
                --i;
            }
        }
        while (zeros > 0) {
            nums.push_back(0);
            --zeros;
        }
    }
};

// Runtime: 8 ms, faster than 40.65% of C++ online submissions for Move Zeroes.
// Memory Usage: 8.9 MB, less than 56.60% of C++ online submissions for Move Zeroes.
```
          
참고
          
```cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int n = nums.size();
        int lastnonzero = 0;
        for(int i=0;i<n;i++)
        {
            if(nums[i]!=0) nums[lastnonzero++] = nums[i];
        }
        for(int i=lastnonzero;i<n;i++) nums[i] = 0;
    }
};

// Runtime: 4 ms, faster than 90.51% of C++ online submissions for Move Zeroes.
// Memory Usage: 9 MB, less than 10.63% of C++ online submissions for Move Zeroes.
```
