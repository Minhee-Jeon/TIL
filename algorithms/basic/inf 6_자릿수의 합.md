## 자릿수의 합    
N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 
각 자연수의 자릿수의 합을 구하는 함수 def digit_sum(x)를 꼭 작성해서 프로그래밍 하세요.    
   
## 입력    
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 
각 자연수의 크기는 10,000,000를 넘지 않는다.   
   
## 출력    
자릿수의 합이 최대인 자연수를 출력한다.    
   
## 예제입력                                      
3    
125 15232 97   
   
## 예제출력    
97    
   
## Code   
### JAVA   
```java
  public static int digit_sum(int n){
    int addNum = 0;
    if (n>=1000000){
      addNum += n/1000000;
      n %= 1000000;
    }
    if (n>=100000){
      addNum += n/100000;
      n %= 100000;
    }
    if (n>=10000){
      addNum += n/10000;
      n %= 10000;
    }
    if (n>=1000){
      addNum += n/1000;
      n %= 1000;
    }
    if (n>=100){
      addNum += n/100;
      n %= 100;
    }
    if (n>=10){
      addNum += n/10;
      n %= 10;
    }
    addNum += n;
    return addNum;
  } 
```
처음에 digit_sum() 메서드를 이렇게 1,000,000부터 처리하도록 구현했는데, 10씩 나누며 처리하도록 while로
바꾸어 짧게 구현할 수 있었다.
```java
 public static int digit_sum(int n){
    int addNum = 0;
    while(n>0){
      addNum += n%10;
      n = n/10;
    }
    addNum += n;
    return addNum;
  }  
```
```java
import java.util.*;
class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int[] arr = new int[n];
    int[] arrSum = new int[n];
    int max = 0;

    for(int i=0; i<n; i++){
      arr[i] = sc.nextInt();
      arrSum[i] = digit_sum(arr[i]);
      if(arrSum[i] > max) max = arrSum[i];
    }
    for(int i=0; i<n; i++){
      if(arrSum[i] == max){
        System.out.println(arr[i]);
      }
    }
  }
  public static int digit_sum(int n){
     int addNum = 0;
    while(n>0){
      addNum += n%10;
      n = n/10;
    }
    addNum += n;
    return addNum;
  }  
}
```
### Python   
몫과 나머지를 이용해서 정수형으로 처리하기    
```python
import sys
n = int(input())
arr = list(map(int, input().split()))
max = 0

def digit_sum(x):
  addNum = 0
  while x>0:
    addNum += x%10
    x = x//10
  return addNum

for i in arr:
  arrSum = digit_sum(i)
  if arrSum > max:
    max = arrSum
    res = i
print(res)
```
Python의 문자 하나하나로 받을 수 있는 특징 이용하기   
```python
import sys
n = int(input())
arr = list(map(int, input().split()))
max = 0

def digit_sum(x):
  addNum = 0
  for i in str(x):  # 받은 값을 string처리함. 문자열의 문자 하나하나를 접근하게 된다.
    addNum += int(i)  # 숫자화 시켜서 하나하나 더해주기
  return addNum

for i in arr:
  sum = digit_sum(i)
  if sum > max:
    max = sum
    res = x
print(res)
```
