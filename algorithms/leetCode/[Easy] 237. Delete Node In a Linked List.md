문제: https://leetcode.com/problems/delete-node-in-a-linked-list/        
      
문제 요약: 단방향 리스트의 노드를 지우자. 리스트의 첫 노드가 아닌 지워야 할 노드가 주어진다.         
         
노드를 지우기 위해서는 현재 노드의 다음 노드의 값을 현재 노드에 대입한 후, 그 노드를 다음 다음 노드를 가리키게 했다.        
```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    void deleteNode(ListNode* node) {
        node->val = node->next->val;
        node->next = node->next->next;
    }
};

// Runtime: 12 ms, faster than 80.43% of C++ online submissions for Delete Node in a Linked List.
// Memory Usage: 7.6 MB, less than 33.18% of C++ online submissions for Delete Node in a Linked List.
```
           
제출하고 보니 다른 사람들의 코드가 런타임에서도, 메모리 용량에서도 더 좋은 성능을 보였다.        
생각해보건데, 내가 풀었던 방식은 주어졌던 노드를 가리키지만 않았을 뿐 그 값은 메모리에 그대로 남아있었다.    
이 방식은 리스트가 끝날 때까지 지워야할 노드부터 현재 노드를 다음 노드로 땡겨오는 작업이라 노드 하나를 `NULL`로 만들어 메모리 공간을 덜 차지한다.       
근데 내 생각으론 더 많은 작업을 한 것 같은데 왜 런타임은 이전 코드보다 더 짧은걸까...??          
```cpp
class Solution {
public:
    void deleteNode(ListNode* node) {
        ListNode* prev = node;
        
        while(node->next != nullptr){
            node->val = node->next->val;
            prev = node;
            node = node->next;
        }
        prev->next = nullptr;
    }
};

// Runtime: 8 ms, faster than 98.54% of C++ online submissions for Delete Node in a Linked List.
// Memory Usage: 7.5 MB, less than 70.64% of C++ online submissions for Delete Node in a Linked List.
```
