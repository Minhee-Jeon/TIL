문제: https://leetcode.com/problems/add-digits/        
           
문제 요약: 주어진 수의 각 자리를 더한 결과가 10 이하일 때, 그 결괏값을 리턴하기. 결과가 10 이상이라면 각 자리 수를 더하는 작업을 10 이하가 될때까지 반복하자.        

구하려는 수가 10 이하가 될 때까지 재귀하며 각 자리수를 더하도록 구현했다.            

```cpp
class Solution {
public:
    int addDigits(int num) {
        int newNum = 0;
        while (num > 0) {
            newNum += num%10;
            num /= 10;
        }
        
        if (newNum < 10) return newNum;
        return addDigits(newNum);
    }
};

// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Add Digits.
// Memory Usage: 5.8 MB, less than 67.97% of C++ online submissions for Add Digits.
```
