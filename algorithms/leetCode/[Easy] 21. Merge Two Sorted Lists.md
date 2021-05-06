문제: https://leetcode.com/problems/merge-two-sorted-lists/    
          
문제 요약: 두 정렬된 리스트가 주어진다. 이 때 이 두 리스트를 정렬해 하나의 리스트로 통합하기             
          
각각 리스트의 다음 수를 비교한 결과에 따라 더 작은 수인 리스트 a의 다음 수와 기존 b의 이번 수를 다시 재귀함수를 이용해 둘 중 한 리스트의 다음이 NULL이 될 때까지 정렬하도록 한다.
```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* a, ListNode* b) {
        if (a == NULL) return b;
        if (b == NULL) return a;

        ListNode *c;
        if (a->val < b->val){
            c = a;
            c->next = mergeTwoLists(a->next, b);
        }
        else{
            c = b;
            c->next = mergeTwoLists(a, b->next);
        }
        return c;
    }
};

//Runtime: 12 ms, faster than 24.92% of C++ online submissions for Merge Two Sorted Lists.
//Memory Usage: 14.9 MB, less than 35.16% of C++ online submissions for Merge Two Sorted Lists.
```
