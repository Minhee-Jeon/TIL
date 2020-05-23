//전제 조건 : 데이터가키 값으로 이미 정렬되어 있어야함. 선형 검색보다 빠름
//n개의 요소가 오름차순으로 늘어선 배열 a에서 키를 이진 검색

import java.util.Scanner;
//이진 검색

class BinSearch{
   //요솟수가 n인 배열 a에서 key 요소를 이진 검색
   static int binSearch(int[] a, int n, int key){
      int pl = 0;      //검색 범위의 첫 인덱스
      int pr = n-1;    //검색 범위의 끝 인덱스
      
      do{
         int pc = (pl + pr) / 2; //검색 시 중앙 요소의 인덱스
         if (a[pc] == key) 
            return pc;           //검색 성공!
         else if ( a[pc] < key ) 
            pl = pc + 1;         //검색 범위를 뒤쪽 절반으로 좁힘
         else
            pr = pc -1;          //검색 범위를 앞쪽 절반으로 좁힘
      } while (pl <= pr);
      
      return -1;                 //검색 실패!
   }
   
   public static void main(String[] args){
      Scanner sc = new Scanner(System.in);
      
      int num = sc.nextInt(); 
      int[] x = new int[num];   //요솟수가 num인 배열
      
      x[0] = sc.nextInt();
      
      for (int i=0; i < num; i++){
         do{
            x[i] = sc.nextInt();
         } while (x[i] < x[i-1]);   //바로 앞의 요소보다 작으면 다시 입력
       }
       
       int key = sc.nextInt(); //검색할 키 값
       
       int idx = binSearch(x, num, key); //배열 x에서 키 값이 key인 요소를 검색
       
       if ( idx == -1 )
          System.out.println("그 값의 요소가 없습니다.");
       else
          System.out.println(key+"는 x[" + idx + "]에 있습니다.");
   }
}

//java에서는 자료형에 따라 9가지로 오버로딩된 Arrays.binarySearch 메서드를 제공한다.
// int idx = Arrays.binarySearch(x. key); //배열 x에서 키 값이 key인 요소를 출력

//********************static int binarySearch(Object[] a, Object key)**********************
//자연 정렬이라는 방법으로 요소의 대소 관계 판단. -> 정수배열, 문자열 배열에서 검색할 때 적합

//문자열 정렬 : 1 10 100 2 21
//자연 정렬 : 1 2 10 21 100

//자연 정렬을 하기 위해서는 이 방법으로 클래스를 정의한다.
class A implements Comparable<A>{
   //필드, 메서드 등
   
   public int compareTo(A c){
      //this가 c보다 크면 양의 값 반환
      //             작으면 음의 값 반환
      //             같으면 0 반환
   }
   
   public boolean equals(Object c){
      //this가 c와 같으면 true 반환
      //this가 c와 같지 않으면 false 
   }
 }
 
//***************static <T> int binarySearch(T[] a, T key, Comparator<? super T> c)*******************
// 제네릭 메서드 / a는 검색 대상, key는 키 값
// c에는 배열의 요소가 어떤 순서로 줄지어 있는지, 각 요소의 대소 관계를 어떻게 판단할 것인지에 대한 정보 제공
//자연 순서가 아닌 순서로 줄지어 있는 배열에서 검색 ||
//자연 순서를 논리적으로 갖지 않는 클래스 배열에서 검색
