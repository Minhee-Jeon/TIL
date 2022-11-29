# 41. 타이머
## 호출 스케줄링
> 함수를 명시적으로 호출하지 않고 일정시간이 경과된 이후에 호출되도록 함수 호출을 예약하려면 타이머 함수를 사용한다.           
          
타이머 함수는 ECMAScript 사양에 정의된 빌트인 함수가 아니라 브라우저 환경이나 Node.js 환경에서 제공하는 호스트 객체다.          
          
자바스크립트 엔진은 단 하나의 실행 컨텍스트를 가지고 **싱글 스레드**로 동작하기 때문에 타이머 함수는 **비동기 처리 방식**으로 동작한다.          
          
## 타이머 함수
#### setTimeout / clearTimeout
`setTimeout`의 첫 번째 인수인 콜백 함수는 두 번째 인수로 전달받은 시간 이후 단 한번 실행되도록 호출 스케줄링된다.          
- 두 번째 인수가 4ms 이하라면 최소 지연 시간 4ms가 지정된다.          
- 두 번째 인수 생략 시 기본값은 0          
- 호출 스케줄링된 콜백 함수에 전달해야 할 인수가 있다면 세 번째 이후의 인수로 전달할 수 있다 (IE9 이상)          
```js
setTimeout(() => console.log('Hi!'), 1000);
setTimeout(name => console.log(`Hi! ${name}.`), 1000, 'Minhee');
```
          
`setTimeout`은 생성된 타이머를 식별하는 고유 id를 반환한다.          
(브라우저: 숫자 / Node.js: 객체)          
`clearTimeout`은 타이머 id를 인수로 받아 호출 스케줄링을 취소한다.          
```js
const timerId = setTimeout(() => console.log('Hi!'), 1000);
clearTimeout(timerId);
```
          
          
#### setInterval / clearInterval
`setInterval`은 두 번째 인수로 전달받은 시간이 경과할 때마다 **반복 실행**되도록 호출 스케줄링되며, 인수는 `setTimeout`과 동일하다.          
`clearInterval` 또한 `setInterval`이 반환한 타이머 id를 인수로 받아 호출 스케줄링을 취소한다.          
```js
let count = 1;
const timeoutId = setInterval(() => {
  console.log(count);
  if (count++ === 5) clearInterval(timeoutId);
}, 1000);
```
## 디바운스와 스로틀

#### 디바운스

#### 스로틀
