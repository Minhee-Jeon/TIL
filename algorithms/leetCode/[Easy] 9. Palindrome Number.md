문제: https://leetcode.com/problems/palindrome-number/discuss/     
       
문제 요약: 주어진 수가 회문수인지 구하기. 단 음수는 회문수가 될 수 없다.      
          
일단 음수인 경우는 제외하고, 입력받은 수를 하나하나 배열에 넣고 배열에서 회문수인지 여부를 for문으로 검사했다.       
```cpp
class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0){
            return false;
        }
        
        vector<int> nums;
        while (x != 0) {
            const int mod = x % 10;
            x /= 10;
            nums.push_back(mod);
        }
        
        for(int i=0; i<nums.size()/2; ++i) {
            if(nums[i] != nums[nums.size() - (i+1)]) {
                return false;
            }
        }
        
        return true;
    }
};

//Runtime: 12 ms, faster than 47.95% of C++ online submissions for Palindrome Number.
//Memory Usage: 9.5 MB, less than 6.72% of C++ online submissions for Palindrome Number.
```
