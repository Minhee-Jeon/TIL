테스트 없이 눈으로만 코딩할 때 가장 틀리기 쉬운 부분이 call by value 와 call by refence 를 정확히 이해하지 못할 때 생기는 오류가 아닐까 싶다.          
          
기본형과 객체가 있는데 기본형은 call by value 이고 객체는 call by refence 라는 것은 대부분의 java 개발자들이 알고 있을꺼라 생각한다.          
          
그 예로 swap 함수를 가장 많이 설명하는데..          
          
          
예제 1)          
```java
class Test {
    private static void swap(int a, int b) {
        int temp = a;
        a = b;
        b = temp;
    }

    public static void main(String args[]) {
        int a = 1;
        int b = 2;

        System.out.println("a => " + a);
        System.out.println("b => " + b);

        swap(a, b);

        System.out.println("------- swap 후 -------");

        System.out.println("a => " + a);
        System.out.println("b => " + b);
    }
}
```
예제 1 의 경우 원하던 결과가 아닌 것을 바로 알아 낼 수 있을 것이다.          
swap 메소드에 넘기는 것은 reference 가 아닌 value 이기 때문에...          
쉽다. 넘어가자.          
          
다음 예제 2 를 보자          
예제 2)          
```java
class Test {
    private static void swap(Integer a, Integer b) {
        Integer temp = a;
        a = b;
        b = temp;
    }

    public static void main(String args[]) {
        Integer a = new Integer(1);
        Integer b = new Integer(2);

        System.out.println("a => " + a.intValue());
        System.out.println("b => " + b.intValue());

        swap(a, b);

        System.out.println("------- swap 후 -------");

        System.out.println("a => " + a.intValue());
        System.out.println("b => " + b.intValue());
    }
}
```
예제 2 의 경우 Integer 는 Object 이다. Object 는 call by reference 다.          
따라서 위의 예제는 원하는 결과를 가져올 것이다.          
그러나 실행을 하면 예제 1과 전혀 다르지 않다는 것을 알 수 있다.          
          
왜? 객체는 call by reference 라며 사기친거야?          
          
결론부터 말하면 객체는 call by reference 맞다          
          
그러나 해당 객체를 보는 새로운 reference 를 참조해서 넘기는 것이다.          
          
따라서 동일한 객체를 가리키고 있지만          
main 에서의 reference 값과 swap 함수에서의 reference 값은 다르다.          
          
따라서 위의 예제의 경우 원하는 결과가 나오지 않는다.          
          
그렇다면 어떻게 해야 해?          
          
예제 3 을 보자.          
          
예제 3)
```java
class Test {
    int value;

    Test(int value) {
        this.value = value;
    }

    private static void swap(Test a, Test b) {
        int temp = a.value;
        a.value = b.value;
        b.value = temp;
    }

    public static void main(String args[]) {
        Test a = new Test(1);
        Test b = new Test(2);

        System.out.println("a => " + a.value);
        System.out.println("b => " + b.value);

        swap(a, b);

        System.out.println("------- swap 후 -------");

        System.out.println("a => " + a.value);
        System.out.println("b => " + b.value);
    }
}
```
예제 2와 같이 객체의 reference 를 넘긴다.          
reference 를 직접 변경하는 게 아니라.          
reference 가 참조하는 객체의 value 를 변경하고 있다.          
따라서 같은 객체를 보고 있는 main 에서도 값이 바뀌는 것을 알 수 있다.          
```
call by reference

해당 객체의 주소값을 직접 넘기는 게 아닌 객체를 보는 또 다른 주소값을 만들어서 넘기다는 사실을 잊지 말자~
```
[출처](https://felightlim.tistory.com/19)
