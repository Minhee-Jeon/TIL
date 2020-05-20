## K번째 작은수
N개의 숫자로 이루어진 숫자열이 주어지면 해당 숫자열중에서 s번째부터 e번째 까지의 수 중 k번째로 작은 수를 출력하는 프로그램을 작성하세요.   

## 입력   
첫 번째 줄에 테스트 케이스 T(1<=T<=10)이 주어집니다.    
각 케이스별 첫 번째 줄은 자연수 N(5<=N<=500), s, e, k가 차례로 주어집니다.   
두 번째 줄에 N개의 숫자가 차례로 주어집니다.
   
## 출력   
각 케이스별 k번째 수를 아래 출력예제와 같이 출력하세요.   
   
## 예제입력      
```
2
6 2 5 3
5 2 7 3 8 9
15 3 10 3
4 15 8 16 6 17 3 10 11 18 7 14 7 15
```
## 예제출력   
```
#1 7
#2 6
```
## 예제 입출력 해설   
2 7 3 8의 숫자 중 3번째로 작은 수는 7이다.   
   
## Code
#### JAVA   
```java
public static void main(String[] args) {
			Scanner sc = new Scanner(System.in);
			int tc = sc.nextInt();
			
			for(int i=1; i<tc+1; i++) {
            int n, s, e, k;
				n = sc.nextInt();
				s = sc.nextInt();
				e = sc.nextInt();
				k = sc.nextInt();

				int[] li = new int[n];
				
				for(int j=0; j<n; j++) {
					li[j] = sc.nextInt();
				}
				
				int[] li_ = new int[e-s+1];
				System.arraycopy(li, s-1, li_, 0, e-s+1);
				Arrays.sort(li_);
				
				//System.out.println(Arrays.toString(li_));
				System.out.printf("\n #%d %d \n", i, li_[k-1]);
			}
				
				
				
			
		}
```
#### Python
```python
import sys
# sys.stdin=open("input.txt", "rt")

tc = int(input())
for i in range(tc):
    N, s, e, k = map(int,input().split())
    li = list(map(int,input().split()))
    li = li[s-1:e]  # 슬라이싱
    li.sort()
    print("#%d %d" %(i+1,li[k-1]))

  #  print('#'+str(i)+' '+(li[s-1:e].sort())[k-1]+'\n')
  # sort를 하면서 동시에 변수에 할당할 수 없더라! 
```
