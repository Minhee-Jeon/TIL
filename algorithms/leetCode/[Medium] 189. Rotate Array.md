문제: https://leetcode.com/problems/rotate-array/       
     
문제 요약: 정수로 이루어진 배열 `nums`와 정수 `k`가 있다. `k`만큼 맨 뒤 정수를 맨 앞으로 가져온 결과의 배열을 만드는 함수를 만드시오.      
    
문제에서는 푸는 방법이 여러 개가 있다고 알려주었다.     
가장 쉬운 방법은 추가적인 메모리를 사용하는 것이었다.    
하지만 주어진 배열만을 가지고 풀 수 있는 방법을 이용해 보았다.    
*hint4*의 **cyclic-dependencies**는 뭘까...?     
       
```cpp
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int rotateNum = k % nums.size();
        for (int i=0; i<rotateNum; ++i) {
            nums.insert(nums.begin(), nums.back());
            nums.pop_back();
        }
    }
};
```
