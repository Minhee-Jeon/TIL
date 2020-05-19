목차    
[1.변수와 출력함수](#변수와-출력함수)   
[2.변수입력과 연산자](#변수입력과-연산자)   
[3.조건문](#조건문)   
[4.반복문](#반복문)   
[5.문자열과 내장함수](#문자열과-내장함수)   
[6.리스트와 내장함수](#리스트와-내장함수)   
[7.2차원 리스트](#2차원-리스트)   
[8.함수](#함수)   
[9.람다함수](#람다함수)   

## 변수와 출력함수   
```python
a, b, c = 3, 2, 1  # 한번에 변수 선언과 대입 가능
print(a, b, c)  # 3 2 1   
   
# 값 교환
a, b = 1, 2
a, b = b, a  # 값 교환이 이루어짐   

# 변수 타입
a = 12.123456789123456789
print(a)  # 12.1234567891234567 실수는 8byte 이후에는 값손실
print(type(a))  # <class 'float'>

'student' # str

# 출력 방식   
print("number")  # number

a, b, c = 1, 2, 3
print(a,b,c)  # 1 2 3
print(a,b,c,sep=', ')  # 1, 2, 3
print(a,b,c,sep='')  # 123
```
## 변수입력과 연산자    
```input()```은 JAVA의 ```Scanner``` 기능     
```python
# 띄어쓰기로 구분되어 입력된 두 숫자를 split으로 쪼개 각각 a, b에 대입된다.
a, b = input("숫자를 입력하세요 : ").split()
print(type(a))  # <class 'str'>

c = a + b
print(c) # 문자열이라 2, 3을 입력했다면 23으로 출력

# 형변환
# a = int(a)
a, b = map(int, input("숫자를 입력하세요 : ").split())
```
연산자
```python
a / b  # 소숫점 표시 (실수형) 
a // b  # 몫 (정수형)
a % b  # 나머지
a ** b  # a의 b승
```
JAVA와 동일하게 다른 형끼리 연산을 하면 더욱 큰 범위의 형으로 return된다.   
## 조건문   
```python
money = 20000

if money < 5000 :
   print('라면을 먹는다')
elif 5000 <= money < 25000 :
   print('치킨을 먹는다') 
elif 25000 <= money < 50000 :
   print('삼겹살을 먹는다') 
else :
   print('소고기를 먹는다')
```
if문 안 if문. 조건을 만족해도 아무 일도 일어나지 않게 하려면 pass   
```python
money = 1000
card = False

if card :
   if money < 30000 :
      print('삼겹살을 먹는다')
   else :
      print('소고기를 먹는다')
else :
   if money <= 1000 :
      pass
   else :
      print('라면을 먹는다')
```
요소인지 파악하기 : in / not in   
- x **in** s : x가 s의 요소인가   
- x **not in** s : x가 s의 요소가 아닌가   
```python
e = [1, 3, 5, 7] 
0 in e  # False 
2 not in e  # True
```
## 반복문   
##### range 메서드
```python
a = range(10)
print(list(a))  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

a = range(1, 11)
print(list(a))  #[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
##### for문    
```python
for 변수 in range(범위) :
   수행할 문장1
   수행할 문장2
"""   
범위 지정 1. 숫자로 범위주기
range(시작:끝:간격) 
- 시갖부터 끝-1 까지
- 간격이 1이라면 생략 가능
- 0부터 시작해 1씩 증가한다면 시작과 간격 생략 가능
"""
"""
범위 지정 2. 자료형으로 범위주기
"""
word = 'Hello!'
for w in word:
   print(w) 

# for ... else문
# for문이 정상종료되면 else문이 실행되고, for문 도중 break되면 else문이 실행 X
for in range(1, 11):
   print(i)
   if i>5:  # 만약 5 대신 12를 넣으면 else문도 실행된다
      break
else:
   print(11)
# 1 /n 2 /n 3 /n 4 /n 5
```
##### while문   
##### break   
```python
i = 1
while True:
   print(i)
   if i==5:
      break
   i += 1  # 1 /n 2 /n 3 /n 4 /n 5
```
##### continue   
```python
for i in range(1, 11):
   if i%2 == 0
      continue
   print(i)  # 1 /n 3 /n 5 /n 7 /n 9
```
### 반복문을 이용한 문제 풀이   
```python
# 1) 1부터 N까지 홀수 출력
n = int(input())
for in range(1, n+1):
   if i%2 == 1:
      print(i)

# 2) 1부터 N까지의 합 구하기
n = int(input())
sum = 0
for i in range(1, n+1):
   sum += i
print(sum)

# 3) N의 약수 구하기
n = int(input())
for i in range(1, n+1):
   if n%i == 1:
      print(i, end=' ')  # end = ' ' 사용 시 줄바꿈하지 않는다
```
### 중첩반복문 (2중 for문)
```python
for i in range(5):
   print('i:', i, sep='', end=' ')
   for j in range(5):
      print('j:', j, sep='', end=' ')
   print()     # 줄바꿈

# i:0 j:0 j:1 j:2 j:3 j:4
# i:1 j:0 j:1 j:2 j:3 j:4
# i:2 j:0 j:1 j:2 j:3 j:4
# i:3 j:0 j:1 j:2 j:3 j:4
# i:4 j:0 j:1 j:2 j:3 j:4

for i in range(5);
   for j in range(i+1): #(5-i)로 바꾸면 결과값 상하반전
      print("*")
   print()
# *
# **
# ***
# ****
# *****
```
## 문자열과 내장함수    
- ```str[0]``` 문자열의 0번째 인덱스   
- ```str[시작:끝:간격]``` 슬라이싱 : 변수의 일정 부분에 접근해 잘라온다. 마지막 인덱스는 슬라이싱에 포함되지 않으며, 간격이 1이라면 생략할 수 있다.   
```python
str = '인덱싱을 하기 위한 string입니다.'

# 시작점이 없다면 처음부터
print(str[:3])  # 인덱싱

# 끝이 없다면 끝까지
print(str[18:])  # 니다.

# 시작과 끝이 없다면 전체   
print(str[:])  # 인덱싱을 하기 위한 string입니다.

# 파이썬은 마이너스 인덱싱을 지원한다. -1은 끝에서부터 거꾸로
print(str[-1])  # .

# [::-1]은 str 전체를 뒤집는다.
print(str[::-1])  # .다니입gnirts 한위 기하 을싱덱인
```
- ```str.upper()``` 대문자로   
- ```str.lower()``` 소문자로   
- ```str.find('T')``` 문자열에서 T를 찾아 인덱스 반환. T가 여러 개 있을 경우 맨 앞 T의 인덱스가 반환된다. 문자열에 없으면 -1 반환.    
- ```str.index('T')``` find와 기능 同. 하지만 문자열에 없으면 error 발생.   
- ```str.count('T')``` 문자열에서 T의 개수를 찾아 반환.   
- ```len(str)``` 문자열의 길이   
```python
msg = It is Time

for x in msg:
   print(x, end=' ')  # I t  i s  T i m e

for x in msg:
   if x.isupper():  # 대문자냐?
      print(x, end=' ')  # I T
      
for x in msg:
   if x.isalpha():  # 알파벳인가?
      print(x, end='')  # Itistime
      
# 아스키코드 관련
tmp = "AZaz"
for x in tmp:
   print(ord(x), end=' ')  # 65 90 97 122 

tmp = 66
print(chr(tmp))  # A
```
- ```join()``` 문자열 삽입   
```python
str = 'abcd'
# '' 사이에 삽입할 문자를 넣기
','.join(str)  # 'a,b,c,d'
```
- ``` replace()``` 문자열 바꾸기
```python
str = 'Life is C between B and D'
str.replace('C', 'Chicken')  # 'Life is Chicken between B and D'
```
- ``` split()``` 문자열 나누기
```python
str.split(' ')  # ['Life', 'is', 'C', 'between', 'B', 'and', 'D']
```
## 리스트와 내장함수   
## 2차원 리스트   
## 함수
## 람다함수   
