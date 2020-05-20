## K번째 큰 수
현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 같은 숫자의 카드가 여러장 있을 수 있습니다.   
현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려고 합니다. 3장을 뽑을 수 있는 모든 경우를 기록합니다.    
기록한 값 중 K번째로 큰 수를 출력 하는 프로그램을 작성하세요.    
만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값 은 22입니다.    
   
## 입력     
첫 줄에 자연수 N(3<=N<=100)과 K(1<=K<=50) 입력되고, 그 다음 줄에 N개의 카드값이 입력됩니다.     
     
## 출력     
첫 줄에 K번째 수를 출력합니다. K번째 수는 반드시 존재합니다.    
     
## 예제 입력                                   
10 3   
13 15 34 23 45 65 33 11 26 42    
   
## 예제 출력    
143    
          
## Code    
#### JAVA   
```java
import java.util.*;


class Main {
		public static void main(String[] args) {
			Scanner sc = new Scanner(System.in);
			int n, k;
			n = sc.nextInt();
			k = sc.nextInt();
				
			int[] li = new int[n];
			for(int i=0; i<n; i++) {
				li[i] = sc.nextInt();
			}
			
      //중복값을 없애주는 set에 3장을 더해 나올 수 있는 경우의 수 담기
			Set<Integer> set = new HashSet<Integer>();
			for(int i=0; i<n; i++) {
				for(int j=i+1; j<n; j++) {
					for(int m=j+1; m<n; m++) {
						set.add(li[i] + li[j] + li[m]);
					}
				}
			}
			
      //set은 순서를 보장하지 않아 list에 옮겨담고 정렬하기
			List<Integer> list = new ArrayList<>(set);
			Collections.sort(list, Collections.reverseOrder());
			System.out.println(list.get(k-1));
				
				
			
		}
		
}
```
#### Python    
```python
import sys
# sys.stdin=open("input.txt", "rt")

n, k = map(int,input().split())
li = list(map(int, input().split()))
res = set()

# 3장을 뽑아 더할 수 있는 모든 수 구해서 set에 담아주기
for i in range(n):
    for j in range(i+1, n):
        for m in range(j+1, n):
            #set은 add로, list는 append로 더함
            res.add(li[i] + li[j] + li[m])  
            
res = list(res)
res.sort(reverse = True)
print(res[k-1])
```
