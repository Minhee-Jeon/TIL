문제: https://leetcode.com/problems/contains-duplicate/            
           
문제 요약: 정수로 이루어진 배열이 주어졌을 때, 해당 배열에서 중복되는 수가 있다면 `true`를, 중복되는 정수가 없으면 `false`를 리턴하기          
           
주어진 배열 `nums`에서 한 번씩만 나왔던 수들을 저장할 임시 배열 `tmpNums`을 만들어둔 후 `nums`와 `tmpNums`가 가지고 있는 값들을 이중 for문으로 비교한다.         
`tmpNums`를 다 돌도록 `nums.at(i)`의 수와 중복되지 않았다면 `tmpNums`에 해당 수를 추가한다.            
시간복잡도가 O(n^2)라서 `nums`의 길이가 어마무시하면 통과되지 못하겠다 싶었는데, nums = [-24500, -24499, ... , 24999, 25000]인 case에서 역시나 Time Limit Exceeded되었다.      
```cpp
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        if(nums.size() == 1) return false;
        vector<int> tmpNums;
        tmpNums.push_back(nums.at(0));
        
        for(int i=1; i<nums.size(); ++i) {
            for(int j=0; j<tmpNums.size(); ++j) {
                if(nums.at(i) == tmpNums.at(j)) return true;
            }
            tmpNums.push_back(nums.at(i));
        }
        return false;
    }
};
```
                    
새로운 메모리 공간을 만들지 않으면서 `nums`만 탐색할 수 있는 방법이 있지 않을까?? 하며 위의 test case를 보았다.        
이 경우에는 크기순대로 정렬이 되어 있었고 처음부터 끝까지 바로 앞뒤 인덱스의 수를 비교하면 될 것 같았다.             
하지만 이 test case가 아닌 다른 경우 정렬이 되어있지 않을 수도 있어 정렬을 시킨 다음, 연속된 두 인덱스의 수를 비교했다.             
```cpp
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        for(int i=1;i<nums.size();i++){
            if(nums[i-1] == nums[i]){
                return true;
            }
        }
        return false;
    }
};

// Runtime: 36 ms, faster than 47.55% of C++ online submissions for Contains Duplicate.// 
// Memory Usage: 15.5 MB, less than 74.43% of C++ online submissions for Contains Duplicate.
         
```
