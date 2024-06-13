/* 3. 인터페이스 확장 */

interface Writing {
    title: string;
}

interface Novella extends Writing {
    pages: number;
}

let myNovella: Novella = {
    pages: 195,
    title: "Ethan Frome",
};

// let missingPages:Novella = {
//     title: 'The Awakening'
// }
// Property 'pages' is missing in type '{ title: string; }' but required in type 'Novella'.

// let extraProperty: Novella = {
//     pages: 300,
//     strategy: 'baseline',
//     style: 'Naturalism'
// }
// Type '{ pages: number; strategy: string; style: string; }' is not assignable to type 'Novella'.
//   Object literal may only specify known properties, and 'strategy' does not exist in type 'Novella'.

// 1. 재정의된 속성
// 파생 인터페이스는 다른 타입으로 속성을 다시 선언해 기본 인터페이스의 속성을 재정의하거나 대체 가능하다.
interface WithNullableName {
    name: string | null;
}

interface WithNonNullableName extends WithNullableName {
    name: string;
}

// interface WithNumericName extends WithNullableName {
//     name: number | string
// }
// Interface 'WithNumericName' incorrectly extends interface 'WithNullableName'.
//   Types of property 'name' are incompatible.
//   Type 'string | number' is not assignable to type 'string | null'.
//     Type 'number' is not assignable to type 'string'.

// 2. 다중 인터페이스 확장
interface GivesNumber {
    giveNumber(): number;
}

interface GivesString {
    giveString(): string;
}

interface GivesBothAndEither extends GivesNumber, GivesString {
    giveEither(): number | string;
}

function useGivesBoth(instance: GivesBothAndEither) {
    instance.giveEither(); // type: string | number
    instance.giveNumber(); // type: number
    instance.giveString(); // type: string
}
