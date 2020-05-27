import java.util.Scanner;
//선형 검색

class seqSearch{
  //요솟수가 n인 배열 a에서 key와 같은 요소를 선형 검색
  static int seqSearch(int[] a, int n, int key){
     for(int i=0; i< n ; i++)
        if(a[i] == key) return i;  //검색 성공 (인덱스를 반환)
     return -1;                    //검색 실패 (-1을 반환)
     }
  
  public static void main(String[] args){
     Scanner sc = new Scanner(System.in);
     
     int num = sc.nextInt(); //요솟수
     int[] x = new int[num];
     
     int key = sc.nextInt(); //검색할 값
     int idx = seqSearch(x, num, key); //배열 x에서 키 값이 ky인 요소를 검색
     
     if(idx == -1)
        System.out.println("그 값의 요소가 없습니다.");
     else
        System.out.println(key+"는 x["+ idx +"]에 있습니다.");
  }
  
}


//보초법
//선형 검색은 반복할 때마다 1. 검색할 값을 발견하지 못하고 배열의 끝을 지나간 경우
//                        2. 검색할 값과 같은 요소를 발견한 경우
//두 가지 종료조건을 모두 판단한다. 
//이 방법을 반으로 줄이는 것이 보초값이다. 

//검색하기 전에 검색하고자 하는 키 값을 맨 끝 요소에 저장한다.
//이 때 저장하는 값을 보초(sentinel)라고 한다.
//이렇게 하는 원하는 키 값을 찾지 못했을 때 판단하는 종료 조건 1이 없어도 된다.

import java.util.Scanner;
//선형 검색 (보초법)

class SeqSearchSen{
   //요솟수가 n인 배열 a에서 key와 같은 요소를 보초법으로 선형 검색
   static int seqSearchSen(int[] a, int n, int key){
      int i=0;
      
      a[n] = key; //보초를 추가
      
      //보초법을 사용하면 종료조건 2만 필요해 하나의 if문만 사용 -> 반복 종료에 대한 판단 횟수는 절반으로 줄어든다.
      while(true){
         if(a[i] == key)  //검색 성공 
            break;
         i++;
      }
      return i == n ? -1 : i;
      
      
      public static void main(String[] args){
         Scanner sc = new Scanner(System.in);
         
         int num = sc.nextInt(); //요솟수
         int[] x = new int[num + 1];   //요솟수 num + 1
         
         for (int i=0; i<num; i++){
            x[i] = sc.nextInt();
         }
         
         int key = sc.nextInt(); //검색할 키 값
         
         int idx = seqSearchSen(x, num, key);
         
         if(idx == -1 ) System.out.println("그 값의 요소가 없습니다.");
         else System.out.println(key+"는 x[" + idx + "]에 있습니다.");
      
      }
   }
