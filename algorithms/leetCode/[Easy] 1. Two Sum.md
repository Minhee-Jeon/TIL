문제: https://leetcode.com/problems/two-sum/      
         
문제 요약: 주어진 배열의 각각 몇 번째 인덱스의 수를 더하면 타겟 수가 될지 두 인덱스로 이루어진 배열을 리턴하기      
      
가장 쉽게 떠오르는 이중 for문으로 브루트 포스했다.    
    
```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> answer;
        for(int i=0; i<nums.size()-1; ++i) {
            for(int j=i+1; j<nums.size(); ++j) {
                if (nums[i] + nums[j] == target) {
                    answer.push_back(i);
                    answer.push_back(j);
                }
            }
        }
        return answer;
    }
};

// Runtime: 44 ms, faster than 9.36% of C++ online submissions for Two Sum.        
// Memory Usage: 9 MB, less than 55.47% of C++ online submissions for Two Sum.
```
            
