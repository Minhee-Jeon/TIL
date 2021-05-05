문제: https://leetcode.com/problems/roman-to-integer/submissions/    
        
문제 요약: 주어진 로마수를 정수값으로 바꾸기   
   
주어진 로마수에서 바로 앞 기호보다 큰 기호가 나오면 큰 기호를 빼주면 된다는 사실만 유의해 for문을 사용하여 주어진 로마수 기호를 더했다.
```cpp
class Solution {
public:
    int romanToInt(string s) {
        map<char,int> mp = {{'I',1},{'V',5},{'X',10},{'L',50},{'C',100},{'D',500},{'M',1000}};
        int sum = 0;
        for(int i=0;i<s.length();++i)
        {
            if(i+1<s.length() && mp[s[i]]<mp[s[i+1]])
            {
                sum+=mp[s[i+1]]-mp[s[i]];
                i++;
            }
            else 
                sum+=mp[s[i]];
        }
        return sum;
    }
};

//Runtime: 20 ms, faster than 18.51% of C++ online submissions for Roman to Integer.
//Memory Usage: 8.2 MB, less than 25.53% of C++ online submissions for Roman to Integer.
```
