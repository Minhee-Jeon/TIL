정수의 data type의 최댓값 찾기
```c
#include <stdio.h>

int main(void) {
  int in;
  long long max = 1;
  printf("choose a number of data type to confirm max value. \n1.char 2.short 3.int or long 4.long long\n");
  scanf("%d", &in);
  switch(in)
  {
    case 1:
    in = sizeof(char);
    break;
    case 2:
    in = sizeof(short);
    break;
    case 3:
    in = sizeof(int);
    break;
    case 4:
    in = sizeof(long);
    break;
    
  }
  for(int i=0; i<8*in-1; i++) 
  {
    max *= 2;
  }
  max -= 1; // -=1 : 0 때문에
  printf("%lld", max);
  return 0;
}
```
처음에 ```max``` 를 int형으로 선언했더니 출력 시 -1이 반환되었다.  
C/C++은 strong(강) 타입 언어라서, 변수가 2의 31승 이 되는 순간 오버플로우가 발생하며 내가 원하는 값이 선언된 자료형의 범위가 넘었더라도 자동으로 형변환되지 않았기 때문이었다.    
```max``` 에 담을 값 중 long long 타입의 최댓값이 있으니 자료형을 long long으로 바꾸니 원하는 값을 잘 출력할 수 있었다.    
    
보완 숙제 : 비트연산으로 구현해보기   
