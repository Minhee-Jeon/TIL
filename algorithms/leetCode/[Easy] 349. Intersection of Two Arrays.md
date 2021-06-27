문제: https://leetcode.com/problems/intersection-of-two-arrays/           
             
문제 요약: 주어진 배열 `nums1`, `nums2`에서 겹치는 숫자를 한번씩만 담은 배열을 반환하기
             
`nums1`, `nums2`를 정렬해서 비교하기 좋게 만들어둔 후 인덱스를 끝까지 돌려가며 비교한다.        
겹치는 수들을 한번씩만 `vec`에 담아두고 `vec`을 반환한다.             
```cpp
class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        sort(nums1.begin(), nums1.end());
        sort(nums2.begin(), nums2.end());
        vector<int> vec;
        int i = 0, j = 0;
        
        while (i<nums1.size() && j<nums2.size()) {
            if (nums1[i] < nums2[j]) ++i;
            else if (nums1[i] > nums2[j]) ++j;
            else {
                if(!vec.empty() && vec[vec.size()-1] == nums1[i]) {
                    ++i;
                    ++j;
                    continue;
                }
                vec.push_back(nums1[i]);
                ++i;
                ++j;
            }
        }
        return vec;
    }
};

// Runtime: 8 ms, faster than 49.24% of C++ online submissions for Intersection of Two Arrays.
// Memory Usage: 10 MB, less than 90.28% of C++ online submissions for Intersection of Two Arrays.
```
