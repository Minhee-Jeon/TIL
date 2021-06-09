문제: https://leetcode.com/problems/power-of-two/           
               
문제 요약: 주어진 정수 `n`이 2의 거듭제곱인지 여부를 반환하기. `n == 2^x`에 해당한다면 true를 반환하면 된다.          

true인 경우를 적어보니 1, 2, 4, 8, 16, 32, ...였다.    
이 수들을 이진수로 1, 10, 100, 1000, 10000, 100000, ... 이렇게 표현된다. 1이 맨 앞에 위치하고 나머지 자리 수는 모두 0이라는 공통점이 있다.                    
이 점을 이용해서 `n`을 바이너리로 표현했을 때 1의 개수가 하나면 true를 반환하고, 아니면 false를 반환하도록 구현했다.           
        
```cpp
class Solution {
public:
    bool isPowerOfTwo(int n) {
       if (n < 0) return false;
       int cnt = 0;
       while (n){
           cnt += (n & 1);
           n >>= 1;
       }
       if (cnt == 1) return true;
       return false;
    }
};

// Runtime: 4 ms, faster than 33.38% of C++ online submissions for Power of Two.
// Memory Usage: 6 MB, less than 18.21% of C++ online submissions for Power of Two.
```
