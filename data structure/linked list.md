## Linked List    
일렬로 연결된 데이터를 저장할 때 사용하는 자료구조 중 한 . 길이가 정해져 있지 않은 데이터의 연결된 집합.   
데이터를 저장할 수 있는 공간이 있으면 그 안에 다음 데이터의 주소를 가지고 있는 구조이다.   
배열은 배열 방들이 물리적으로 한 곳에 모여 있어 방 크기를 한번 정하면 늘이거나 줄일 수가 없다.   
그와 다르게 Linked List는 데이터를 중간에 삽입할 경우 앞 노드가 가지고 있던 주소를 자기가 가지고 앞 노드에게 '너 다음 나야' 하고 알려준다.   
반대로 링크를 뺄 때는 해당 노드가 갖고 있던 이 다음 노드의 주소를 앞의 노드에게 준다.    
연결점이 끊어진 노드는 자동으로 빠지게 된다. 그런데 이 노드가 linked list에서는 삭제됐지만 메모리를 잡아먹고 있다.   
JAVA에서는 이렇게 안 쓰는 변수를 알아서 처리해주지만, C나 C++에서는 반드시 쓰지 않는다는 명시를 해야 해당 메모리의 낭비를 막을 수 있다.   
linked list는 주소를 일일이 찾아 다녀야되기 때문에 한 덩어리인 배열보다 속도가 느릴 수 있다.   
그런데 삽입, 삭제 과정이 복잡한 배열에 비해 길이가 정해지지 않은 데이터를 다룰 때에는 linked list가 좋다.   
   
    
## 단방향 / 양방향 linked list   
* 단방향 : 뒷방향으로만 포인터가 있음. 오직 내 다음 노드 주소만 알고 있어서 검색을 할 때 언제나 가장 앞 노드부터 하나씩 다음 노드로 이동하면서 검색해야 한다.   
* 양방향 : 양쪽 끝에 포인터가 저장되어 있어 앞뒤로 자유롭게 다닐 수 있다. 맨 끝에 노드를 삽입할 때 일부러 끝까지 찾아가는 번거로움을 줄일 수 있다. 공간의 효율성을 따져 선택해서 사용하자!    
데이터 삽입 시 전 노드가 가지고 있는 주소를 새로운 노드가 가지고, 다음 노드에 자신의 주소를 준다.
삭제 시 삭제하려는 노드가 가지고 있는 다음 주소를 전 노드에게, 전 노드의 주소를 다음 노드에게 넘기면서 자연스레 linked list에서 빠진다.   
   
![linkedlist](https://user-images.githubusercontent.com/58028527/82559175-19557d00-9baa-11ea-8eee-b5eb4d833966.png)
   
## JAVA에서 linked list 구현하기   
```java
class Node{
   int data;
   Node next = null;  //초기화
   Node(int d){
      this.data = d;
   }
   
   //노드 추가하기
   void append(int d){
      Node end = new Node(d);
      Node n = this;
      while (n.next != null){
         n = n.next;
      }
      n.next = end;
   }
   
   //노드 삭제하기
   void delete(int d){
      Node n = this;
      while (n.next != null){
         if(n.next.data == d){
            n.next = n.next.next;
         } else {
            n = n.next;
         }
      }
   }
   
   //링크드리스트 전체 
   void retrieve(){
      Node n = this;
      while (n.next != null){
         System.out.print(n.data + "->");
         n = n.next;
      }
      System.out.println(n.data);
   }
}

public class SinglyLinkedList{
   public static void main (String[] args){
      Node head = new Node(1);
      head.append(2);
      head.append(3);
      head.append(4);
      
      head.retrieve();  // 1->2->3->4
      head.delete(2);  // 1->3->4
   }
}
```
