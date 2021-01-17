문제: [https://leetcode.com/problems/reverse-integer/]             
              
문제 요약: 주어진 정수를 역수로 만들기(음수면 음수 기호를 붙인 채로 역수화)       
     
처음 문제를 접했을 때에는 문자열로 만들어서 FILO로 꺼내면 되지 않을까 했는데, 문자열로 만들면 런타임이 길어질 것 같아 int형을 유지한 상태에서 역수로 만들었다.

```cpp
class Solution {
public:
    int reverse(int x) {
        maxInt = 2147483647;
        minInt = -2147483648;
        
        int pop = 0;
        int temp = 0;
        int reverse = 0;
        
        while(x != 0) {
            pop = x % 10;
            x = x / 10;
            
            if(reverse > maxInt / 10 || (reverse == maxInt / 10 && pop > 7)) {
                return 0;
            }
            if(reverse < minInt / 10 || (reverse == minInt / 10 && pop < -8)) {
                return 0;
            }
            
            temp = reverse * 10 + pop;
            reverse = temp;
        }
        
        return reverse;
    }
};
```
