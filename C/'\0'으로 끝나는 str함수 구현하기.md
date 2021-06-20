# \0으로 끝나는 str함수 구현하기   
[1.strlen](#strlen-구현하기)    
[2.strcpy](#strcpy-구현하기)    
[3.strcmp](#strcmp-구현하기)    
[4.strstr](#strstr-구현하기)    
[5.strtok](#strtok-구현하기)    

## strlen 구현하기
```c
#include <stdio.h>
#include <string.h>
int my_strlen(char*);

int main(void){
  char szInput[256];
  printf ("Enter a sentence: ");
  gets (szInput);
  printf ("The sentence entered is %u characters long.\n",(unsigned)my_strlen(szInput));
 }
```
strlen은 매개변수의 글자 수를 리턴해주는 함수이다. 만약 ```printf()``` 안의 첫번째 매개변수 끝에 ```\n```이 붙지 않았다면, 입력 시 받는 개행문자도 strlen 함수 카운팅에 포함된다.
```c
int my_strlen(char * c){
  int szInput = 0;
  for(int i=0; c[i]; i++){
    szInput += 1;
  }
  return szInput;
}
```
```c
int my_strlen(char * c){
  char *p = c;
  while(*p++) ;
  return p-c;
}
```
## strcpy 구현하기
```c
#include <stdio.h>
#include <string.h>
char* my_strcpy(char* dstn, const char* src);

int main(void){
  char str1[]="Sample string";
  char str2[40];
  char str3[40];
  my_strcpy (str2,str1);
  my_strcpy (str3,"copy successful");
  printf ("str1: %s\nstr2: %s\nstr3: %s\n",str1,str2,str3);

  return 0;
}
```
```c
char* my_strcpy(char* dstn, const char* src){
  char* temp = dstn;
  int dstn_len = strlen(dstn);
  int src_len = strlen(src); 

  for(int i=0; src[i] != '\0'; i++){
    temp[i] = src[i];
  }
  return dstn;
}
```
처음 풀었던 코드다. 이 코드로 위의 예제를 적용시켜보면 문제 없이 작동하는 것처럼 보였으나 어림도 없지!    
예제의 ```char str2[40];``` 부분을 ```char str2[40]="00000000000000000000";``` 로 고쳐본다면 콘솔창에서 ```str2: Sample string0000000``` 라는 황당한 결과를 얻을 수 있다.   
그러니까 이 코드는, 함수에 전달하는 두 번째 변수인 ```src```보다 ```dstn```에 이미 초기화되어 있는 문자의 길이가 더 길다면 내가 원하는 결과를 얻을 수 없다!   
```src```를 입력하고 난 뒤에 ```dstn```의 길이만큼 초기화된 문자들이 남아있을 것이기 때문이다.   
그래서 나는 for문의 바로 아래에 이 코드를 추가했다.   
```c
if(dstn_len > src_len){
  for(int i=src_len; i<dstn_len; i++)
  dstn[i] = '\0';
}
```
하지만 이번에도 어림없지^^    
아까  ```char str2[40]="00000000000000000000";``` 부분을 ```char str2[40]="000\00000000000000000";```로 바꾸게 된다면 이번엔 콘솔창에서 ```str2: Sample string00000```이 찍힌다. 
아까 추가한 코드의 경우를 생각하지 않더라도, 애초부터 복사할 문자열인 ```str```가 ```dstn```에 다 복사되면 ```\0```을 붙여서 문자열의 끝을 인위적으로 만들어주는 게 편했다.   
```c
dstn[src_len] = '\0';
```
```c
char* my_strcpy(char* dstn, const char* src){
  char *a = dstn;
  while(*dstn++ = *src++) ;
  return a;
}
```
## strcmp 구현하기
```c
#include <stdio.h>
#include <string.h>
int my_strcmp(const char*, const char*);

int main(void){
  char key[] = "apple";
  char buffer[80];
  do {
     printf ("Guess my favorite fruit? ");
     fflush (stdout);
     scanf ("%79s",buffer);
  } while (my_strcmp (key,buffer) != 0);
  puts ("Correct answer!");
  return 0;
}
```
```c
int my_strcmp(const char* key, const char* buffer){
  char b;
  for(int i=0; key[i] != 0; i++){
    b = *buffer++; //buffer 문자열에서 처음부터 한글자씩
    if (key[i] != b)
      return key[i] < b ? -1 : 1; //key가 buffer보다 사전순 앞이면 음수리턴, 반대면 양수리턴
    if (!key[i])
      break;
  }
  return 0;
}
```
## strstr 구현하기
```c
#include <stdio.h>
#include <string.h>
char* my_strstr(const char*, const char*);

int main(void){
  char str[] ="This is a simple string";
  char * pch;
  pch = my_strstr (str,"simple");
  strncpy (pch,"sample",6);
  puts (str);
  return 0;
}
```
```c
char* my_strstr(const char* str1, const char* str2){
  int len1 = strlen(str1);
  int len2 = strlen(str2);

  //비교할 문자열이 없을 경우 첫번째 idx 반환
  if(str2 == 0)
    return (char*)str1;
  //비교할 문자열이 기존 문자열보다 길 경우 NULL 반환
  else if(len1 < len2)
    return NULL;
  else{
    //반환할 포인터변수 선언
    const char* point = 0;
    for(int i=0; str1[i]; i++){
      if(*str1 == *str2){
        point = str1;
        for(int j=0; str2[j]; j++){
          if(*str1++ != *str2++)
            break;
          else if(j == len2-1)
            return (char*)point; 
        }
      }
    }
  }
}
```
## strtok 구현하기
```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
char* my_strtok(char*, const char*);

int main(void){
  char str_[] ="- This, a sample string.";
  //char * pch;
  printf ("Splitting string \"%s\" into tokens:\n",str_);
  
  int a=0;
  //pch = strtok (str," ,.-");
  char *delim = " ,.-";
  //while (pch != NULL)
  //{
  //  printf ("%s\n",pch);
  //  pch = strtok (NULL, " ,.-");
  //}
  for(char *pch_ = my_strtok (str_,delim); pch_!=NULL; pch_ = my_strtok (NULL,delim)) {
    printf("[%s]\n", pch_);
    //if(a==6) break;
    a++;
  }
  return 0;
}
```
초반풀이
```c
char* my_strtok(char* str, const char* tok){
  for(int i=0; str[i]; i++){
    if(str == (char*)tok){
      for(int j=0; tok[j]; j++){
        str[i] = '\0';
        return (char*)(tok[i]+1);
      }
    }
  }
  return 0;
}
```
```c
char* my_strtok(char* str, const char* tok){
  static char* end = 0;
  //char end_cpy;
  char* start = 0;

  if(!str) str = end;  //끊고 난 위치를 기억했다가 NULL이 들어오면 그 위치부터 시작
    
  if(str == NULL || str[0] == '\0') {
    return NULL;
  }
  
  //printf("str=[%s]\n", str);
  for(int i=0; str[i]; i++){
    for(int j=0; tok[j]; j++){
       //printf("str=[%c] tok=[%c]\n", str[i], tok[j]);
      if(str[i] == tok[j]){
        str[i] = '\0';
        if(end && start)
          end = 0;
        //printf("start=[%p] end=[%p] &str[i+1]=[%p]\n", start, end, &str[i+1]);
        //printf("end_cpy=[%c]\n",end_cpy);
        // printf("end=[%s] endend\n", end);
                // char* bool = !end ? "end=NULL":"end!=NULL";
                // printf("%s\n",bool); //두 번째 리턴부터 end!=NULL
        if (start && !end && start<&str[i+1]){
          end = &str[i+1];
  // printf("%c %s\n", *end,"end");

          return start;
        }
        
      }
    }
    if (!start && str[i] && i!=strlen(str)){
      start = &str[i]; 
  // printf("%c %s\n", *start, "start");
    }
  }

  end = NULL;
  return str;
}
```

```if(!str)```와 ```if(str == NULL || str[0]=='\0')```은 어떻게 다른 것인가??

