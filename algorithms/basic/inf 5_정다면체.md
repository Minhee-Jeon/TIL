## 정다면체   
두 개의 정 N면체와 정 M면체의 두 개의 주사위를 던져서 나올 수 있는 눈의 합 중 가장 확 률이 높은 숫자를 출력하는 프로그램을 작성하세요. 
정답이 여러 개일 경우 오름차순으로 출력합니다.     
    
## 입력    
첫 번째 줄에는 자연수 N과 M이 주어집니다. N과 M은 4, 6, 8, 12, 20 중의 하나입니다.   
    
## 출력    
첫 번째 줄에 답을 출력합니다.      
    
## 예제입력                                   
4 6     
    
## 예제출력     
5 6 7    
    
## Code    
### JAVA   
```java   
import java.util.*;
class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int m = sc.nextInt();

    int[] li = new int[n+m+2];
    Arrays.fill(li, 0);
    

    for(int i=1; i<=n; i++){
      for(int j=1; j<=m; j++){
        li[i+j]++;
      }
    }

    int max = 0;
    for(int i=2; i<=n+m+1; i++){
      max = max < li[i] ? li[i] : max;
    }
    for(int i=2; i<=n+m+1; i++){
      if(li[i] == max) System.out.print(i + " ");
    }
  }
}
```
### Python   
```python
import sys
#sys.stdin=open("input.txt", "rt")

n, m = map(int,input().split())
#li_n = list(range(1,n+1))
#li_m = list(range(1,m+1))
cnt = [0]*(n+m+1) #(n+m+1)크기의 list를 0으로 초기화하기
max = 0

#print(li_n,li_m)

for i in range(1,n+1):
    for j in range(1,m+1):
        #ans.append(li_n[i] + li_m[j])
        cnt[i+j] += 1

#ans.sort()

for i in range(n+m+1):
    if cnt[i] > max:
        max = cnt[i]
for i in range(n+m+1):
    if cnt[i] == max:
        print(i, end=' ') 
```
