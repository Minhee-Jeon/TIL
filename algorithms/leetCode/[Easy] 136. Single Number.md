문제: https://leetcode.com/problems/single-number/        
                
문제 요약: NULL이 아닌 정수형 리스트 `num`이 주어진다. `num`에는 한 숫자를 제외하고 모든 수가 두 번 담겨 있다. 이 때 하나만 담겨 있는 수를 구해보자.     
                   
`nums`를 순회하면서 처음 나오는 수는 정수형 리스트 `tmpNums`에 저장해둔다.     
`nums`를 순회하면서 `tmpNums`와 비교해보며 일치하는 수는 `tmpNums`에서 지워낸다.    
이 저장과 삭제를 반복하면서 `tmpNums`에는 `nums`에서 한번밖에 나오지 않은 수만 남게 되고, 그 값을 리턴한다.          
```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        if (nums.size() == 1) return nums.at(0);

        list<int> tmpNums;
        for (int i = 0; i < nums.size(); ++i) {
            if (tmpNums.size() == 0) {
                tmpNums.push_back(nums.at(i));
            }
            else {
                bool erased = false;
                for (std::list<int>::iterator it = tmpNums.begin(); it != tmpNums.end(); ++it) {
                    
                    if (nums[i] == *it) {
                        tmpNums.erase(it);
                        erased = true;
                        break;
                    }
                }
                if (!erased) {
                    tmpNums.push_back(nums.at(i));
                }
            }
        }
        return tmpNums.back();
    }
};

// Runtime: 636 ms, faster than 6.17% of C++ online submissions for Single Number.
// Memory Usage: 19.7 MB, less than 22.06% of C++ online submissions for Single Number.
```
                    
                    
다른 풀이들을 보니 거의 모두 `XOR` 연산을 활용해 풀었다. `res` 변수를 0으로 초기화해둔 후 `nums`를 순회하며 `XOR` 연산을 하면 `res`에 배타적 논리합이 저장된다.      
처음 나오는 수가 계산되면 `res`에 해당 수가 더해지고, 두 번째 나오면 `res`에서 해당 수가 빼기 연산이 되더라...     
비트 연산자 참 모르겠고 어렵지만 `XOR` 연산의 의미에 대해 고찰해볼 수 있었다.           
```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        
        int res = 0;
        
        for(int i:nums)
        {
            res ^= i;
        }
        
        return res;
        
    }
};
```
