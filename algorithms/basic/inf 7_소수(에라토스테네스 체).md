## 소수(에라토스테네스 체)     
자연수 N이 입력되면 1부터 N까지의 소수의 개수를 출력하는 프로그램을 작성하세요.     
만약 20이 입력되면 1부터 20까지의 소수는 2, 3, 5, 7, 11, 13, 17, 19로 총 8개입니다. 제한시간은 1초입니다.      

## 입력     
첫 줄에 자연수의 개수 N(2<=N<=200,000)이 주어집니다.     
    
## 출력   
첫 줄에 소수의 개수를 출력합니다.    
   
## 입력예제                                       
20    
   
## 출력예제    
8    
   
## Code   
### JAVA   
```java

```
### Python   
```python
import sys
#sys.stdin=open("input.txt", "rt")

n = int(input())
ans = 0

for i in range(2,n+1):
    for j in range(2, i):
        if (i%j == 0):
            ans += 1  # 약수를 만나면 +1
            break
    
print(n-ans-1)  # n에서 1과 약수의 수를 빼기
```
for문 안에 for문으로 이전 수들로 나눴을 때 나눠 떨어지는지 일일이 코드를 구현해봤는데, 
100000 정도의 큰 입력값이 들어오면 제한시간을 초과해버린다.
```python
import sys
#sys.stdin=open("input.txt", "rt")

n = int(input())
arr = [0]*(n+1)  # list의 각 인덱스 값을 0으로 초기화
ans = 0

for i in range(2,n+1):
    if arr[i] == 0:
        ans += 1  
    for j in range(i, n+1, i):
        arr[j] = 1  # 약수가 있는 수는 소수가 될 수 없음! 1로 만들어버리기
    
print(ans)
```
2,3,5처럼 약수가 되는 수를 만날 때마다 그 배수들을 지워버리니 시간 안에 출력할 수 있었다.
