문서 필터링 시 XLSB의 숫자에 표시 형식을 적용하는 이슈를 진행하던 중 메인이 되는 내용은 다른 내용이었으나 이전에 `strcpy`로 작성되었던 부분에 문제의 소지가 있어 TIL에 기록해보고자 한다.        
             
```cpp
static void doSomething(char* temp) {
  char* newPos = temp;
  
  if (condition1) {
    temp[0] = '-';
    newPos = temp + 1;
   }
   
   if (condition2) {
    char formattedValue[512] = 'formattedVal';
    strcpy(newPos, formattedValue);
   }
}

int parseNum(A& a, B& b, C& c) {
  const int MAX_LENGTH = 256; // 표시형식을 지정할 때 나타낼 수 있는 최대 길이
  char temp[MAX_LENGTH];
  
  a.doSomething(temp);
  return c.addCell(a.d(), a.e(), temp, ENUM_CP949);
}
```
여기에서 `temp`의 크기는 256 byte로 정해져 있다.        
만약 `doSomething` 안에서 512byte가 될 수도 있는 `formattedValue`를 `temp`나 다름없는 `newPos`에 복사하려고 한다면?      
256byte 이하까지는 괜찮을 것이지만.. 257 ~ 512byte일 때에는 할당되어 있는 공간보다 더 크기 때문에 컴파일러가 에러를 뱉어낼 수 있다.     
              
에러를 만들지 않으려면 ① `MAX_LENGTH`를 `formattedValue`와 같이 512로 만들던가      
아니면 ② `strcpy(newPos, formattedValue);` 대신 `strncpy(newPos, formattedValue, 256);` 으로 수정해 에러를 내지 않고 `newPos`만큼만 문자열을 복사할 수 있게 만들어 해결하면 된다.         
              
현재 프로젝트에서 256byte를 초과하는 경우는 오랜 기간동안 없었으므로, 나는 후자를 택하였다.       
char* 를 다룰 때에는 할당되어 있는 메모리 크기를 간과하지 말자!        
