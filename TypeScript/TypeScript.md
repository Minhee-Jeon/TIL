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

// 배열
const fruits: string[] = ['Apple', 'Banana', 'Cherry']
const numbers: number[] = [1, 2, 3, 4, 5]
const union: (string|number)[] = ['Apple', 1, 'Banana', 2, 3]

// 객체
// typeof DATA === 'object'
const obj: object = {}
const arr: object = []
const func: object = function () {}

// 위와 같이 :object를 쓰면 효용성이 떨어지기 때문에 아래와 같이 사용한다.
interface Person {
    name: string
    age: number
    isWorking: boolean
}
const firstPerson: Person = {
  name: 'minhee',
  age: 30,
  isWorking: true
}
const secondPerson: Person = {
  name: 'Charlie',
  age: 92,
  isWorking: true
}

// 함수
const add = function(a: number, b: number): number {
  return a + b
}
const x: number = add(1, 2)

const hello = function (): void { // 함수에서 리턴되는 값이 없으면 undefined 대신 void를 쓴다.
  console.log('Hello world')
}
const comment: void = hello()

// Any => 타입스크립트를 쓰는 의미가 없어지므로 최대한 쓰지 않는다.
let hi: any = 'Hello world'
hi = 123
hi = false
hi = null
const any: any = hi
const bool: boolean = hi
const arr: string[] = hi
const obj: { x: string, y: number } = hi

// Unknown => 타입을 정확하게 알지 못하는 상황에서는 any 대신 unknown을 사용하자.
const unk: unknown = 123
const any: any = unk
const bool: boolean = unk // error
const arr: string[] = unk // error
const obj: { x: string, y: number } = unk // error

// Tuple
const tuple: [string, number, boolean] = ['a', 1, false]
const people: [number, string, boolean][]
  = [[1, 'Adam', true], [2, 'Bruce', false], [3, 'Chris', true]]

// never => 직접 사용할 일은 없으며, 에러메시지에서 never을 본다면 타입 지정이 잘못됐는지 확인하자.
const n: [] = [] // const n: [never] = []
n.push(3) // Argument of type 'number' is not assignable to parameter of type 'never'. 

// union
// 위와 아래의 의미는 다르다.
let union: string | number[]
let union: (string | number)[]

//intersection
interface User {
  name: string,
  age: number
}
interface Validation {
  isValid: boolean
}
const min: User & Validation = {
  name: 'Minhee',
  age: 30,
  isValid: true
}
```

## 타입 추론 (Inference)
개발자가 타입을 명시하지 않아도 타입스크립트가 알아서 타입 관리를 해주므로 꼭 필요한 곳에만 타입을 명시하여 가독성을 높일 수 있다.
```ts
// 1. 초기화된 변수
// 2. 기본값이 설정된 매개 변수
// 3. 반환 값이 있는 함수

let num = 123 // 이미 num은 number라고 타입 추론이 되어
num = 'hello world' // 다른 타입의 값을 할당하면 에러가 발생한다.

// 기본값이 지정된 매개 변수 b + 반환 값이 확실한 함수 add
function add(a: number, b: number = 2) {
  return a + b
}
```
