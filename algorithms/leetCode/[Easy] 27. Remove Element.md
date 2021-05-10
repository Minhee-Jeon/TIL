문제: https://leetcode.com/problems/remove-element/        
        
문제 요약: 리스트와 정수값인 `val`이 주어진다. 리스트에 존재하는 `val`들을 제거하고 해당 리스트의 길이를 리턴하자.       
     
C++에서 제공하는 stl인 vector에서는 리스트의 값을 바로 삭제하는 함수인 `erase()`를 가지고 있어 손쉽게 처리할 수 있었다.       
```cpp
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        for(int i=0; i<nums.size(); ++i) {
            if(nums[i] == val) {
                nums.erase(nums.begin() + i);
                --i;
            }
        }
        return nums.size();
    }
};

// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Remove Element.
// Memory Usage: 8.7 MB, less than 68.35% of C++ online submissions for Remove Element.
```
