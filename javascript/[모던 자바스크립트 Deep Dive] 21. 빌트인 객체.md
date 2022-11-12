# 21. 빌트인 객체
## 자바스크립트 객체의 분류
자바스크립트 객체 분류하기          
#### 표준 빌트인 객체
애플리케이션 **전역의 공통 기능**을 제공하며, 전역 객체의 프로퍼티로 제공되므로 별도의 선언 없이 참조 가능하다.          
ECMAScript 사양에 정의된 객체이므로 자바스크립트 실행 환경(브라우저, Node.js)을 가리지 않고 **언제나 사용 가능**하다.          
          
#### 호스트 객체
자바스크립트 실행 환경에서 추가로 제공하는 객체.          
- 브라우저 환경          
  - 클라이언트 사이드 Web API (DOM, BOM, Canvas, XMLHttpRequest, fetch, ...)          
- Node.js 환경          
  - Node.js 고유의 API          

#### 사용자 정의 객체
기본 제공되는 객체가 아닌 사용자가 직접 정의한 객체          

## 표준 빌트인 객체
자바스크립트는 40여 개의 표준 빌트인 객체를 제공한다.          
( Object, String, Number, Boolean, Symbol, Date, Mate, RegExp, Array, Map/Set, WeekMap/WeekSet, Function, Promise, Reflect, Proxy, JSON, Error, ... )          

- non-constructor 표준 빌트인 객체          
  - Math, Reflect, JSON          
  - 정적 메서드만 제공한다.          
          
- constructor인 표준 빌트인 객체          
  - non-constructor를 제외한 모든 표준 빌트인 객체          
  - 프로토타입 메서드와 정적 메서드 제공          
          
          
          
## 원시값과 래퍼 객체
원시 타입이 있는데도 String, Number, Boolean 등의 표준 빌트인 생성자 함수가 존재하는 이유?          
=> 원시 타입이 프로퍼티와 메서드를 갖는 객체처럼 동작          
(책에선 안나왔지만 이 프로퍼티나 메서드가 유용하니 그렇게 설계한 듯하다.)          
          
래퍼 객체: 문자열, 숫자, 불리언 값에 대해 **객체처럼 접근**하면 생성되는 **임시 객체**          
- 문자열, 숫자, 불리언은 new 연산자와 함께 호출하는 것을 권장 ❌           
(식별자.프로퍼티 형태로 바로 쓸 수 있기 때문)          
- 문자열, 숫자, 불리언, 심벌 이외의 원시값은 래퍼 객체를 생성 ❌          
          
원시값에 대해 마침표 표기법이나 대괄호 표기법으로 접근하면          
자바스크립트 엔진이 암묵적으로 연결된 객체를 생성해 생성된 객체로 프로퍼티에 접근하거나 메서드를 호출하고          
다시 원시값으로 되돌린다.          
```js
const str = 'hello';

// str는 암묵적으로 생성된 래퍼 객체를 가리킨다.
// str의 값 'hello'는 래퍼 객체의 [[StringData]] 내부 슬롯에 할당되며,
// 래퍼 객체에 name 프로퍼티가 동적 추가된다.
str.name = 'Minhee';

// str는 다시 원래의 문자열 (래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값)을 갖는다.
// 생성되었던 래퍼 객체는 아무도 참조하지 않는 상태이므로 GC의 대상이 된다.

// str는 새롭게 암묵적으로 생성된 다른 래퍼 객체를 가리킨다.
// 새롭게 생성된 래퍼 객체에는 name 프로퍼티가 존재하지 않는다.
console.log(str.name); // undefined

// str는 다시 원래의 문자열 (래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값)을 갖는다.
// 새로 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 GC의 대상이 된다.
console.log(typeof str, str); // string hello
```

## 전역 객체
>**전역 객체**는 코드 실행 이전 자바스크립트 엔진이 그 어떤 객체보다 먼저 생성하는 특수한 객체이며, 어떤 객체에도 속하지 않은 최상위 객체이다.          
- 브라우저 환경 : window(또는 self, this, frames)          
- Node.js 환경 : global          
          
전역 객체의 특징          
- 전역 객체를 생성할 수 있는 생성자 함수 ❌ => 개발자가 의도적으로 생성 불가          
- 전역 객체의 프로퍼티를 참조할 때 `window` 또는 `global`을 생략할 수 있다.          
- Object, String, Number, Boolean, Function, Array, ... 등의 모든 표준 빌트인 객체를 프로퍼티로 가지고 있다.          
```js
window.parseInt('F', 16) // 15
parseInt('F', 16) // 15
```
- 자바스크립트 실행 환경에 따라 추가적인 프로퍼티와 메서드를 가진다.          
  - 브라우저 환경에서의 호스트 객체:          
  DOM, BOM, Canvas, XMLHttpRequest, fetch, requestAnimationFrame, SVG,... 등의 클라이언트 사이드 Web API          
  - Node.js 환경에서의 호스트 객체:          
  Node.js 고유의 API          
            
