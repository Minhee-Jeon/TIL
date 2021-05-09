문제: https://leetcode.com/problems/remove-duplicates-from-sorted-array/              
       
문제 요약: 주어진 정렬된 리스트에서 중복된 수는 삭제한다. 중복이 제거된 리스트의 사이즈를 반환해보자.       
     
새로운 빈 리스트에 중복 제거된 수들을 넣을 생각을 잠깐 했지만 굳이 새로운 메모리를 써야할까 싶었다.      
주어진 벡터에서 모든 수를 가리키는 포인터 `allPointer`와 중복 제거된 수만을 가리키는 포인터 `newPointer`를 사용해 적절히 크기 비교했다.

```cpp
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int allPointer = 0;
        int newPointer = 0;
        if (nums.size() == 0){
            return 0;
        }
        
        for(; allPointer<nums.size(); ++allPointer) {
            if(allPointer == newPointer && allPointer + 1<nums.size()) {
                ++allPointer;
            }
            if(nums[newPointer] < nums[allPointer]) {
                nums[++newPointer] = nums[allPointer];
            }
        }
        
        return newPointer + 1;
    }
};

//Runtime: 8 ms, faster than 82.51% of C++ online submissions for Remove Duplicates from Sorted Array.
//Memory Usage: 13.7 MB, less than 17.69% of C++ online submissions for Remove Duplicates from Sorted Array.
```
