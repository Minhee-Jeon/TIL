# Stack
**스택(stack)** 은 데이터를 일시적으로 저장하기 위해 사용   
Last in First Out (후입선출)    
**푸시(push)** : 스택에 데이터를 넣는 작업    
**팝(pop)** : 스택에서 데이터를 꺼내는 작업    
이렇게 푸시와 팝을 하는 위치는 **꼭대기(top)** 이고, 스택의 가장 아랫부분을 **바닥(bottom)** 이라고 한다.

### 스택 만들기
```java
public class IntStack{
  private int max;  //스택 용량
  private int ptr;  //스택 포인터
  private int[] stk; //스택 본체
  
  //실행 시 예외 : 스택이 비어 있음
  public class EmptyIntStackException extends RuntimeException{
    public EmptyIntStackException(){}
  }
  
  //실행 시 예외 : 스택이 가득 참
  public class OverflowIntStackException extends RuntimeException{
    public OverflowIntStackException(){}
  }
  
  //생성자
  public IntStack(int capacity){
    ptr = 0;                //생성 시 스택에 데이터가 하나도 쌓여있지 않으므로 스택 포인터는 0
    max = capacity;
    try{
      stk = new int[max];   //스택 본체용 배열 생성
    } catch(OutOfMemoryError e){
      max = 0;
    }
  }
  //스택 본체의 개별 요소는 바닥부터 stk[0], stk[1], ... , stk[max -1]
}
```
***
```java
class Main{
  public static void main(String[] args){
    IntStack s = new IntStack(64);   //최대 64개를 푸시할 수 있는 스택
```

### push()
스택에 데이터를 푸시하는 메서드.    
스택이 가득 차서 푸시할 수 없는 경우에는 예외 OverflowIntStackException을 throw      
```java
try{
  s.push(10);
} catch (IntStack.OverflowIntStackException e){

}
```

### pop()
스택 꼭대기에서 데이터를 pop(제거)하고 그 값을 반환하는 메서드.     
스택이 비어 있어 팝을 할 수 없는 경우 예외 EmptyIntStackException을 throw    
```java
try{
  int x = s.pop();  //10
} catch (IntStack.EmptyIntStackException e){

}

```
### peek()
스택 꼭대기에 있는 데이터를 "몰래 엿보는" 메서드.   
꼭대기의 요소 stk[ptr - 1]을 반환하며, 스택 포인터는 변화하지 않는다.    
스택이 비어 있는 경우 EmptyIntStackException을 throw     
```java 
try{
  int x = s.peek();
} catch(IntStack.EmptyIntStackEception e){

}
```
### indexOf() : 검색 메서드
스택 본체의 배열 stk에 x와 같은 값의 데이터가 포함되어 있는지, 그렇다면 배열의 어디에 들어 있는지를 조사하는 메서드.     
꼭대기 (배열 인덱스가 큰 쪽) -> 바닥 쪽 (인덱스가 작은 쪽) 방향으로 선형 검색한다.    
검색에 성공하면 해당 요소 인덱스를, 실패하면 -1을 반환한다.

##### clear() : 스택에 쌓인 모든 데이터를 삭제
##### capacity() : 용량 확인 (max값 반환)
##### size() : 데이터 수를 확인 (ptr값 반환)
##### IsEmpty() : 스택이 비어 있는지 검사
##### IsFull() : 스택이 가득 찼는지 검사    
##### dump() : 스택에 쌓여 있는 모든 데이터를 바닥에서 꼭대기 순으로 표시

```java
//스택에서 x를 찾아 인덱스(없으면 -1)를 반환
public int indexOf(int x){
  for(int i = ptr - 1; i > = 0; i--)    //정상 쪽에서 선형 검색
    if (stk[i] == k )
      return i;   //검색 성공
  return -1;      //검색 실패
}

//스택을 비움
public void clear(){
  ptr = 0;
}

//스택의 용량을 반환
public int capacity(){
  return max;
}

//스택에 쌓여 있는 데이터 수를 반환
public int size(){
  return ptr;
}

//스택이 비어 있는가?
public boolean isEmpty(){
  return ptr <= 0;
}

//스택이 가득 찼는가?
public boolean isFull(){
  return ptr >= max;
}

//스택 안의 모든 데이터를 바닥 -> 꼭대기 순서로 출력
public void dump(){
  if(ptr <= 0)
    System.out.println("스택이 비어 있습니다.");
  else {
    for(int i = 0; i < ptr; i++)
      System.out.print(stk[i] + " ");
    System.out.println();
    
  }
}
```
