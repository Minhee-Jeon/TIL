## 두 리스트 합치기   
오름차순으로 정렬이 된 두 리스트가 주어지면 두 리스트를 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.   
   
## 입력    
첫 번째 줄에 첫 번째 리스트의 크기 N(1<=N<=100)이 주어집니다. 
두 번째 줄에 N개의 리스트 원소가 오름차순으로 주어집니다. 세 번째 줄에 두 번째 리스트의 크기 M(1<=M<=100)이 주어집니다. 
네 번째 줄에 M개의 리스트 원소가 오름차순으로 주어집니다. 각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.   
   
## 출력    
오름차순으로 정렬된 리스트를 출력합니다.   
   
## 예제입력                                    
3    
1 3 5    
5     
2 3 6 7 9   
   
## 예제출력    
1 2 3 3 5 6 7 9   

## Code   
### JAVA   
```java
import java.util.*;
class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int[] arr1 = new int[sc.nextInt()];
    for(int i=0; i<arr1.length; i++){
      arr1[i] = sc.nextInt();
    }
    int[] arr2 = new int[sc.nextInt()];
    for(int i=0; i<arr2.length; i++){
      arr2[i] = sc.nextInt();
    }
    int[] arrSum = new int[arr1.length + arr2.length];
    //arr1과 arr2를 arrSum으로 복사하기
    System.arraycopy(arr1,0,arrSum,0,arr1.length);
    System.arraycopy(arr2,0,arrSum,arr1.length,arr2.length);
    Arrays.sort(arrSum);
    for(int i=0; i<arrSum.length; i++){
      System.out.print(arrSum[i] + " ");
    }
  }  
 
}
```
### Python   
sort의 시간복잡도는 nlogn, 일일이 비교할 경우의 시간복잡도는 n이니   
두 리스트를 합치고 정렬하기보다, 일일이 비교하고 더 작은 수 먼저 새 배열에 넣는 방법이 가장 빠르다.    
```python

```
