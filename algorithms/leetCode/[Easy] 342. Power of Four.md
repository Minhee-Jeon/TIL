문제: https://leetcode.com/problems/power-of-four/         
        
문제 요약: 주어진 수 `n`이 4의 승수인지 판별하기. 단, 1은 4^0이라 `true`.          
           
[power of three](https://github.com/Minhee-Jeon/TIL/blob/master/algorithms/leetCode/%5BEasy%5D%20326.%20Power%20of%20Three.md)에서 `n`이 1이 될때까지 재귀함수로 계속 3으로 나눠보고 
도중에 나머지가 0이 아니라면 `false`를 반환했다.           
이번에는 `n`을 1 이하가 될 때까지 나누고 1이 되었는지 여부를 리턴했다. 단, `n`을 정수 형태로 나누면 예를 들어 5가 `n`일 경우도 `n=1`이 되니 4승수가 아닌데도 `true`를 리턴하게 된다.        
이런 경우를 방지하고자 `n`을 double로 형변환해두어 4의 배수가 아니고 나머지가 1이 될 수 있는 경우를 없애버렸다.            
```cpp
class Solution {
public:
    bool isPowerOfFour(int n) {
        double a=n/1.0;
        if(a==1){
            return true;
        }
        while(a>1) {
            a /= 4;
            cout << a << endl;
        }
        return a==1;
    }
};

// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Power of Four.
// Memory Usage: 5.8 MB, less than 87.72% of C++ online submissions for Power of Four.
```
