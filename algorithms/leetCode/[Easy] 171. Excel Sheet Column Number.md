문제: https://leetcode.com/problems/excel-sheet-column-number/submissions/          
            
문제 요약: 엑셀 시트의 컬럼명 규칙을 따르는 알파벳으로 이루어진 문자열이 주어진다. 이 때 문자열에 해당하는 숫자를 리턴해보기          
           
`A`는 1, `Z`는 26을 의미한다. `AA`는 27이 된다.      
이 점을 고려해 `columnTitle`을 26진수 처리하면 되겠다고 느꼈고 한 자리 수를 넘어가면 26을 곱했다.       
또 ascii 코드를 이용해 대문자 문자에서 숫자로 변형해 일의 자리 수를 더했다.     

```cpp
class Solution {
public:
    int titleToNumber(string columnTitle) {
        int ans = 0;
        for(int i=0; i<columnTitle.length(); ++i) {
            if (i > 0) {
                ans *= 26;
            }
            ans += columnTitle[i] - 64;
        }
        return ans;
    }
};

// Runtime: 4 ms, faster than 40.97% of C++ online submissions for Excel Sheet Column Number.
// Memory Usage: 6 MB, less than 31.44% of C++ online submissions for Excel Sheet Column Number.
```
