# 22. this
## this 키워드
메서드는 프로퍼티를 참조하고 변경할 수 있어야 하는데, 이 때 자신이 속한 객체의 프로퍼티를 참조하려면 **자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.**      
      
> **this**는 **자신이 속한 객체** 또는 **자신이 생성할 인스턴스**를 가리키는 **자기 참조 변수**다.      
this가 가리키는 값(=**this 바인딩**)은 **함수 호출 방식에 의해 동적으로 결정된다.**      
_cf) 클래스 기반 언어의 this는 언제나 클래스가 생성하는 인스턴스를 가리킨다._      
      
_바인딩: 식별자와 값을 연결하는 과정_      
      
`this`는 전역에서도 함수 내부에서도 참조할 수 있다.      
      
## 함수 호출 방식과 this 바인딩
함수의 상위 스코프를 결정하는 **렉시컬 스코프** : 함수 객체가 **생성**되는 시점에 결정      
this 바인딩 : 함수 **호출** 시점에 결정      
      
동일한 함수도 다양한 방식으로 호출할 수 있다. => this 바인딩이 다르게 이뤄질 수 있다.      
```js
// this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
const foo = function () { console.dir(this); };

// ① 일반 함수 호출 => window 또는 undefined
foo(); // window

// ② 메서드 호출 => 메서드를 호출한 객체
const obj = { foo };
obj.foo(); // obj

// ③ 생성자 함수 호출 => 생성자 함수가 생성한 인스턴스
new foo(); // foo {}

// ④ Function.prototype/apply/call/bind 메서드에 의한 간접 호출 => 인수에 의해 결정
const bar = { name: 'bar' };
foo.call(bar);   // bar
foo.apply(bar);  // bar
foo.bind(bar)(); // bar
```
#### 일반 함수 호출      
**일반 함수로 호출된 모든 함수(중첩 함수, 콜백 함수 포함) 내부의 this에는 전역 객체가 바인딩된다.**      
```js
var value = 1;
const obj = {
  value: 100,
  foo() {
    setTimeout(function () {
      console.log("callback's this: ", this); // window
      console.log("callback's this.value: ", this.value); // 1
    }, 100);
  }
};
obj.foo();
```

다만 this는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이므로 객체 생성을 하지 않는 일반 함수에서 의미가 없다. => strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다.      
      
외부 함수와 중첩/콜백 함수의 this가 일치하지 않는 것은 중첩/콜백 함수를 헬퍼 함수로 동작하기 어렵게 만든다.      
=> 메서드 내부의 중첩 함수나 콜백 함수의 this 바인딩과 일치시키기 위해 다음과 같이 하면 된다.      
```js
var value = 1;
const obj = {
  value: 100,
  foo() {
    const that = this; // this 바인딩(obj)을 that에 할당
    setTimeout(function () {
      console.log(that.value); // 100 (콜백함수 내부에서 this 대신 that 참조)
    }, 100);
  }
  
  // 혹은 Function.prototype.apply.apply call bind를 사용한다.
  foo() {
    setTimeout(function () {
      console.log(this.value);
    }.bind(this), 100);
  }

  // 또는 화살표 함수로 this 바인딩을 일치시킨다.
  foo() {
    setTimeout(() => console.log(this.value), 100); // 100
  }
};
obj.foo();
```
#### 메서드 호출
메서드 내부의 this는 ~~메서드를 소유한 객체~~가 아니라 **메서드를 호출한 객체**에 바인딩된다.      
      
아래 예에서 `getName` 프로퍼티가 가리키는 함수 객체는 독립적으로 존재하는 **별도의 객체**이다. (`person` 객체에 포함된 것이 아닌 `getName` 프로퍼티가 함수 객체를 가리키고 있을 뿐)      
=> 함수 객체는 다른 객체의 메서드가 될 수도, 일반 함수로 호출될 수도 있다.      
```js
const person = {
  name: 'Minhee',
  getName() {
    return this.name; // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩됨
  }
};

const anotherPerson = { name: 'skdixm' };
anotherPerson.getName = person.getName;
console.log(anotherPerson.getName()); // skdixm

const getName = person.getName;
console.log(getName()); // 일반 함수로 호출된 getName 내의 this.name === window.name

// 프로토타입 메서드 내부에서 사용된 this도 해당 메서드를 호출한 객체에 바인딩됨
Person.prototype.getName = function () { return this.name; };
const me = new Person('minisss');
console.log(me.getName()); // minisss

Person.prototype.name = 'protoName';
console.log(Person.prototype.getName(); // protoName
```

#### 생성자 함수 호출
생성자 함수 내부의 this에는 (미래에) 생성할 인스턴스가 바인딩된다.      
단, `new` 연산자와 함께 생성자 함수를 호출하지 않으면 일반 함수로 동작한다.      
      
#### Function.prototype.apply/call/bind 메서드에 의한 간접 호출
세 메서드 모두 Function.prototype 의 메서드이므로 모든 함수가 상속받아 사용 가능하다.      
      
`apply`와 `call`의 본질적 기능은 함수를 호출하는 것이다.      
이 둘은 호출할 함수에 인수를 전달하는 방식만 다르고 동일하게 동작한다.      
```js
function getThisBinding() {
  console.log(arguments);
  return this;
}

const thisArg = { a: 1 };

// getThisBinding 함수를 호출하면서 인수로 전달할 객체를 getThisBinding 함수의 this에 바인딩
// apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달한다.
console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
// call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.
console.log(getThisBinding.call(thisArg, 1, 2, 3));
// Arguments{3} [1, 2, 3, callee: f, Symbol(Symbol.iterator): f]
// {a: 1}

```
두 메서드의 대표적인 용도는 유사 배열 객체에 배열 메서드를 사용하는 경우다.      
```js
const arr = Array.prototype.slice.call(arguments);
```
      
`bind`는 메서드의 this와 메서드 내부의 중첩함수/콜백함수의 this가 불일치하는 문제를 해결하기 위해 유용하게 사용한다.      
```js
const person = {
  name: 'Minhee',
  foo(callback) {
    // setTimeout(callback, 100);         // Hi! My name is .
    setTimeout(callback.bind(this), 100); // Hi! My name is Minhee.
  }
};

person.foo(function () {
  console.log(`Hi! My name is ${this.name}.`);
});
```
