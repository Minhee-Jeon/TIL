#### 서론 : C에서 C++로의 전환

C에서 제공: 매크로, 포인터, 구조체, 배열, 함수

C++에서 제공: C + **private/protected 멤버 + 함수 중복정의(overloading), 부재 인자(default argument), 생성자/소멸자, 사용자 정의 연산자, 인라인 함수(inline function), 레퍼런스, friend, template, exception, namespace**

C++에서는 C보다 고려할 옵션들이 더 많아요. 일부 C에서의 습관은 C++의 기본 정신에 위배될 수 있기에 아래 내용을 정리합니다.



[01_#define보다는 const와 inline을 사용한다](#01_#define보다는-const와-inline을-사용한다)

[02_<stdio.h>보다는 <iostream>을 사용한다](#02_<stdio.h>보다는-<iostream>을-사용한다)

[03_malloc과 free보다는 new와 delete를 사용한다](# 03_malloc과-free보다는-new와-delete를-사용한다)

[04_C++ 스타일의 주석을 지향한다](# 04_c++-스타일의-주석을-지향한다)





#### 메모리 관리 

**1.  메모리를 올바르게 얻기**  (메모리 할당과 해제 루틴을 올바르게 호출)

**2. 메모리 관리를 효율적으로 수행하기**  (할당과 해제 루틴의 맞춤 버전들을 작성)



C에서의 메모리 누출: malloc에 의해 할당된 메모리가 free로 반환되지 않을 때마다 발생

C++에서의 메모리 누출: 

[05_new와 delete의 사용 시 동일한 형식을 이용한다 ](# 05_new와-delete의-사용-시-동일한-형식을-이용한다)

[06_소멸자에서 포인터 멤버에 대해 delete를 이용한다](06_소멸자에서-포인터-멤버에-대해-delete를-이용한다)

[07_메모리가 모자랄 경우에 대비한다](07_메모리가-모자랄-경우에-대비한다)

[08_operator new와 operator delete 작성 시 관례를 따른다](08_operator-new와-operator-delete-작성-시-관례를-따른다)

[09_new의 "정상" 형식을 감추지 않는다](09_new의-"정상"-형식을-감추지-않는다)

[10_operator new를 작성한다면 operator delete도 작성한다](10_operator-new를-작성한다면-operator-delete도-작성한다)



### 01_#define보다는 const와 inline을 사용한다

전처리기(preprocessor)보다는 컴파일러를 선호하세요. 전처리기 매크로를 사용하는 대신 상수를 정의하면 됩니다.





### 02__<stdio.h>보다는 <iostream>을 사용한다





### 03_malloc과 free보다는 new와 delete를 사용한다

동적으로 메모리를 다룰 때 `malloc`과 `free`는 생성자와 소멸자의 존재를 모른다는 명료한 문제점을 가지고 있어요. 10개의 string 객체의 공간을 얻기 위해 `malloc`과 `new`를 이용한 두 가지 방법을 생각해볼게요.

```c++
string *string Array1 = 
    static_cast<string*>(malloc(10 * sizeof(string)));

free(stringArray1);
```

`stringArray1`은 10개의 객체를 위한 충분한 메모리를 가지게 됩니다. 하지만 그 메모리 내에서 **어떤 객체도 생성되지 않아요.** 또 배열 내의 객체들을 초기화하려면 특별한 방법의 점핑을 통해야만 해요.



`free`의 호출은 `stringArray1`이 가리킨 메모리를 해제할 거예요. 하지만 **어떠한 소멸자도 그 메모리 안의 string 객체 상에서 호출되지 않아요.** 



```c++
string *stringArray2 = new string[10];

delete[] stringArray2;
```

반면에 `stringArray2`는 10개의 완전히 생성된 string 객체를 가리켜요. `new`는 **메모리 할당 - 생성자 호출 **을 해줄 뿐만 아니라 할당할 메모리에 원하는 타입을 자동으로 변환해 반환해줍니다.

또  `delete`가 `stringArray2` 상에서 호출됐을 때 특정 **메모리가 해제**되기 전에 배열 내 각 객체들을 위해 **소멸자가 호출됩니다.** 



`new`/`delete`를 `malloc`/`free`와 혼용하는 것은 별로 좋은 생각이 아니에요. `new`로 얻은 포인터 상에서 `free`를 호출할 때 또는 `malloc`으로 얻은 포인터 상에서 `delete`를 호출하려고 할 때 결과는 알 수 없기 때문이예요.





### 04_C++ 스타일의 주석을 지향한다

```c++
//C++ 스타일 주석
if (a > b){
    //int temp = a; //a와 b를 swap
    //a = b;
    //b = temp;
}
```

```c
/*C 스타일 주석*/
if (a > b){
    /*int temp = a; /* a와 b를 swap */
    a = b;
    b = temp;
    */
}
```

C++ 주석 형태에서는 삽입된 주석이 아무런 문제를 일으키지 않지만, C 주석을 이용할 때에는 문제가 생길 수 있어요. 주석 안에 삽입된 주석이 의도와 다르게 바깥 주석을 조기에 끝맺음해버리고 있습니다.



### 05_new와 delete의 사용 시 동일한 형식을 이용한다

### 06_소멸자에서 포인터 멤버에 대해 delete를 이용한다
