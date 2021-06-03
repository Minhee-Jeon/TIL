문제: https://leetcode.com/problems/majority-element/   
          
문제 요약: 주어진 정수형 배열에서 과반수를 차지하고 있는 정수를 리턴하기. 배열에는 항상 과반수의 양의 수가 존재한다고 가정한다.        
         
배열에 포함된 원소들 중 절반 이상 포함된 원소를 linear time 과 constant space 로 찾을 수 있는 Boyer-Moore 과반수 투표 알고리즘을 이용해 풀었다. 
```cpp
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int cnt=1;
        int major=nums[0];
        for(int i=1;i<nums.size();i++){
            if(nums[i]==major) cnt++;
            else {
                if(cnt==1){
                    major = nums[i];
                    cnt=1;
                }
                else cnt--;
            }
        }
        return major;
    }
};

// Runtime: 16 ms, faster than 79.68% of C++ online submissions for Majority Element.
// Memory Usage: 19.6 MB, less than 83.20% of C++ online submissions for Majority Element.
```
