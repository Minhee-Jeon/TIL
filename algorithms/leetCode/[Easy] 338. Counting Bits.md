문제: https://leetcode.com/problems/counting-bits/       
         
문제 요약: `n`이라는 수가 주어질 때, 0에서 `n`까지의 수를 이진수로 나타냈을 때 포함된 1의 개수를 담은 `n+1` 크기의 배열을 리턴하기         

`n`만큼 0에서부터 1씩 올라가면서 순회하는 `while`문을 만들어두었다. (그만큼의 배열을 만들어야 하니까)        
그 안에서 비트의 맨 오른쪽인지 1인지의 여부로 `count`를 올리고 맨 오른쪽의 비트를 지우기를 반복해 해당 수에서 1이 얼마나 있는지를 `count`에 저장해두고 배열에 추가했다.       
시간복잡도는 O(n^2)이라고 해야하려나...       
비트연산으로 1의 개수를 알아내는 방법이 이게 최선이 아닐거라고 생각해서 검색을 했다.              

```cpp
class Solution {
public:
    vector<int> countBits(int n) {
        vector<int> ans;
        int temp=0;
        while(temp<=n){
            int num=temp, count=0;
            while(num){
                count += num & 1;
                num >>= 1;
            }
            ans.push_back(count);
            temp++;
        }
        return ans;
    }
};

// Runtime: 8 ms, faster than 33.08% of C++ online submissions for Counting Bits.
// Memory Usage: 8.5 MB, less than 29.79% of C++ online submissions for Counting Bits.
```
        
초창기 UNIX를 개발하신 브라이언 커니핸 (Brian Kernighan) 교수님의 방법을 사용하면 O(nlogn)의 시간복잡도로 풀 수 있다.        
어떻게 이런걸 고안해내셨는지..... 되게 신기한 마법 보는 느낌이다.          
```cpp
public static int countBits2(int number) {
    int count = 0;
    // N = N AND (N-1)를 정수값이 0이 될때까지 반복한다. 
    while (number > 0) {
        number &= number - 1;
        count++;
    }
    return count;  // 반복하는 카운트를 세면 1인 비트를 얻을 수 있다. 
}
```

```cpp
class Solution {
public:
    vector<int> countBits(int n) {
        vector<int> ans;
        int temp=0;
        while(temp<=n){
            
            int num=temp, count=0;
            while(num){
                num = num & num-1;
                count++;
            }
            ans.push_back(count);
            temp++;
        }
        return ans;
    }
};

// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Counting Bits.
// Memory Usage: 8.6 MB, less than 14.84% of C++ online submissions for Counting Bits.
```
