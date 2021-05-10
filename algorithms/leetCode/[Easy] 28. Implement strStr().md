문제: https://leetcode.com/problems/implement-strstr/submissions/        
      
문제 요약: C의 `strstr()`나 Java의 `indexOf()`를 재현해보자. 문자열 두 개를 매개변수로 받아 두 번째 매개변수가 첫 번째 포함되어 있다면 포함 시작 인덱스를. 포함되어 있지 않다면 -1을 리턴한다.   
   
```cpp
class Solution {
public:
    int strStr(string haystack, string needle) {
        if (needle == "") {
            return 0;
        }
        for(int i=0; i<haystack.length(); ++i) {
            if(haystack.length()-i>=needle.length()){  // 비교할 문자열 길이가 needle보다 길 때에만
                if (haystack[i] == needle[0]){
                    if (haystack.substr(i, needle.length())==needle.c_str()){
                        return i;
                    }
                }
            }
        }
        return -1;
    }
};

// Runtime: 4 ms, faster than 75.22% of C++ online submissions for Implement strStr().
// Memory Usage: 7 MB, less than 20.35% of C++ online submissions for Implement strStr().
```
