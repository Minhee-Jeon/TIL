문제: https://leetcode.com/problems/valid-anagram/      

문제 요약: string `s`와 `t`가 주어진다. 각 문자열이 서로의 애너그램인지를 리턴해보자.       
       
순서는 뒤죽박죽인데 두 문자열 안에 분포되어 있는 각각 문자들의 종류와 수가 같느냐? 라는 질문에 바로 정렬이 떠올라 문자열을 `sort()`한 후 비교했다.       

```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        sort(s.begin(), s.end());
        sort(t.begin(), t.end());
        bool ans = s == t ? true : false;
        return ans;
    }
};

// Runtime: 16 ms, faster than 33.20% of C++ online submissions for Valid Anagram.
// Memory Usage: 7.2 MB, less than 65.79% of C++ online submissions for Valid Anagram.
```
