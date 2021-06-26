문제: https://leetcode.com/problems/power-of-three/        
         
문제 요약: 주어진 수 `n`이 3의 곱으로만 이루어진 수인지 반환하기 (단, 1은 3^0이라 `true`를 반환)          
          
`n`이 3승수의 수라면 3으로만 계속 나눴을 때 1이 될 때까지의 나머지는 계속 0이다. 3이 아닌 다른 수가 곱해져 있는 경우 0이 아닌 나머지가 나오게 된다.       
이 점을 이용해 `divideThree()`를 재귀함수로 만들어 `n`이3승수의 수인지 여부를 반환했다.             

```cpp       
class Solution {
public:
    bool divideThree(int n) {
        if (n == 1) return true;
        if (n%3 == 0) return divideThree(n/3);
        else return false;
    }
    
    bool isPowerOfThree(int n) {
        if (n == 0) return false;
        else return divideThree(n);
    }
};

// Runtime: 24 ms, faster than 15.32% of C++ online submissions for Power of Three.
// Memory Usage: 5.7 MB, less than 88.71% of C++ online submissions for Power of Three.
```
