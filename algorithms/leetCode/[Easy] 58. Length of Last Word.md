문제: https://leetcode.com/problems/length-of-last-word/   
    
문제 요약: 주어진 문자열에서 띄어쓰기를 토큰으로 삼았을 때 맨 마지막에 나왔던 문자열의 길이를 리턴하기   
       
마지막 문자의 길이를 구하는 문제이다. 일단 생각해볼 수 있는 경우의 수에는 크게 세 가지가 있다.   
1. 공백문자만 주어지는 경우    
2. (공백) + 일반문자열 ((공백) + 일반문자열) 처럼 일반문자열로 끝나는 경우   
3. (공백) + 일반문자열 + ... + 공백 처럼 공백문자로 끝나는 경우    
모든 경우에 공백 문자는 연이어 나올 수 있다. 3번 경우처럼 공백문자로 끝나는 경우가 있기 때문에 리턴하기 위해서 항상 마지막 일반문자열 길이를 저장해두고 있어야 한다.   
     
처음 생각해둔 방법은 공백문자가 온 뒤 일반문자열이 올 때마다 새로운 길이를 카운트업하는 방법이다.        
공백 문자가 나오면 다음 문자가 나왔을 때 새로 글자수를 써나감을 나타내는 변수 `cntNewLength`를 만들고 공백 문자가 나올 때 `True`로 설정했다.   
공백 문자가 아닌 일반 문자가 나왔을 때 이 값이 `True`라면 마지막 단어의 길이인 `lastLength` 값을 새로 카운트업한다. 이 작업을 반복하고 `lastLength`를 리턴한다.     
```cpp
class Solution {
public:
    int lengthOfLastWord(string s) {
        int lastLength = 0;
        bool cntNewLength = 0;
        
        for(int i=0; i<s.length(); ++i) {
            if(s[i] == ' ') {
                cntNewLength = 1;
                continue;
            }
            else if (cntNewLength == 1) {
                lastLength = 0;
                cntNewLength = 0;
            }
            ++lastLength;
        }
        return lastLength;
    }
};

// Runtime: 4 ms, faster than 64.60% of C++ online submissions for Length of Last Word.
// Memory Usage: 6.5 MB, less than 59.66% of C++ online submissions for Length of Last Word.
```   

`cntNewLength`라는 변수를 굳이 만들어야 하나? 마지막 문자열 길이를 저장해두는 변수 `past`를 만들어두고 문자를 순회할 때 일반문자열이 나왔을 때 `past`값을 바꿀 수 있지 않을까?          
`length`로 현재 문자열의 길이를 임시로 담아두고 공백문자가 왔을 때 `past`에 저장 후 0으로 만든 후 일반문자열이 왔을 때마다 `length`값을 카운트업을 하는 작업을 반복한다.   
문자열 마지막 글자 차례에 `length`가 0보다 크다면 마지막 글자 길이일 것이므로 `length`를, 0이라면 마지막 글자가 0이므로 저장해둔 `path`를 리턴하면 된다.
```cpp
class Solution {
public:
    int lengthOfLastWord(string s) {
        int past = 0, length = 0;
        for(char c: s) {
            if (c == ' ') { 
                past = length > 0 ? length : past; 
                length = 0; 
            }
            else length++;
        }
        return length > 0 ? length : past;
    }
};

// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Length of Last Word.
// Memory Usage: 6.3 MB, less than 93.38% of C++ online submissions for Length of Last Word.
```
