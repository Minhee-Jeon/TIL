문제: https://leetcode.com/problems/nim-game/        
       
문제 요약: 정수 `n`이 주어지고, 나는 친구와 `n`에서 1개에서 3개까지 중 하나의 수를 빼나간다. 내가 먼저 시작하고, 본인의 차례 때 빼기를 해서 `n`을 0으로 만들면 승리이다. 
`n`을 가지고 게임을 할때 어떠한 경우로도 이길 수 없다면 `false`를, 이길 수 있는 경우가 있다면 `true`를 리턴하자.       
           
4를 입력받으면 절대 못이긴다. 1~ 3 중 어떤 수를 빼든지, 다음 차례에 친구가 마지막 돌을 제거하기 때문이다.      
4의 배수도 마찬가지.          

```cpp
class Solution {
public:
    bool canWinNim(int n) {
        return n%4 != 0;
    }
};

// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Nim Game.
// Memory Usage: 5.9 MB, less than 57.66% of C++ online submissions for Nim Game.
```
