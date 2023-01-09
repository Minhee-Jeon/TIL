# TypeScript 개요   

- 2012년 마이크로소프트에서 발표했으며, JS 에 정적 타입 문법을 추가한 프로그래밍 언어           
- 정적 타입의 컴파일 언어             
- node나 브라우저 상에서 동작할 수는 없어 JS로 변환(컴파일)시켜야 한다.          
- JS와 완벽히 호환되며, 프론트엔드의 라이브러리 및 프레임워크에서 TS를 지원하며 권장된다.            

## 타입 종류
```ts
// 문자
let str: string
let strawberry: string = "Red"
let lemon: string = "Yellow"
let fruitColor: string = `Tomato's color is same as ${strawberry}.`

// 숫자
let num: number
let int: number = 1
let float: number = 1.234
let infinity: number = Infinity
let nan: number = NaN

// boolean
let isBoolean: boolean
let isChecked: boolean = false

// NULL / Undefined => type 지정이 비효율적이라서 '할 수 있긴 하다' 정도로만 알자.
let null_: null
let und_ = undefined
// console.log(null_) // Variable 'null_' is used before being assigned.
null_ = null
console.log(null_)
console.log(und_)
```
