# 15. let, const 키워드와 블록 레벨 스코프
## var 키워드로 선언한 변수의 문제점
`var` 키워드 변수는 아래 세 경우 때문에 의도치 않은 오류를 발생시킬 여지가 있다.     
- 변수 중복 선언 허용     
- 함수 레벨 스코프만을 지역 스코프로 인정     
- 변수 호이스팅 (할당문 이전에 변수 참조 시 언제나 undefined)     
     
`var` 키워드의 단점을 보완하기 위해 ES6에서 `let`, `const`가 도입되었다.     
     
     
## let 키워드
- 변수 중복 선언 금지     
`let` 키워드로 같은 변수를 중복 선언하면 문법 에러가 발생한다.     
     
- 블록 레벨 스코프     
`let` 키워드로 선언한 변수는 함수 뿐 아니라 조건문, 반복문, try/catch문의 코드 블록도 지역 스코프로 인정한다.     
     
- 변수 호이스팅     
`let` 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.     
     
   **일시적 사각지대**: 스코프의 시작 지점부터 초기화 시작 지점까지 변수가 참조할 수 없는 구간     
   ```js
   // 런타임 이전에 선언, 초기화가 한번에 진행
   console.log(varFoo); // undefined
   var varFoo;
   console.log(varFoo); // undefined
   varFoo = 1;
   console.log(varFoo); // 1

   // 런타임 이전에 선언되나 초기화 이전 일시적 사각지대에서는 변수 참조 불가능 
   console.log(letFoo); // ReferenceError: foo is not defined
   let letFoo; // 변수 선언 시 초기화 실행
   console.log(letFoo); // undefined
   letFoo = 1;
   console.log(letFoo); // 1

   ```     
        
   ES6에서 도입된 `let`, `const` 키워드 변수, `class`는 변수 호이스팅이 발생하지 않는 것처럼 보이나 자바스크립트의 모든 선언(var, let, const, function, function*, class)은 호이스팅된다.     
   ```js
   let foo = 1;
   {
       console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
       let foo = 2;
   }
    ```      
 - 전역 객체와 let     
   - var 키워드로 선언한 전역 변수/함수, 암묵적 전역(선언하지 않은 변수에 값을 할당함)은 전역 객체 `window`의 프로퍼티가 되며, 프로퍼티를 참조할 때 **`windows`를 생략해 전역 변수처럼 사용 가능**하다.     
   ```js
   var x = 1;
   y = 2;
   function foo() {}

   console.log(window.x); // 1
   console.log(x); // 1
   console.log(window.y); // 2
   console.log(y); // 2
   console.log(window.foo); // f foo() {}
   console.log(foo); // f foo() {}
   ```
   - `let` 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니기 때문에 `window.foo`처럼 접근할 수 없다.     
   ```js
   let x = 1;
   console.log(window.x); // undefined
   console.log(x); // 1
   ```     
## const 키워드     
주로 상수를 선언하기 위해 사용되며 `let` 키워드의 특징과 대부분 동일하며, 아래 내용이 추가적으로 적용된다.     
     
**`const` 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 하며, 재할당이 금지된다.** 일반적으로 상수의 이름은 대문자 & 스네이크 케이스로 상수임을 명확히 한다.     
     
`const` 키워드로 선언된 변수에 변경할 수 없는 값인 **원시 값**을 할당한 경우 **할당된 값을 변경할 수 있는 방법은 없다.**     
     
하지만 **객체**가 할당된 경우 변경이 가능하므로 직접 변경이 가능하기 때문에 **값을 변경할 수 있다.** 단, 객체가 변경되더라도 변수에 할당된 참조 값이 변하지는 않는다.     
```js     
const person = {
  name: 'Minhee'
};

person.name = 'skdixm';
console.log(person); // {name: "skdixm"}
```
     
## var / let / const     
- ES6을 사용한다면 ~~`var`~~ 키워드는 사용하지 않는다.     
- 재할당이 필요한 경우에 한정해 `let` 키워드를 사용하고 이 때 변수의 스코프는 최대한 좁게 만든다.     
- 재할당이 필요 없는 원시 값(상수)나 객체에는 `const` 키워드를 사용한다. 재할당이 금지되기 때문에 `var`, `let` 키워드보다 안전하다.     
