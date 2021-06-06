문제: https://leetcode.com/problems/reverse-linked-list/         
           
문제 요약: 단방향 연결 리스트가 주어졌을 때, 그 리스트의 노드들이 반대로 나열된 단방향 연결 리스트를 리턴하기           
              
새로운 메모리 공간을 할당하지 않고 `head`부터 `next`와 `prev`를 조작하며 리스트의 순서를 바꾼다.           

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
    ListNode* reverseList(ListNode* head) {
        ListNode *prev,*curr,*next;
        curr=head;
        prev=NULL;
        while(curr!=NULL)
        {
            next=curr->next;
            curr->next=prev;
            prev=curr;
            curr=next;
        }

        return prev;
    }
};

// Runtime: 12 ms, faster than 7.06% of C++ online submissions for Reverse Linked List.
// Memory Usage: 8.4 MB, less than 19.51% of C++ online submissions for Reverse Linked List.
```
