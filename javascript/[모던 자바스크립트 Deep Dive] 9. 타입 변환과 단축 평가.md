# 09. 타입 변환과 단축 평가
## 타입 변환이란?
개발자가 의도적으로 값의 타입을 변환하는 것을 **명시적 타입 변환** 또는 **타입 캐스팅**이라고 한다.         
이와 다르게 개발자의 의도와 관계없이 표현식을 평가하는 도중에 자바스크립트 엔진에 의해 암묵적으로 타입이 자동으로 변환되는 것을 **암묵적 타입 변환** 또는 **타입 강제 변환**이라고 한다.        
```js
var x = 1;

var explicitStr = x.toString();
console.log(typeof explicitStr, explicitStr); // string 10

var implicitStr = x + '';
console.log(typeof implicitStr, implicitStr); // string 10

console.log(typeof x, x);     // number 10
```
타입 변환이 기존 원시 값을 변경하지는 않는다. 원시 값은 변경 불가능한 값이므로 변경할 수는 없고, 기존 원시 값을 사용해 다른 타입의 새 원시 값을 생성하는 것이다.       
       
오류를 만들지 않기 위해 코드에서 압묵적 타입 변환이 발생하는지  (어떤 타입의 어떤 값으로?) 등을 자신과 동료가 쉽게 이해할 수 있어야 한다.      
## 암묵적 타입 변환
### 문자열 타입으로
`+` 연산자는 피연산자 중 하나 이상이 문자열이면 **문자열 타입이 아닌 피연산자를 문자열 타입으로** 암묵적 타입 변환한다.        
피연산자일 때 뿐만 아니라 리터럴의 경우에도 k표현식의 평가 결과를 암묵적 타입 변환한다.         
```js
`1 + 1 = ${1 + 1}` // "1 + 1 = 2"
```

### 숫자 타입으로
**산술 연산자**나 비교 연산자(`>` 등)는 피연산자 중 **숫자 타입이 아닌 피연산자를 숫자 타입으로** 암묵적 타입 변환한다.      
이 때 피연산자가 숫자 타입으로 변환될 수 없다면 표현식의 평가 결과는 **NaN**이 된다.          
        
`+` 단항 연산자는 피연산자가 숫자 타입이 아니면 숫자 타입으로 암묵적 타입 변환한다.      
```js
1 - '1'   // 0
1 / 'one' // NaN
'1' > 0   // true
+''       // 0
```          
#### `+` 단항 연산자로 인해 숫자 타입 암묵적 타입 변환이 되는 경우
- 결과가 0: 빈 문자열(''), 빈 배열([]), null, false         
- 결과가 1: true       
- 결과가 NaN: 객체, 빈 배열이 아닌 배열, undefined          
          
### 불리언 타입으로
자바스크립트 엔진은 조건식의 평가 결과를 불리언 타입으로 암묵적 타입 변환한다.          
- falsy 값          
    - false         
    - undefined         
    - null          
    - 0, -0       
    - NaN        
    - '' (빈 문자열)        
- truthy 값: falsy 값을 제외한 모든 값         
    
## 명시적 타입 변환
개발자의 의도에 따라 명시적으로 타입을 변경하는 데에는 다음과 같은 방법이 있다.        
- 표준 빌트인 생성자 함수 (String, Number, Boolean) 를 new 연산자 없이 호출       
- 빌트인 메서드를 사용 (new 연산자를 호출, 객체 생성을 위한 js 기본 제공 함수)          
- 암묵적 타입 변환 이용        
### 문자열 타입으로
```js
// 1. String 생성자 함수를 new 연산자 없이 호출
String(1);

// 2. Object.prototype.toString 메서드 사용
(1).toString();

// 3. 문자열 연결 연산자를 이용
1 + '';
```
### 숫자 타입으로
```js
// 1. Number 생성자 함수를 new 연산자 없이 호출
Number('0');

// 2. parseInt, parseFloat 함수를 사용 (문자열만 가능)
parseInt('0');

// 3. + 단항 산술 연산자 이용
+'0';

// 4. * 산술 연산자를 이용
'0' * 1;
```
### 불리언 타입으로
```js
// 1. Boolean 생성자 함수를 new 연산자 없이 호출
Boolean('false') // true

// 2. ! 연산자를 두 번 사용
!!{};           // true
```
## 단축 평가
논리곱(`&&`) 연산자와 논리합(`||`) 연산자는 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환하는데, 이것이 **단축 평가**이다.       
즉, **표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것**이다.         
        
|단축 평가 표현식|평가 결과|      
|---|---|         
|true \|\| anything|true|         
|false \|\| anything| anything|         
|true && anything| anything|        
|false && anything |false|        
        
        
단축 평가를 이용해 다음과 같이 `if`문을 대체할 수 있다.        
```js
var condition = true;
// condition이 true라면 result에 '참일 때의 값'이 할당
result = condition && '참일 때의 값';

condition = false;
// condition이 false라면 result에 '거짓일 때의 값'이 할당
result = condition || '거짓일 때의 값';
```

단축 평가의 다음과 같은 유용한 패턴도 있다.        
- 객체를 가리키길 기대하는 변수가 null 또는 undefined인지 여부를 확인하고 프로퍼티를 참조할 때        
    - `var value = elem.value;`보다는 `var value = elem && elem.value;` 를 써서 에러를 방어한다.        
    - null 또는 undefined일 때 객체의 프로퍼티를 참조하면 타입 에러가 발생하며 프로그램이 강제 종료되기 때문.         
- 함수의 매개변수에 기본값을 설정할 때        
    - 함수 호출 시 인수를 전달하지 않으면 매개변수에는 **undefined**가 할당된다.        
    - 매개변수 기본값을 단축평가로 사용하면 undefined로 발생하는 에러를 방지 가능        
    ```js
    // 단축 평가를 이용한 매개변수의 기본값 설정
    function getStrLength(str) {
      str = str || '';
      return str.length;
    }

    // ES6의 매개변수 기본값 설정
    function getStrLength(str = '') {
       return str.length;  
    }

    getStrLength(); // 0
    ```
    
#### 옵셔널 체이닝 연산자 (`?.`)
ES11에서 도입되었으며, 좌항의 피연산자가 null 또는 undefined라면 **undefined를 반환**하고, 그렇지 않으면 **우항의 프로퍼티 참조를 이어간다**.        
```js
var str = '';

// ES11 이전의 && 연산자를 이용했을 때. 문자열 length를 참조하지 못한다.
var lengthBefore = str && str.length;
console.log(lengthBefore); // ''

// 옵셔널 체이닝 연산자는 좌항 피연산자가 falsy 값이라도 null/undefined가 아니면 
// 우항 프로퍼티 참조를 이어간다.
// Falsy 값: false, undefined, null, 0, -0, NaN, ''
var lengthAfter = str?.length;
console.log(lengthAfter); // 0
```


#### null 병합 연산자 (`??`)
ES11에서 도입되었으며, 좌항의 피연산자가 null 또는 undefined라면 **우항의 피연산자를 반환**하고, 그렇지 않으면 **좌항의 피연산자를 반환**한다.        
변수에 기본값을 설정할 때 유용하다.        
```js
// Falsy 값인 0이나 ''도 기본값으로서 유효하면 예기치 않은 동작이 발생할 수 있다.
var before = '' || 'default string';
console.log(before); // "default string";

// null 병합 연산자는 좌항 피연산자가 Falsy 값이라도 null 또는 undefined가 아니면 
// 좌항의 피연산자를 그대로 반환한다.
var after = '' ?? 'default string';
console.log(after); // ""
```
