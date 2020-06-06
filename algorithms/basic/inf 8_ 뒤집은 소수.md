## 뒤집은 소수   
N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 수를 출력하는 프로그램을 작성하세요.    
예를 들어 32를 뒤집으면 23이고, 23은 소수입니다. 그러면 23을 출력합니다.    
단 910를 뒤집으면 19로 숫자화 해야 합니다. 첫 자리부터의 연속된 0은 무시합니다.    
뒤집는 함수인 def reverse(x) 와 소수인지를 확인하는 함수 def isPrime(x)를 반드시 작성하여 프로그래밍합니다.   
   
## 입력    
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어집니다. 각 자연수의 크기는 100,000를 넘지 않습니다.    
   
## 출력    
첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.    
   
## 입력예제                                    
5 32 55 62 3700 250       
   
## 출력예제    
23 73   
   
## Code   
### JAVA   
```java
import java.util.*;
class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    for(int i=0; i<n; i++){
      int num = reverse(sc.nextInt());
      if(isPrime(num)){
        System.out.print(num + " ");
      } 
    }
  } 
  //정수 뒤집기
  public static int reverse(int n){
    int[] su = new int[Integer.toString(n).split("").length];
    for(int i=su; i<0; i--){
      su[i] = Integer.toString(n).split("")[su-1-i];
    }
    return String.join("", su);
  } 
  //소수인지 확인하기
  public static boolean isPrime(int n){
    return false;
  }
}
```
### Python   
```python   

```