- `var` 키워드로 선언한 전역 변수나 선언하지 않은 변수에 값을 할당한 암묵적 전역,          
그리고 전역 함수는 전역 객체의 프로퍼티가 된다.          
```js
var foo = 1;
bar = 2;
function baz() { return 3; }
console.log(window.foo, window.bar, window.baz) // 1 2 3

// let, const 키워드로 선언한 전역 변수는 전역 렉시컬 환경의 선언적 환경 레코드 내에 존재
let foo = 123;
console.log(window.foo); // undefined
```
- 브라우저 환경의 모든 자바스크립트 코드는 하나의 전역 객체 window를 공유한다.          
=> 분리되어 있는 자바스크립트 코드가 하나의 전역을 공유한다.          
#### 빌트인 전역 프로퍼티
**Infinity**: 무한대를 나타내는 숫자값 Infinity를 갖는다.          
**NaN**: 숫자가 아님을 나타내는 숫자값 NaN을 갖는다.          
**undefined**: 원시 타입 undefined를 값으로 갖는다.          
          
#### 빌트인 전역 함수
**eval**          
`eval`은 자바스크립트 코드 문자열을 인수로 받아 기존의 스코프를 런타임에 동적으로 수정한다.          
strict mode이거나 인수로 전달받은 문자열 코드가 `let`, `const`를 이용한 변수라면 기존의 스코프를 수정하지 않고 자체적인 스코프를 생성한다.          
          
하지만 입력받은 콘텐츠를 실행하는 보안취약성과 자바스크립트 엔진의 최적화 미실행으로 인한 느린 속도 때문에 **eval 함수를 사용 금지해야 한다.**          
          
**isFinite**          
전달받은 인수의 유한수 여부를 반환한다.          
인수 타입이 숫자가 아니라면, 숫자로 타입 변환 후 검사하며, 이 때 NaN으로 평가되면 `false`를 반환한다.          
          
**isNaN**          
전달받은 인수가 NaN인지 검사해 그 결과를 불리언으로 반환하며, 인수 타입이 숫자가 아니라면 숫자로 타입을 변환해 검사한다.          
          
**parseFloat**          
문자열 인수를 전달받아 실수로 해석해 반환한다.          
첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환          
          
**parseInt**          
문자열 인수를 전달받아 정수로 해석해 반환한다.          
두 번째 인수로 진법을 나타내는 기수를 전달하고, (2~35, 기본값 10) 반환값은 언제나 10진수이다.          
두 번째 인수를 지정하지 않더라도 첫 번째 인수가 16진수 리터럴(`"0x"` 또는 `"0X"`로 시작)이라면 16진수로 해석된다. 하지만 2진수나 8진수 리터럴은 해석하지 못한다.          
```js          
const x = 15;

x.toString(16);               // 'f' (16진수화)
parseInt(x.toString(16), 16); // 15
parseInt('0xf');              // 15

parseInt(x.toString(8), 8);   // 15
parseInt('0o17');             // 0 (0 이후가 무시됨)
```

첫 번째 인수로 전달한 문자열의 _첫 문자_가 해당 지수의 숫자로 변환될 수 없다면 NaN을 반환한다.          
첫 번째 인수로 전달한 문자열의 _두 번째 문자_ 부터 **해당 진수에서 표현 불가능한 문자**나 **공백**을 마주치면 이 문자 이후의 문자들은 전부 무시되면 해석된 정수값만 반환된다. (앞뒤 공백은 무시)          
          
**encodeURI / decodeURI**
`encodeURI`          
완전한 URI를 문자열로 전달받아 이스케이프 처리를 위해 ascii 문자 셋으로 인코딩한다.          
(알파벳, 0~9의 숫자, - _ . ! ~ * ' () 문자는 이스케이프 처리에서 제외된다.)          
`decodeURI`          
인코딩된 URI를 인수로 전달받아 이스케이프 처리 이전으로 디코딩한다.          
          
**encodeURIComponent / decodeURIComponent**          
`encodeURIComponent`          
URI 구성요소를 인수로 전달받아 인코딩한다. (이스케이프 처리에서 제외되는 문자 동일함)          
단, `encodeURI`와 다르게 인수 문자열을 쿼리 스트링의 일부로 간주하기 때문에 쿼리 스트링 쿠분자로 사용되는 =, ?, &까지 인코딩한다.          
`decodeURIComponent`          
매개변수로 전달된 URI 구성 요소를 디코딩한다.          
```js
const uri = 'http://example.com?name=전민희&job=programmer&transurfer';
const uriComp = 'name=전민희&job=programmer&transufer';

const enc = encodeURI(uri);
const encComp = encodeURIComponent(uriComp);
console.log(enc); // http://example.com?name=%EC%A0%84%EB%AF%BC%ED%9D%AC&job=programmer&transurfer
console.log(encComp); // name%3D%EC%A0%84%EB%AF%BC%ED%9D%AC%26job%3Dprogrammer%26transufer
```
