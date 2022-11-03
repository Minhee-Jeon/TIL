# 17. 생성자 함수에 의한 객체 생성
다양한 객체 생성 방식 중 **생성자 함수**를 이용해 객체를 생성하는 방식을 알아보고, 객체 리터럴로 생성하는 방식과의 장단점도 비교해보자.    
## Object 생성자 함수
> **생성자 함수**란 **`new` 연산자와 함께 호출해 객체를 생성하는 함수**다.    
생성자 함수로 생성된 객체를 **인스턴스**라고 한다.    
    
```js
const person = new Object();
```
자바스크립트에서는 다양한 타입의 빌트인 생성자 함수가 제공된다.    
(String, Number, Boolean, Function, Array, Object, Date, RegExp, Promise)    
## 생성자 함수
#### 객체 리터럴에 의한 객체 생성 방식의 문제점
직관적이고 간편하나, 단 하나의 객체의 객체만 생성해 **비효율적**이다.    
=> 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 한다면 매번 같은 프로퍼티를 기술해야 하기 때문    
    
객체마다 프로퍼티 값이 다를 수 있으나 메서드는 내용이 동일한 경우가 일반적이다.    
```js
const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  }
};

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  }
};
```
#### 생성자 함수에 의한 객체 생성 방식의 장점
인스턴스를 생성하기 위한 템플릿(클래스)처럼 생성자 함수로 **프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성**할 수 있다.    
```js
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };
}

const Circle1 = new Circle(5);
const Circle2 = new Circle(10);
```
    
#### 생성자 함수의 인스턴스 생성 과정
생성자 함수의 역할    
- 인스턴스 생성 (필수)    
- 생성된 인스턴스 초기화 (옵션)     
    - ① 인스턴스 프로퍼티 추가     
    - ② 초기값 할당    
        
자바스크립트 엔진은 생성자 함수를 호출하면 다음과 같이 **암묵적으로 인스턴스를 생성**하고 초기화하고 **암묵적으로 반환**한다.    
```js
function Circle(radius) {
  // 1. 암묵적으로 빈 객체(인스턴스)가 생성되고 this에 바인딩된다.
  
  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다. (개발자가 기술)
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };
  
  // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
}

const Circle1 = new Circle(5);
```
    
생성자 함수 내부에서 **return문은 생략**하자.    
명시적으로 this가 아닌 값을 반환하면 생성자 함수의 기본 동작이 훼손된다.    
    
위 코드에서 `// 3.` 직후에서    
`return 객체;`처럼 객체를 반환하면 `객체`가 반환되며,    
`return 원시 값;`처럼 원시 값을 반환하면 무시되고 암묵적으로 this가 반환된다.    
    
#### 내부 메서드 [[Call]]과 [[Construct]]    
**일반 객체는 호출할 수 없지만 함수는 호출이 가능하다.**    
함수 선언문이나 함수 표현식으로 정의된 함수는 생성자 함수로서도 호출 가능하다.    
```js
function foo() {}

foo();     // [[Call]]이 호출됨
new foo(); // [[Construct]]가 호출됨
```
함수 객체가 가지고 있는 것    
- 일반 객체도 가지고 있는 것    
  - 내부 슬롯 & 내부 메서드    
- 함수 객체만을 위한 것    
  - 내부 슬롯    
    - [[Environment]], [[FormalParameters]] 등    
  - 내부 메서드    
    - [[Call]]: 일반 함수로 호출되면 호출됨    
    - [[Construct]]: 생성자 함수로 호출되면 호출됨.     
    하지만 모든 함수 객체가 가지고 있지는 않음.    
    
    
#### constructor와 non-constructor의 구분
자바스크립트 엔진은 함수 객체를 생성할 때 **함수 정의 방식**에 따라 구분한다.    
- **callable**    
호출할 수 있는 객체 = 함수    
- **constructor**    
  - 생성자 함수로서 호출할 수 있는 함수. [[Construct]]를 가짐    
  - 함수 선언문, 함수 표현식, 클래스(클래스도 함수)    
  - 객체의 메서드를 일반 함수 형식으로 정의했다면 constructor    
- **non-constructor**    
  - 객체를 생성자 함수로서 호출할 수 없는 함수. [[Construct]]를 가지지 않음.    
  - 메서드(ES6 메서드 축약 표현만), 화살표 함수    
  - `new` 연산자와 사용 시  TypeError 발생    
      
#### new 연산자
`new` 연산자와 함수를 호출하면 내부 메서드 [[Call]]이 아닌 [[Constructor]]가 호출된다. 이 때 호출하는 함수는 non-constructor이면 안된다.    
```js
function add(x, y) {
  return x + y;
}
let inst = new add();
// 함수가 객체를 반환하지 않아 반환문이 무시되고 빈 객체가 생성됨
console.log(inst); // {}

function createUser(name, role) {
  return { name, role }
}
inst = new createUser('Minhee', 'transurfer');
// 함수가 생성한 객체를 반환
console.log(inst); // {name: "Minhee", role: "transurfer"}
```
    
반대로 생성자 함수를 `new` 연산자 없이 호출하면 [[Constructor]]이 아니라 [[Call]]이 호출된다.    
```js
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };
}

const circle = Circle(5);
console.log(circle); //undefined

// 일반 함수 내부의 this는 전역 객체 window를 가리킨다.
// 여기서 5랑 10이 찍힐 수 있는 이유는?? 
// Circle()이 실행되면서 전역 객체의 프로퍼티/메서드가 되기 때문!
console.log(radius); // 5
console.log(getDiameter()); // 10

circle.getDiameter(); // TypeError
```
생성자 함수는 **파스칼 케이스**로 명명해 일반 함수와 구별하도록 하자.    
#### new.target


`new` 연산자와 함께 **생성자 함수**로서 호출되면 **함수 내부의 new.target은 함수 자신을 가리킨다.**    
`new` 연산자 없이 **일반 함수**로서 호출된 **함수 내부의 new.target은 undefined**다.    
```js
// Circle이 new 연산자와 호출되지 않았으면 new.target은 undefined
if (!new.target) {
  // new 연산자와 생성자 함수를 재귀 호출해 생성된 인스턴스를 반환한다.
  return new Circle(radius);
}
```
ES6에서 도입되었으며 IE에서는 지원하지 않기 때문에 다음과 같은 스코프 세이프 생성자 패턴을 사용한다.    
```js
if (!(this instanceof Circle)) {
  return new Circle(radius);
}
```
