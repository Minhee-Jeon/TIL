문제: https://leetcode.com/problems/intersection-of-two-arrays-ii/         

문제 요약: 주어진 정수 배열 `nums1`, `nums2`에서 겹치는 수를 담은 정수 배열을 반환하기. 중복되면 중복되는 만큼 담아야 한다.         
           
349번 문제에서 중복되는 부분을 담는 부분만 바꾸었다.         
          
```cpp
class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        sort(nums1.begin(), nums1.end());
        sort(nums2.begin(), nums2.end());
        int i=0, j=0;
        vector<int> vec;
        
        while (i<nums1.size() && j<nums2.size()) {
            if (nums1[i] < nums2[j]) i++;
            else if (nums1[i] > nums2[j]) j++;
            else {
                vec.push_back(nums1[i]);
                i++;
                j++;
            }
        }
        return vec;
    }
};

// Runtime: 4 ms, faster than 89.34% of C++ online submissions for Intersection of Two Arrays II.
// Memory Usage: 10 MB, less than 87.43% of C++ online submissions for Intersection of Two Arrays II.
```
