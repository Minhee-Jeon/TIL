문제: https://leetcode.com/problems/maximum-subarray/    

문제 요약: 주어진 배열에서 연속된 배열의 합 중 최댓값을 구하기   
   
연속된 배열의 합이니까 배열의 합이 음수가 되는 순간 최댓값이 될 순 없다고 생각했다.    
물론 배열에 음수만 있을 때를 대비해 여태껏 만들어둔 배열의 합을 저장할 변수인 `tmpMax`는 배열에서 올 수 있는 가장 작은수보다 더 작은 수로 초기화했다.   
임시로 연속된 배열의 합을 인덱스 돌려가며 `tmpAdd`에 저장하고, 이 값이 0보다 작으면 바로 다음 인덱스부터 새로 합을 만들어나가고 `tmpMax`보다 크다면 그 값을 저장해 리턴했다.   
         
```cpp
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int tmpAdd = 0, tmpMax = -100001; //10의 5승보다 작은 수로 초기화
        for(int i=0; i<nums.size(); ++i) {
            tmpAdd += nums[i];
            
            if(tmpMax < tmpAdd) {
                tmpMax = tmpAdd;
            }
            
            if(tmpAdd < 0){
                tmpAdd = 0;
            }
        }
        return tmpMax;
    }
};

// Runtime: 8 ms, faster than 46.07% of C++ online submissions for Maximum Subarray.
// Memory Usage: 13.2 MB, less than 10.87% of C++ online submissions for Maximum Subarray.
```
