/* 1. 배열 타입 */
// TS는 초기 배열의 데이터 타입을 기억하고, 배열의 데이터 타입을 하나로 제한/유지시킨다.
// JS 예시
const jsElements = [true, null, undefined, 42];
// jsElements.push("even", ["more"]);
// jsElements의 값: [true, null, undefined, 42, "even", ["more"]]

// TS 예시
const warriors = ["Artemisia", "Boudica"];

warriors.push("Zenobia");
// warriors.push(true)
// Argument of type 'boolean' is not assignable to parameter of type 'string'.

// 배열을 저장할 변수는 초깃값 필요 X. 변수는 undefined로 시작해 나중에 배열 값을 받기 가능
let arrayOfNumbers: number[];
arrayOfNumbers = [4, 8, 15, 16, 23, 42];

// 1. 배열과 함수 타입
let createStrings: () => string[];
let stringCreators: (() => string)[];

// 2. 유니언 타입 배열
let stringOrArrayOfNumbers: string | number[];
let arrayOfStringOrNumbers: (string | number)[];

const namesMaybe = ["Aquatune", "Blenda", undefined]; // type: (string | undefined)[]

// 3. any 배열의 진화
// 초기에 any[]로 시작해 타입을 확장한다고 하나 이제 never[]로 초기화되는 것 같다.
let values = []; // type: 책에선 any[]라지만 never[]로 찍힘
// values.push(""); // type: string[]이라지만 Argument of type 'string' is not assignable to parameter of type 'never'. 에러 찍힘
// values[0] = 0; // type: (number | string)[]이라지만 Type 'number' is not assignable to type 'never'. 에러가 찍힘

// 4. 다차원 배열
let arrayOfArraysOfNumbers: number[][];

arrayOfArraysOfNumbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
