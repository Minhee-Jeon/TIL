
/**
*
문제
  세 정수 A, B, C가 주어진다. 이때, 두 번째로 큰 정수를 출력하는 프로그램을 작성하시오. 

입력
  첫째 줄에 세 정수 A, B, C가 공백으로 구분되어 주어진다. (1 ≤ A, B, C ≤ 100)

출력
  두 번째로 큰 정수를 출력한다.
**/
import java.util.Scanner;
import java.util.Arrays;

class Main {
  
  //내림차순으로 배열을 정렬해서, 1번째 인덱스값을 출력하기

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int[] input = new int [3];

    for(int i=0; i<input.length; i++){
      input[i] = sc.nextInt();
    }

    // for(int j=0; j<input.length-1; j++){
    //   for(int k=j+1; k<input.length; k++){
        
    //     if(input[j] < input[k]){
    //       int change = input[j];
    //       input[j] = input[k];
    //       input[k] = change;
    //     }
    //   }
    //}
    Arrays.sort(input);

    System.out.println(input[1]);
  }
}
