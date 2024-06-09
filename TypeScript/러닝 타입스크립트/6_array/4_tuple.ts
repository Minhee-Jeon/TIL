/* 4. 튜플: 고정된 크기의 배열 */
// 유니언 타입보다 구체적이며, 각 인덱스에 특정 타입을 가진다.
let yearAndWarrior: [number, string];

yearAndWarrior = [530, "Tomyris"];
// yearAndWarrior = [false, "Tomyris"];
// Type 'boolean' is not assignable to type 'number'.

// yearAndWarrior = [530];
// Type '[number]' is not assignable to type '[number, string]'.
//   Source has 1 element(s) but target requires 2.

// 1. 튜플 할당 가능성
// 가변 길이의 배열 타입은 튜플 타입에 할당할 수 없다.
const pairLoose = [false, 123]; // type: (number | boolean)[]

//const pairTupleLoose: [boolean, number] = pairLoose;
// Type '(number | boolean)[]' is not assignable to type '[boolean, number]'.
//   Target requires 2 element(s) but source may have fewer.

// 길이가 다른 튜플도 서로 할당할 수 없다.
const tupleThree: [boolean, number, string] = [false, 1583, "Nzinga"];
const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]];

// const tupleTwoExtra: [boolean, number] = tupleThree;
// Type '[boolean, number, string]' is not assignable to type '[boolean, number]'.
//   Source has 3 element(s) but target allows only 2.

// 나머지 매개변수로서의 튜플
// 튜플이 구체적인 길이와 요소 타입 정보를 가진 배열로 간주됨
// => 함수에 전달할 인수를 저장하는 데 특히 유용하다.
function logPair(name: string, value: number) {
    console.log(`${name} has ${value}`);
}

const pairArray = ["Amage", 1];
// logPair(...pairArray);
// A spread argument must either have a tuple type or be passed to a rest parameter.

const pairTupleIncorrect: [number, string] = [1, "Amage"];
// logPair(...pairTupleIncorrect);
// Argument of type 'number' is not assignable to parameter of type 'string'.

const pairTupleCorrect: [string, number] = ["Amage", 1];
logPair(...pairTupleCorrect);

// 나머지 매개변수 튜플을 쓰려면
// 함수를 여러 번 호출하는 인수 목록을 배열에 저장해 함께 사용 가능하다.
function logTrio(name: string, value: [number, boolean]) {
    console.log(`${name} has ${value[0]} (${value[1]})`);
}

const trios: [string, [number, boolean]][] = [
    ["Amanitore", [1, true]],
    ["Ann E. Dunwoody", [2, false]],
];

trios.forEach((trio) => logTrio(...trio));
// trios.forEach(logTrio);
// Argument of type '(name: string, value: [number, boolean]) => void' is not assignable to parameter of type '(value: [string, [number, boolean]], index: number, array: [string, [number, boolean]][]) => void'.
//   Types of parameters 'name' and 'value' are incompatible.
//     Type '[string, [number, boolean]]' is not assignable to type 'string'.

// 2. 튜플 추론
// TS는 생성된 배열을 튜플이 아닌 가변 길이의 배열로 취급한다.

// 반환 타입: (string | number)[]
function firstCharAndSize(input: string) {
    return [input[0], input.length];
}

// firstChar 타입: string | number
// size 타입: string | number
const [firstChar, size] = firstCharAndSize("Gudit");

// TS에서 값에 일반 배열 타입 대신 구체적인 튜플 타입이어야 함을 다음 두 방법으로 나타낸다.
// 2-1. 명시적 튜플 타입
// : 코드 변경에 따라 작성/수정이 필요한 구문 추가가 필요하다.

// 반환 타입: [string, number]
function firstCharAndSizeExplicit(input: string): [string, number] {
    return [input[0], input.length];
}

// firstCharExplicit 타입: string
// sizeExplicit 타입: number
const [firstCharExplicit, sizeExplicit] = firstCharAndSizeExplicit("Cathay Williams");

// 2-2. const 어서션
// : TS에 타입을 유추할 때 read-only가 가능한 값 형식을 사용하도록 지시한다.
const unionArray = [1157, "Tomoe"]; // type: (string | number)[]
const readonlyTuple = [1157, "Tomoe"] as const; // type: readonly [1157, "Tomoe"]

// 명시적 튜플 타입은 수정 가능하나,
// as const는 새 값을 할당하지 못하게 하며 상수의 멤버는 수정을 허용하지 않는다.
const pairMutable: [number, string] = [1157, "Tomoe"];
pairMutable[0] = 1247;

// const pairAlsoMutable: [number, string] = [1157, "Tomoe"] as const;
// The type 'readonly [1157, "Tomoe"]' is 'readonly' and cannot be assigned to the mutable type '[number, string]'.

const pairConst = [1157, "Tomoe"] as const;
// pairConst[0] = 1247;
// Cannot assign to '0' because it is a read-only property.

// 읽기 전용 튜플은 함수 반환에 편리하다. <- 리턴된 튜플에서 값만 찾으면 되므로
// readonly [string, number]
function firstCharAndSizeAsConst(input: string) {
    return [input[0], input.length] as const;
}

// firstCharAsConst 타입: string
// sizeAsConst 타입: number
const [firstCharAsConst, sizeAsConst] = firstCharAndSizeAsConst("Ching Shih");
