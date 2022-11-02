# 16. 프로퍼티 어트리뷰트
## 내부 슬롯과 내부 메서드
> 내부 슬롯 & 내부 메서드?          
자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript 사양에서 사용하는 **의사 프로퍼티와 의사 메서드**. (`[[ ]]`)          
          
자바스크립트 엔진의 내부 로직이며 실제로 동작하지만 직접적으로 접근하거나 호출하는 방법은 일부를 제외하고 제공하지 않는다.          
          
모든 객체는 내부 슬롯 `[[Prototype]]`을 갖는데 이 슬롯에 `__proto__`를 통해 **간접적으로 접근**이 가능하다.          
```js
const o = {};

o.[[Prototype]] // Uncaught SyntaxError
o.__proto__     // Object.prototype
```
          
## 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
자바스크립트 엔진은 **프로퍼티를 생성**할 때 프로퍼티의 상태를 나타내는 **프로퍼티 어트리뷰트를 기본값으로 자동 정의**한다.          
          
프로퍼티의 상태 (프로퍼티 어트리뷰트 = 내부 상태 값 = 내부 슬롯)          
- 프로퍼티의 값 ( [[Value]] )          
- 값의 갱신 가능 여부( [[Writable]] )          
- 열거 가능 여부 ( [[enumerable]] )          
- 재정의 가능 여부 ( [[configurable]] )          
          
프로퍼티의 상태는 모두 데이터 프로퍼티에 해당한다.          
```js
const person = {
  name: 'Minhee'
};
person.job = 'developer';

// 프로퍼티 디스크립터 객체를 반환하는 메서드들
console.log(Object.getOwnPropertyDescriptors(person));
/*
{
  name: {value: "Minhee", writable: true, enumerable: true, configurable: true},
  job: {value: "developer", writable: true, enumerable: true, configurable: true}
}
*/
console.log(Object.getOwnPropertyDescriptors(person, 'name'));
// {value: "Minhee", writable: true, enumerable: true, configurable: true}
```
## 데이터 프로퍼티와 접근자 프로퍼티
|데이터 프로퍼티|접근자 프로퍼티|          
|---|---|          
|키와 값으로 구성된 일반적인 프로퍼티|자체적인 값은 없지만 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티|          
#### 데이터 프로퍼티          
|프로퍼티 어트리뷰트|프로퍼티 디스크립터 객체의 프로퍼티|설명|          
|---|---|---|          
|[[Value]]|value|프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값이다.   프로퍼티가 없다면 프로퍼티를 동적 생성하고 생성된 프로퍼티의 [[Value]]에 값을 저장한다.|          
|[[Writable]]|writable|프로퍼티 값의 변경 가능 여부를 나타내며, false라면 값을 변경할 수 없는 읽기 전용 프로퍼티이다.|          
|[[Enumerable]]|enumerable|프로퍼티의 열거 가능 여부를 나타내며, false라면 `for...in`문이나 `Object.keys` 메서드 등으로 열거 불가능하다.|          
|[[Configurable]]|configurable|프로퍼티의 재정의 가능 여부를 나타내며, false라면 삭제나 값의 변경이 불가능하다. 단, [[Writable]]이 true라면 [[Value]] 변경과 [[Writable]]을 false로 변경하는 것은 허용된다.          
          
프로퍼티가 생성되거나 동적 추가될 때 **[[Value]] 값은 프로퍼티 값**으로 초기화되며 **[[Writable]], [[Enumerable]], [[Configurable]] 값은 true**로 초기화된다.          
#### 접근자 프로퍼티          
|프로퍼티 어트리뷰트| 프로퍼티 디스크립터 객체의 프로퍼티|설명|          
|---|---|---|          
|[[Get]]|get|접근자 프로퍼티로 값을 읽을 때 getter 함수가 호출되며 그 결과가 프로퍼티 값으로 반환된다.|          
|[[Set]]|set|접근자 프로퍼티로 값을 저장할 때 setter 함수가 호출되며 그 결과가 프로퍼티 값으로 저장된다.|          
|[[Enumerable]]|enumberable|= 데이터 프로퍼티의 [[Enumerable]]|          
|[[Configurable]]|configurable|=데이터 프로퍼티의 [[Configurable]]|          
접근자 프로퍼티와 데이터 프로퍼티 구분          
```js
// 일반 객체의 __proto__는 접근자 프로퍼티다.
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
// {get: f, set: f, enumerable: false, configurable: true}

// 함수 객체의 prototype은 데이터 프로퍼티다.
Object.getOwnPropertyDescriptor(function() {}, 'prototype');
// {value: {...}, writable: true, enumerable: false, configurable: false}
```
          
#### 프로토타입 &  프로토타입 체인          
**프로토타입**은 **어떤 객체의 상위 객체 역할을 하는 객체**이다.    
프로토타입 객체의 프로퍼티나 메서드를 상속받은 하위 객체는 자신의 것처럼 자유롭게 사용할 수 있다.          
          
**프로토타입 체인**은 **프로토타입이 단방향 링크드 리스트로 연결되어 있는 상속 구조**다.          
객체의 프로퍼티나 메서드에 접근할 때 해당 객체에 접근하려는 프로퍼티나 메서드가 없다면 프로토타입 체인을 따라 차례대로 검색해 찾는다.          
          
## 프로퍼티 정의
> **프로퍼티 정의**란           
① 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나,           
② 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의하는 것이다.          
          
