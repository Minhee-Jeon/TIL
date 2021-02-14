문제: https://leetcode.com/problems/add-two-numbers/    
    
문제 요약: 0~9까지의 숫자를 가진 두 연결 리스트가 주어진다. 역배열로 이루어진 연결 리스트들이 나타내는 두 숫자를 더해 해당 숫자를 연결 리스트 형태로 반환하기    
    
for문과 while문을 이용해 널포인트가 되기 전까지 다음 노드로 이동하며 두 리스트의 합을 계산하고 덧셈 올림을 처리한다.   
마지막 올림수가 1이 되었을 때 반영하기를 추가했다.      
    
```cpp
struct ListNode {
	int val;
	ListNode* next;
	ListNode() : val(0), next(nullptr) {}
	ListNode(int x) : val(x), next(nullptr) {}
	ListNode(int x, ListNode* next) : val(x), next(next) {}
};

class Solution {
public:
	ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
		ListNode* ret = new ListNode(-99999);
		ListNode* p;
		p = ret;
		int carry = 0;
		int sum, remain;
		while (l1 != nullptr && l2 != nullptr) {
			sum = l1->val + l2->val + carry;
			carry = sum / 10;
			remain = sum % 10;
			p->next = new ListNode(remain);
			p = p->next;
			l1 = l1->next;
			l2 = l2->next;
		}

		if (l1 != nullptr) {
			while (l1 != nullptr) {
				sum = l1->val + carry;
				carry = sum / 10;	
				remain = sum % 10;
				p->next = new ListNode(remain);
				p = p->next;
				l1 = l1->next;
			}
		}

		else if(l2 != nullptr) {
			while (l2 != nullptr) {
				sum = l2->val + carry;
				carry = sum / 10;
				remain = sum % 10;
				p->next = new ListNode(remain);
				p = p->next;
				l2 = l2->next;
			}
		}

    //마지막 올림수가 1이 되었을 때 반영하기
		if (carry == 1) {
			p->next = new ListNode(1);
			p = p->next;
		}

		return ret->next;
	}
};
```
