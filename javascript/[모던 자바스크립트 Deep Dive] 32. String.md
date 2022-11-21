# 32. String 생성자 함수       
표준 빌트인 객체 String은 원시 타입인 문자열을 다룰 때 유용한 프로퍼티/메서드를 제공한다.      
## String 생성자 함수      
```js
const strObj = new String();
console.log(strObjg); // String {length: 0, [[PrimitiveValue]]: ""}

const me = new String('Min');
console.log(me);
// String {0: "M", 1: "i", 2: "n", length: 3, [[PrimitiveValue]]: "Min"}

// String 래퍼 객체는 유사 배열 객체이며 이터러블
// length를 가짐, 프로퍼티 키: 0~length-1, 프로퍼티 값: 각 문자
me[0]; // M
// 원시 값인 문자열은 변경 ❌, 에러 ❌
me[0] = 'W'; // M
```
      
## length 프로퍼티
String 래퍼 객체는 배열과 마찬가지로 length 프로퍼티를 가진다.      
```js
'Hello'.length; // 5
```
      
## String 메서드
**String 객체는 읽기 전용 객체로 제공된다.** 문자열은 변경 불가능한 원시 값이니까!      
=> String 객체의 모든 메서드는 String 래퍼 객체를 직접 변경할 수 없고,      
String 객체의 메서드는 언제나 새로운 문자열을 생성해 반환한다.      
      
#### String.prototype.indexOf
메서드를 호출한 문자열에서 인수로 전달받은 **문자열을 검색해 찾은 첫 번째 인덱스를 반환**한다.      
2번째 인수로는 검색을 시작할 인덱스를 전달할 수 있다.      
      
인수가 문자열에 포함되지 않아 검색에 실패한다면 `-1`이 반환된다.      
이 점 때문에 대상 문자열에 특정 문자열이 존재하는지 확인할 때 유용하나, ES6에서 도입된 `includes` 메서드가 더 가독성이 좋다.      
```js
const str = 'Hello World';
str.indexOf('l');    // 2
str.indexOf('l', 3); // 3
str.indexOf('x');    // -1

if (str.indexOf('Hello') !== -1) { }
if (str.includes('Hello')) {}
```
      
#### String.prototype.search
대상 문자열에서 인수로 전달받은 **정규 표현식과 매치하는 문자열을 검색해 일치하는 문자열의 인덱스를 반환**하며, 검색에 실패하면 `-1`이 반환된다.      
```js
str.search(/o/); // 4
str.search(/x/); // -1
```
      
#### String.prototype.includes
대상 문자열에 인수로 전달받은 **문자열이 포함되어 있는지 여부**를 boolean으로 반환한다.      
2번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.      
```js
str.includes('');     // true
str.includes();       // false
str.includes('l', 3); // true
```
      
#### String.prototype.startsWith
(ES6 도입) 대상 문자열이 인수로 전달받은 **문자열로 시작하는지 여부**를 boolean으로 반환한다.      
2번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.      
      
#### String.prototype.endsWith
(ES6 도입) 대상 문자열이 인수로 전달받은 **문자열로 끝나는지 여부**를 boolean으로 반환한다.      
2번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.      
      
#### String.prototype.charAt
대상 문자열에서 인수로 전달받은 **인덱스에 위치한 문자를 검색**해 반환한다.      
인덱스가 문자열의 범위(0 ~ str.length-1)를 벗어나면 빈 문자열이 반환된다.      
`charCodeAt`과 `codePointAt`과 유사하다.      
      
#### String.prototype.substring
      
#### String.prototype.slice
      
#### String.prototype.toUpperCase
      
#### String.prototype.toLowerCase
      
#### String.prototype.trim
      
#### String.prototype.repeat
      
#### String.prototype.replace
      
#### String.prototype.split      
