문제: https://leetcode.com/problems/reverse-string/       
             
문제 요약: 주어진 문자의 배열 `s`의 순서를 역으로 만드는 함수를 완성하자.          
             
c++의 표준라이브러리 `vector`는 한번에 순서를 역으로 만드는 함수 `reverse()`를 제공하고 있다.           
             
```cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
         reverse(s.begin(),s.end());
    }
};

// Runtime: 20 ms, faster than 77.72% of C++ online submissions for Reverse String.
// Memory Usage: 23.3 MB, less than 38.19% of C++ online submissions for Reverse String.
```
        
stl의 함수 하나만으로 문제를 풀기엔 너무 양심없어서....      
`s`의 처음 문자와 마지막 문자에서부터 안쪽으로 이동해가며 `swap()`도 해보았다.              
         
```cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
        int end = s.size() - 1;
        int start = 0;
        while(start <= end)
        {
            swap(s[start++], s[end--]);
        }
    }
};

// Runtime: 16 ms, faster than 94.03% of C++ online submissions for Reverse String.
// Memory Usage: 23.3 MB, less than 38.19% of C++ online submissions for Reverse String.
```