객체의 참조, 데이터 프로퍼티의 키, 프로퍼티 디스크립터 객체를 인수로 전달해 `Object.defineProperty` 메서드로 프로퍼티 어트리뷰트를 정의할 수 있다.          
```js
const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
  value: 'Minhee',   // 생략 시 undefined
  writable: true,    // 생략 시 false
  enumerable: true,  // 생략 시 false
  configurable: true // 생략 시 false
});

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
  get() {            // 생략 시 undefined
    return `${this.firstName} ${this.lastName}`;
  },
  set(name) {        // 생략 시 undefined
    [this.firstName, this.lastName] = name.split(' ');
  },
  enumerable: true,  // 생략 시 false
  configurable: true // 생략 시 false
});

```
`Object.defineProperties`로 여러 개의 프로퍼티를 한 번에 정의할 수도 있다.          
```js
const person = {};

Object.defineProperties(person, {
  // 데이터 프로퍼티 정의
  firstName: {
    value: 'Minhee',   // 생략 시 undefined
    writable: true,    // 생략 시 false
    enumerable: true,  // 생략 시 false
    configurable: true // 생략 시 false
  },
  // 접근자 프로퍼티 정의
  fullName: {
    get() {            // 생략 시 undefined
      return `${this.firstName} ${this.lastName}`;
    },
    set(name) {        // 생략 시 undefined
      [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,  // 생략 시 false
    configurable: true // 생략 시 false
  }
});
```
          
## 객체 변경 방지
변경 가능한 값인 객체는 재할당 없이 직접 변경 가능하나, 자바스크립트는 객체의 변경을 방지하는 다양한 메서드를 제공한다.          
          
|구분|메서드|프로퍼티 추가|프로퍼티 삭제|프로퍼티 값 읽기|프로퍼티 값 쓰기|프로퍼티 어트리뷰터 재정의|          
|---|---|---|---|---|---|---|          
|객체 확장 금지|Object.preventExtensions|❌|⭕|⭕|⭕|⭕|          
|객체 밀봉|Object.seal|❌|❌|⭕|⭕|❌|          
|객체 동결|Object.freeze|❌|❌|⭕|❌|❌|          
#### 객체 확장 금지
`Object.preventExtentions` 메서드로 **프로퍼티 추가를 금지한다.**          
① 프로퍼티 동적 추가와 ② `Object.defineProperty` 추가 방법이 모두 금지된다.          
```js
const person = { name: 'Minhee' };
console.log(Object.isExtensible(person)); // true

Object.preventExtensions(person);
console.log(Object.isExtensible(person)); // false

person.developer = 'developer'; // 무시. strict mode에서 에러
console.log(person); // {name: "Minhee"}

delete person.name;
console.log(person); // {}

Object.defineProperty(person, 'job', {value: 'developer'});
// TypeError: Cannot define property job, object is not extensible
```
#### 객체 밀봉
`Object.seal` 메서드로 **읽기와 쓰기만 가능하게 밀봉한다.**          
① 프로퍼티 추가/삭제와 ② 프로퍼티 어트리뷰트 재정의를 금지한다.          
```js
const person = { name: 'Minhee' };
console.log(Object.isSealed(person)); // false

Object.seal(person);
console.log(Object.isSealed(person)); // true
console.log(Object.getOwnPropertyDescriptor(person, name));
// {value: "Minhee", writable: true, enumerable: true, configurable: false}

person.job = 'developer'; // 무시. strict mode에서 에러
delete person.name;       // 무시. strict mode에서 에러
console.log(person);      // {name: "Minhee"}

person.name = 'skdixm';
console.log(person); // {name: "skdixm"}

Object.defineProperty(person, 'name', { configurable: true });
// TypeError: Cannot redefine property: name

```
#### 객체 동결
`Object.freeze` 메서드로 **읽기만 가능하게 객체를 동결한다.**          
① 프로퍼티 추가/삭제와 ② 프로퍼티 어트리뷰트 재정의, ③ 프로퍼티 값 갱신을 금지한다.          
```js
const person = { name: 'Minhee' };
console.log(Object.isFrozen(person)); // false

Object.freeze(person);
console.log(Object.isFrozen(person)); // true
console.log(Object.getOwnPropertyDescriptor(person, name));
// {value: "Minhee", writable: false, enumerable: true, configurable: false}

person.job = 'developer'; // 무시. strict mode에서 에러
delete person.name;       // 무시. strict mode에서 에러
person.name = 'skdixm';   // 무시. strict mode에서 에러
console.log(person);      // {name: "Minhee"}

Object.defineProperty(person, 'name', { configurable: true });
// TypeError: Cannot redefine property: name
```

#### 불변 객체
위 메서드들은 얕은 변경 방지 방법이므로 중첩된 객체까지 동결할 수 없다.           
불변 객체를 구현하기 위해서는 객체를 값으로 갖는 모든 프로퍼티에서 재귀적으로 `Object.freeze`를 호출해야 한다.          
```js
unction deepFreeze(target) {
  if(target && typeof target === 'object' && !Object.isFrozen(target)) {
    Object.freeze(target);
    
    // 모든 프로퍼티 순회해 재귀적으로 동결
    Object.keys(target).forEach(key => deepFreeze(target[key]));
  }
  return target;
}

deepFreeze(객체);
```
