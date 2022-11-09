# 20. strict mode
## strict mode란?
오타나 문법 지식의 미비로 인한 실수는 언제나 발생한다.           
따라서 잠재적인 오류를 발생시키기 어려운 개발 환경을 만들고 그 환경에서 개발하는 것이 근본적인 해결책이다.           
           
strict mode는 ES5부터 적용되었으며, 클래스, 모듈에는 자동으로 적용된다.           
>strict mode는 **오류를 발생시킬 가능성이 높거나 JS 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 에러를 발생**시킨다.           
           
ESLint 같은 린트 툴은 더 강력한 효과를 가진다.           
- 정적 분석: 실행 전 문법적/잠재적 오류를 탐지 & 오류 원인 리포트           
- 코딩 컨벤션 정의 및 강제           
## strict mode의 적용
전역의 선두 또는 함수 몸체의 선두에 `'use strict';`를 추가한다.           
           
## 전역에 strict mode를 적용하는 것은 피하자
전역에 적용한 strict mode는 스크립트 단위로 적용된다.           
이 때 strict mode 스크립트와 non-strict mode 스크립트 혼용 시 오류가 발생할 수 있다.           
           
## 함수 단위로 strict mode를 적용하는 것도 피하자
함수마다 strict mode를 적용하거나 적용하지 않는 것은 바람직하지 않다.           
일일이 strict mode를 모든 함수에 적용하는 것도 번거롭다.           
           
           
=> 전역이나 함수 단위로 strict mode를 적용하는 대신,           
선두에 strict mode가 적용된 즉시 실행 함수로 스크립트 전체를 감싸 스코프를 구분하자.           
```js
(function () {
  var let = 10; // non-strict mode, 에러 발생 X
  
  function foo() {
    'use strict';
    let = 20; // SyntaxError
  }
  foo();
}());
```
## strict mode가 발생시키는 에러
#### 암묵적 전역
```js
// 선언되지 않은 변수를 참조하면 ReferenceError
(function () {
  'use strict';
  
  x = 1;
  console.log(x); // ReferenceError
}());
```

#### 변수, 함수, 매개변수의 삭제
```js
// delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError
(function () {
  'use strict';
  
  var x = 1;
  delete x; // SyntaxError
  
  function foo(a) {
    delete a; // SyntaxError
  }
  delete foo; // SyntaxError
}());
```

#### 매개변수 이름의 중복
```js
// 중복된 매개변수명을 사용하면 SyntaxError
(function () {
  'use strict';
  
  // SyntaxError
  function foo (x, x) {
    return x + x;
  }
  console.log(foo(1,2));
}());
```

#### with문의 사용
with문은 전달된 객체를 스코프 체인에 추가한다.           
객체의 프로퍼티를 반복해 사용할 때 객체명을 생략할 수 있어 코드가 간단해지나, **성능과 가독성이 나빠진다.** => 사용하지 말자.           
```js
// with문 사용하면 SyntaxError
(function () {
  'use strict';
  
  // SyntaxError
  with({ x: 1}) {
    console.log(x);
  }
}());
```

## strict mode 적용에 의한 변화
#### 일반 함수의 this
strict mode에서 일반 함수를 호출하면 일반 함수 내부에서는 `this`를 사용할 필요가 없기 때문에 `this`에 undefined가 바인딩된다.           
```js
(function () {
  'use strict';
  
  function foo () {
    console.log(this);
  }
  foo(); // undefined
  
  function Foo() {
    console.log(this);
  }
  new Foo(); // Foo
}());
```

#### arguments 객체
strict mode에서 매개변수에 전달된 인수를 재할당해 변경해도 `arguments` 객체에 반영되지 않는다.           
```js
(function (a) {
  'use strict';
  a = 2;
  
  constole.log(arguments); // { 0: 1, length: 1 }
}());
```
