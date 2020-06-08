## 숫자만 추출   
문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다. 
만들어진 자연수와 그 자연수의 약수 개수를 출력합니다. 만약 “t0e0a1c2h0er”에서 숫자만 추출하면 0, 0, 1, 2, 0이고 이것을 자연수를 만들면 120이 됩니다.
즉 첫 자리 0은 자연수화 할 때 무시합니다.  출력은 120를 출력하고, 다음 줄에 120 의 약수의 개수를 출력하면 됩니다. 
추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.   
   
## 입력    
첫 줄에 숫자가 썩인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.   
   
## 출력    
첫 줄에 자연수를 출력하고, 두 번째 줄에 약수의 개수를 출력합니다.   

## 예제입력                                   
g0en2Ts8eSoft   
   
## 예제출력    
28 6    
   
## Code   
### JAVA   
```java 
import java.util.*;
class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String num = sc.next().replaceAll("[^0-9]", "");
    int n = Integer.parseInt(num);

    System.out.println(n+" "+measure(n));
 
}
  public static int measure(int n){
    int measure = 0;
    for(int i=0; i<n; i++){
      if (n % (i+1) == 0) measure++;
    }
    return measure;
  }
}
```
### Python   
```python
import sys
#sys.stdin=open("input.txt", "rt")

s = input()
res = 0
for x in s:
    if x.isdecimal():  # x가 0 ~ 9의 정수라면
        res = res*10 + int(x)
print(res)
cnt = 0
for i in range(1, res+1):
    if res % i == 0:
        cnt += 1
print(cnt) 
```
