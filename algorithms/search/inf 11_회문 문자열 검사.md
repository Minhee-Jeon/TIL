## 회문 문자열 검사    
N개의 문자열 데이터를 입력받아 앞에서 읽을 때나 뒤에서 읽을 때나 같은 경우(회문 문자열) 이면 YES를 출력하고 
회문 문자열이 아니면 NO를 출력하는 프로그램을 작성합니다. 단 회문을 검사할 때 대소문자를 구분하지 않습니다.   
   
## 입력 첫 줄에 정수 N(1<=N<=20)이 주어지고, 그 다음 줄부터 N개의 단어가 입력됩니다. 각 단어의 길이는 100을 넘지 않습니다.   
   
## 출력 각 줄에 해당 문자열의 결과를 YES 또는 NO로 출력합니다.   
   
## 예제입력                                   
5   
level   
moon   
abcba   
soon   
gooG   
   
## 예제출력     
#1 YES   
#2 NO   
#3 YES   
#4 NO   
#5 YES    
   
## Code   
### JAVA   
```java
import java.util.*;
class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();

    for(int i=0; i<n; i++){
      String word = sc.next();
      String reverse = "";
      String[] wordArr = word.split("");
      for(int j=wordArr.length-1; j>=0; j--){
        reverse += wordArr[j];
      }

      if(word.toLowerCase().equals(reverse.toLowerCase())) System.out.println("#"+i+1+" YES");
      else System.out.println("#"+i+1+" NO");
    }
  } 
 
}
```
### Python   
```python
import sys
#sys.stdin=open("input.txt", "rt")

n = int(input())

for i in range(n):
    word = input()
    word = word.lower()
    size = lent(word)

    for j in range(size//2):
    # python에서 인덱스를 음수로 접근하면 끝에서부터. li[-1] -> li의 마지막인덱스
        if word[j] != word[-1-j]:
            print("#%d NO" %(i+1))
    else:
        print("#%d YES" %(i+1))
```
좀 더 python스러운 코드
```python
import sys
#sys.stdin=open("input.txt", "rt")

n = int(input())

for i in range(n):
    word = input()
    word = word.lower()
    if word == word[::-1]:  #거꾸로 reverse시키기
        print("#%d YES" %(i+1))
    else:
        print("#%d NO" %(i+1))
```
