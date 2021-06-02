문제: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/      
         
문제 요약: 정수로 이루어진 배열과 배열의 임의의 두 수를 더한 결과인 타겟 넘버가 주어진다. 이 때 두 수의 인덱스로 이루어진 배열을 구하기          
                 


```cpp
class Solution {
public:
    
    vector<int> twoSum(vector<int>& nums, int target) {
        int left = 0;
        int right = nums.size()-1; 
        while (nums[left] + nums[right] != target && left <= right){
            if (nums[left] + nums[right] > target) right--;
            else if (nums[left] + nums[right] < target) left++;
        }
        return {left+1, right+1};
    }
};

// Runtime: 16 ms, faster than 20.73% of C++ online submissions for Two Sum II - Input array is sorted.
// Memory Usage: 9.7 MB, less than 40.28% of C++ online submissions for Two Sum II - Input array is sorted.
```
