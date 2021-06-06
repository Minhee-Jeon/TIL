문제: https://leetcode.com/problems/happy-number/            
           
문제 요약: 주어진 수의 각 자리수의 제곱을 더하는 작업을 반복했을 때 더한 값이 1인 경우가 있다면 그 수는 **Happy Number**이다. 주어진 수가 **Happy Number**인지 여부를 리턴해보자.           

`doProcess()`는 주어진 수의 각 자리수의 제곱을 더한 값을 반복한다.      
`doProcess()` 도중 `processNum`이 1인 경우가 있다면 `isHappy()`는 `true`를 반환한다.       
하지만 문제는 `processNum`이 1이 되지 않는다면 `isHappy()`가 무한 루프에 빠진다는 것이다. 1이 되지 않는다면 어떻게 해야 `isHappy()`가 `false`를 리턴할 수 있을까?

```cpp
class Solution {
public:
    int doProcess(int n) {
        int processNum = 0;
        while (n > 0) {
            processNum += (n % 10) * (n % 10);
            n /= 10;
        }
        return processNum;
    }
    
    bool isHappy(int n) {
        while (1) {
            int tmp = doProcess(n);
            if (tmp == 1) return true;
            n = doProcess(n);
        }
        return false;
    }
};
```
