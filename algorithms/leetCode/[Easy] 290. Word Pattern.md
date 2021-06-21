문제: https://leetcode.com/problems/word-pattern/              

문제 요약: `pattern`과 NULL이 아닌 단어 `s`가 주어졌을 때, `s`를 공백으로 나눴을 때 `pattern`과 똑같이 구성되어 있는지 판별하기            

일단 `s`의 각 단어들을 인덱스별로 저장해두고 비교하는 게 편하겠다고 생각되어 띄어쓰기를 기준으로 끊어 `words`에 저장해두었다.       
이후 새로운 `pattern`이 나타나면 `pattern`에 해당하는 단어를 짝을 지어 `wordMap`에 저장해두었다.      
이렇게 되면 `words`를 순회하며 `wordMap`과 비교했을 때 일치하지 않으면 `false`를 리턴하면 된다.       
라고 맨 처음에 생각했는데, edge case가 좀 있었다.       
1. `pattern`의 길이와 `words`의 사이즈가 다르다면 `false`        
2. `wordMap`에서 key는 다른데 value가 같은 경우가 있으면 `false`    
      
for문을 남발했는데 런타임이 짧은게 이상하다.. edge case도 있고 코드가 전반적으로 지저분한데 좀더 간단한 풀이는 없을까?          

```cpp
class Solution {
public:
    bool wordPattern(string pattern, string s) {
        map<char, string> wordMap;
        vector<string> words;
        
        //s를 vector<string>으로 만들기
        string tmpWord = "";
        for(int i=0; i<s.length(); ++i) {
            if(s.at(i) == ' ' || i == s.length() - 1) {
                if (i == s.length() - 1) 
                    tmpWord += s.at(i);
                words.push_back(tmpWord);
                tmpWord = "";
            }
            else {
                tmpWord += s.at(i);
            }
        }
        if (pattern.length() != words.size()) return false;
        
        map<char, string>::iterator it = wordMap.begin();
        for(int i=0; i<pattern.length(); ++i) {
            it = wordMap.find(pattern[i]);
            //pattern에 새로운 알파벳이 나오면 s의 해당 단어를 wordMap에 pattern과 함께 삽입
            if(it == wordMap.end()) {
                // key는 다른데 value가 같은 경우가 있으면 false
                for(int j=0; j<wordMap.size(); ++j) {
                    if (wordMap.at(pattern[j]) == words[i] && pattern[j] != pattern[i]) return false;
                }
                wordMap.insert(it, pair<char, string>(pattern[i], words[i]));
            }
            else {
                if (wordMap[pattern[i]] != words[i]) return false;
            }
        }
        return true;
    }
};

// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Word Pattern.
// Memory Usage: 6.4 MB, less than 51.56% of C++ online submissions for Word Pattern.
```
