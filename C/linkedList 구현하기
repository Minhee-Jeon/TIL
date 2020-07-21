# linkedList 구현하기   
선형 자료구조 중 하나인 **리스트**의 종류로는 다음 노드의 주소를 가지고 있는 노드들로 구성된 **단방향 리스트 (Single linked-list)**와 
이전 주소, 다음 주소 모두를 가지고 있는 **양방향 리스트(Double linked-list)**가 있다.   
이 중 단방향 리스트를 C언어로 구현해보았다.    
사실 취업 준비를 하면서 한번 JAVA로 구현해 보았는데, GC가 정말 편한 도구였다는 것을 다시한번 깨닫게 되었다.^^   
C언어로 구현하면서는 할당한 메모리를 정확히 회수하는 것에서 애를 먹었다. 하지만 덕분에 C언어의 메모리 동적 할당/회수와 포인터 변수를 더 잘 숙지할 수 있게 되었다.   

[구조체 선언부](#구조체-선언부)    
[Node 추가하기](#Node-추가하기)    
[List 출력하기](#List-출력하기)   
[Node 삭제하기](#Node-삭제하기)    
[List 안 Node 메모리 회수하기](#List-안-Node-메모리-회수하기)      
[소스코드 전체](#소스코드-전체)   
   
---   
   
## 구조체 선언부   
![111](https://user-images.githubusercontent.com/58028527/88033984-0267e280-cb7b-11ea-8202-def2e8cdbb22.jpg)    
    
## Node 추가하기   
![2222](https://user-images.githubusercontent.com/58028527/88033990-03990f80-cb7b-11ea-80fc-1aabf53736bb.jpg)    
    
## List 출력하기   
## Node 삭제하기   
![3333](https://user-images.githubusercontent.com/58028527/88033992-03990f80-cb7b-11ea-9985-a05f4eabb6cd.jpg)    
![4444](https://user-images.githubusercontent.com/58028527/88033988-03007900-cb7b-11ea-8220-ffc609a47732.jpg)    
## List 안 Node 메모리 회수하기   
## 소스코드 전체   
```c
#include <stdio.h>
#include <stdlib.h>

typedef struct node {
	int contents;
	struct node* next;
} node;

typedef struct linkedList {
	node* start;
	node* end;
} linkedList;

void addLastNode(linkedList*, int);
void deleteLastNode(linkedList*);
void deleteNthNode(linkedList*, int);
void printNode(linkedList*);
void freeNodes(linkedList*);

int main() {
	//linkedList 구조체 변수 만들고 동적할당
	linkedList* list = (linkedList*)malloc(sizeof(linkedList));
	list->start = NULL;
	list->end = NULL;

	//deleteLastNode(list);
	//deleteNthNode(list, 9);
	addLastNode(list, 1);
	addLastNode(list, 2);
	addLastNode(list, 3);
	addLastNode(list, 4);
	deleteLastNode(list);
	addLastNode(list, 5);
	addLastNode(list, 6);
	deleteNthNode(list, 10);
	printNode(list);

	freeNodes(list);
	addLastNode(list, 1);
	printNode(list);
	
	freeNodes(list);
	free(list);
	return 0;
}

//linkedList 마지막에 node 추가
void addLastNode(linkedList* list, int n) {
	node* newNode = (node*)malloc(sizeof(node));
	//node 단위
	newNode->contents = n;
	newNode->next = NULL;
	//linkedList 단위
	if (list->start == NULL && list->end == NULL) {
		list->start = newNode;
		list->end = newNode;
	}
	else {
		list->end->next = newNode; //이전 노드의 next에 다음 노드 주소값 저장
		list->end = newNode; //linkedList의 새로운 노드끝 주소값 저장
	}
}

//linkedList 마지막 node 삭제
void deleteLastNode(linkedList* list) {
	node* n = list->start;
	if (n == NULL) {
		printf("삭제할 노드가 없습니다.(deleteLastNode)\n");
		return; //조기리턴을 하면 else절을 사용할 필요 X
	}
	while (n->next != list->end) {  //linkedList의 끝까지
		n = n->next;
	}
	free(n->next);  //할당된 메모리 해제
	n->next = NULL;
	list->end = n;
}

//linkedList의 idx번째 node 삭제
void deleteNthNode(linkedList* list, int idx) {
	node* n = list->start;
	node* tmp = NULL;
	int i = idx;
	if (n == NULL) {
		printf("삭제할 수 있는 node가 없습니다.(deleteNthNode)\n");
		return;
	}
	while (i-1 > 0) {
		tmp = n;
		n = n->next;
		i -= 1;
		if (n == NULL) {
			printf("idx가 node의 개수를 초과했습니다. 현재 %d번째 node까지만 접근 가능합니다.\n", idx-i);
			return;
		}
	}
	if (n == list->start) {
		list->start = n->next;
	}
	else if (n == list->end) {
		list->end = tmp;
		list->end->next = NULL;
	}
	else {
		tmp->next = n->next;
	}
	free(n);   //할당된 메모리 해제
	
}

//linkedList의 node들 출력
void printNode(linkedList* list) {
	node* n = list->start;
	while (n != NULL) {
		printf("%d ", n->contents);
		n = n->next;
	}
	printf("\n");
}

//linkedList의 node들 free
void freeNodes(linkedList* list) {
	node* n = list->start;
	node* nextNode = NULL;
	while (n != list->end) {
		nextNode = n->next;
		free(n);
		n = nextNode;
	}
	free(list->end);
	list->start = list->end = NULL;  //list 내의 멤버 start,end가 댕글링 포인터가 되지 않게 NULL로 초기화
}
```
