문제: https://leetcode.com/problems/plus-one/   

문제 요약: 숫자로 이뤄진 배열이 주어진다. 배열을 정수라고 생각했을 때 +1된 값으로 이루어진 배열을 리턴하면 된다. 예를 들어 `{1, 2, 3}`이 주어졌다면 `{1, 2, 4}`를, `{9, 9}`가 주어졌다면 `{1, 0, 0}`를 리턴한다.
    
주어진 배열의 마지막 자리의 수가 8 이하일 때를 제외하고는 배열을 직접 `long long`형으로 만들어서 1을 더한 값을 다시 배열로 만들어 리턴하려고 했다.    
하지만 `[5,2,2,6,5,7,1,9,0,3,8,6,8,6,5,2,1,8,7,9,8,3,8,4,7,2,5,8,9]` 같은 `long long`형으로 표현할 수 있는 수보다 더 큰 수가 만들어지는 배열로는 이 로직을 사용할 수 없다.    
배열 상태에서 올림 처리를 해야 한다.        
```cpp
class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        const int lastIdx = digits.size() - 1;
        if (digits.at(lastIdx) <= 8) {
            digits.at(lastIdx) += 1;
            return digits;
        }
        else {
            //[1, 2, 3] -> 123
            long long num = 0;
            for (int i = 0; i < digits.size(); ++i) {
                num += pow(10, i) * digits.at(lastIdx - i);
            }
            num += 1;
            digits.clear();
            //124 -> [1, 2, 4]
            while (num > 0) {
                digits.insert(digits.begin(), num % 10);
                num /= 10;

            }
            return digits;
        }
    }
};

//Line 13: Char 21: runtime error: 5.62005e+09 is outside the range of representable values of type 'long long' (solution.cpp)
```
