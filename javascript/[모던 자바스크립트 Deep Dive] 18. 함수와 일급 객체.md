# 18. 함수와 일급 객체
## 일급 객체
**일급 객체의 조건**         
① 런타임에 리터럴로 생성할 수 있다.         
② 변수나 자료구조에 저장할 수 있다.         
③ 함수의 매개변수에 전달할 수 있다.         
④ 함수의 반환값으로 사용할 수 있다.         
         
자바스크립트의 함수는 일급 객체이며, ③, ④번 특징은 JS의 장점인 함수형 프로그래밍을 가능하게 한다.         
## 함수 객체의 프로퍼티
함수도 객체이므로 프로퍼티를 가지기 때문에 `console.dir`이나 `Object.getOwnPropertyDescriptor`로 확인할 수 있다.         
         
함수 객체 고유의 데이터 프로퍼티로 **arguments, caller, length, name, prototype** 프로퍼티가 있다.         
(하지만 `__proto__`는 모든 객체가 사용할 수 있는 접근자 프로퍼티이며, Object,prototype 객체의 프로퍼티를 상속받은 것이다.)         
![](https://velog.velcdn.com/images/skdixm/post/248d26c8-fee9-46b1-b7eb-615b2271d2fd/image.PNG)         
         
#### arguments 프로퍼티         
arguments 객체이며, 함수 호출 시 전달된 **인수들의 정보가 담긴 순회 가능한 유사 배열 객체**이다. 함수 외부에서는 참조할 수 없다.         
         
자바스크립트에서는 함수의 **매개변수와 인수의 개수**가 일치하는지 확인 X         
=> 개수가 맞지 않아도 에러 X         
- 매개변수 개수 > 인수 개수: 남는 매개변수는 undefined         
- 매개변수 개수 < 인수 개수: 초과된 인수는 **무시**되나 암묵적으로 arguments 객체의 프로퍼티로 보관됨         
         
arguments 객체의 프로퍼티         
- `callee`: 함수 자신. (호출되어 arguments 객체를 생성한 함수)         
- `length`: 인수의 개수         
         
매개변수 개수를 확정할 수 없는 **가변 인자 함수**를 구현할 때 유용하다.         
```js         
for (let i = 0; i < arguments.length; i++) {
  res += arguments[i];
}
```
유사 배열 객체 != 배열 => `Function.prototype.call`, `Function.prototype.apply`를 사용한 간접 호출이 필요하다.         
```js
function sum() {
  const array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}
```
이 번거로움을 해결하기 위해 ES6에서 Rest 파라미터가 도입되었다.         
```js
function sum(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}
```

#### caller 프로퍼티
함수 자신을 호출한 함수를 가리키며, ECMAScript 사양에 포함되지 않는 **비표준** 프로퍼티다.         
         
#### length 프로퍼티
함수를 정의할 때 선언한 **매개변수의 개수**를 가리킨다.         
인자의 개수를 가리키는 arguments 객체의 length 프로퍼티의 값과 다를 수 있다.         

#### name 프로퍼티
**함수 이름**을 나타내며, ES6에서 정식 표준이 되었다.         
```js
// 기명 함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name); // foo

// 익명 함수 표현식: ES5와 ES6의 동작이 다르다.
var anonymousFunc = function() {};
console.log(anonymousFunc.name); // ES5:'' / ES6: anonymousFunc

// 함수 선언문
function bar() {}
console.log(bar.name); // bar
```
         
#### \_\_proto\_\_ 접근자 프로퍼티
모든 객체는 객체지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리키는 **[[Prototype]]**이라는 **내부 슬롯**을 가진다.         
내부 슬롯은 직접 접근할 수 없기 때문에 접근자 프로퍼티인 \__proto__로 간접적으로 내부 슬롯이 가리키는 프로토타입 객체에 접근할 수 있다.         
         
#### prototype 프로퍼티
함수가 생성자 함수로 호출될 때 생성할 **인스턴스의 프로토타입 객체**를 가리키며, constructor만이 소유하는 프로퍼티이다.         
