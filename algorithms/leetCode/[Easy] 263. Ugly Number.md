문제: https://leetcode.com/problems/ugly-number/        
          
문제 요약: 주어진 수가 2, 3, 5의 곱으로만 이루어진 `Ugly Number`인지 여부를 리턴하기. 1은 예외적으로 `Ugly Number`다.         
           
주어진 수 `n`을 5, 3, 2로 나누어떨어지는 경우 나누어떨어질 때까지 각각 수로 나눈다면 `Ugly Number`였을 때 결국 1이 될 것이다.     
이 계산 작업으로 결국 `n`이 `이 되었는지 여부를 리턴했다.            
        
```cpp
class Solution {
public:
    bool isUgly(int n) {
        if (n == 0) return false;
        while (n%5 == 0) {
            n /= 5;
        }
        while (n%3 == 0) {
            n /= 3;
        }
        while (n%2 == 0) {
            n /= 2;
        }
        return n == 1;
    }
};

// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Ugly Number.
// Memory Usage: 5.9 MB, less than 63.96% of C++ online submissions for Ugly Number.
```
