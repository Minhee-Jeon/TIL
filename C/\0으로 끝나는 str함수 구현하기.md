```c
#include <stdio.h>
#include <string.h>
int my_strlen(char*);
char* my_strcpy(char* dstn, const char* src);
int my_strcmp(const char*, const char*);
char* my_strstr(const char*, const char*);
char* my_strtok(char*, const char*);




int main(void) {
  // //strlen 구현
  // char szInput[256];
  // printf ("Enter a sentence: ");
  // gets (szInput);
  // printf ("The sentence entered is %u characters long.\n",(unsigned)my_strlen(szInput));

  // //strcpy 구현
  // char str1[]="Sample string";
  // char str2[40]="0000000000000000000";
  // char str3[40];
  // my_strcpy (str2,str1);
  // my_strcpy (str3,"copy successful");
  // printf ("str1: %s\nstr2: %s\nstr3: %s\n",str1,str2,str3);

  // //strcmp 구현
  // char key[] = "apple";
  // char buffer[80];
  // do {
  //    printf ("Guess my favorite fruit? ");
  //    fflush (stdout);
  //    scanf ("%79s",buffer);
  // } while (my_strcmp (key,buffer) != 0);
  // puts ("Correct answer!");

  // //strstr 구현
  // char str[] ="This is a simple string";
  // char * pch;
  // pch = strstr (str,"simple");
  // strncpy (pch,"sample",6);
  // puts (str);

  //strtok 구현
  char str_[] ="- This, a sample string.";
  char * pch_;
  printf ("Splitting string \"%s\" into tokens:\n",str_);
  pch_ = my_strtok (str_," ,.-");
  while (pch_ != NULL)
  {
    printf ("%s\n",pch_);
    pch_ = my_strtok (NULL, " ,.-");
  }
  return 0;
}

int my_strlen(char * c){
  int szInput = 0;
  for(int i=0; c[i]; i++){
    szInput += 1;
  }
  return szInput;
}

char* my_strcpy(char* dstn, const char* src){
  char* temp = dstn;
  int dstn_len = strlen(dstn);
  int src_len = strlen(src); 

  for(int i=0; src[i] != '\0'; i++){
    temp[i] = src[i];
  }
  if(dstn_len > src_len){
    for(int i=src_len; i<dstn_len; i++)
      dstn[i] = '\0';
  }
  return dstn;
}

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

//구현중
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
