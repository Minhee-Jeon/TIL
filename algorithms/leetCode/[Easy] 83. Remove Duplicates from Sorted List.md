문제: https://leetcode.com/problems/remove-duplicates-from-sorted-list/   
      
문제 요약: 주어지는 정렬된 리스트에서 중복값을 제외해서 리턴시키자.    
   
1. `head`를 가리키는 포인터 `answer`를 만들어두고 `head` 자체를 조작한 후 `answer` 리턴하기
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
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* answer = head;
        if (head == NULL) {
            return head;
        }
        
        while(head->next != NULL) {
            if (head->val == head->next->val) {
                head->next = head->next->next;
            }
            else {
                head = head->next;
            }
        }
        return answer;
    }
};

// Runtime: 12 ms, faster than 40.26% of C++ online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 11.6 MB, less than 19.73% of C++ online submissions for Remove Duplicates from Sorted List.
```
      
2. `head`를 가리키는 포인터 변수 `tmp`를 만들어두고 `tmp`로 `head`를 조작시킨 후 `head` 리턴하기              
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
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* tmp = head;
        while(tmp != NULL && tmp->next != NULL) {
            if (tmp-> val == tmp->next->val) {
                tmp->next = tmp->next->next;
            }
            else {
                tmp = tmp->next;
            }
        }
        return head;
    }
};

// Runtime: 12 ms, faster than 40.26% of C++ online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 11.5 MB, less than 62.13% of C++ online submissions for Remove Duplicates from Sorted List.
```
