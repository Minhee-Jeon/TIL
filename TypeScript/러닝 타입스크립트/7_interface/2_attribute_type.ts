/* 2. 속성 타입 */
// 1. 선택적 속성
interface Book {
    author?: string;
    pages: number;
}

const ok: Book = {
    author: "Rita Dove",
    pages: 80,
};
const onlyPages: Book = {
    pages: 80,
};

// 2. 읽기 전용 속성
interface Page {
    readonly text: string;
}

function read(page: Page) {
    console.log(page.text); // 속성을 읽는 건 가능

    // page.text += '!'
    // Cannot assign to 'text' because it is a read-only property.
}

// pageIsh에 할당된 객체는 함수 내부에서 text로 명시적 사용 X -> 함수 밖에서 속성 수정 가능
const pageIsh = {
    text: "Hello, world!",
};

pageIsh.text += "!"; // pageIsh는 Page 객체가 아니라 text가 있는, 유추된 객체 타입

read(pageIsh); // pageIsh의 더 구체적인 버전인 Page를 읽는다.

// 3. 함수와 메서드
// 인터페이스 멤버를 함수로 선언하는 방법 - 1. 메서드 구문 / 2. 속성 구문
// 차이점
// - 메서드는 readonly 선언이 불가 / 속성은 가능
// - 인터페이스 병합은 메서드와 속성을 다르게 처리한다.
// - 타입에서 수행되는 일부 작업 (15.type_operate 참고)
interface HasBothFunctionTypes {
    property: () => string;
    method(): string;
}

const hasBoth: HasBothFunctionTypes = {
    property: () => "",
    method() {
        return "";
    },
};

hasBoth.property();
hasBoth.method();

// 추천 스타일 가이드
// - 기본 함수가 this를 참조할 수 있다면 일반적으로 클래스 인스턴스에서 사용되는 메서드 함수를 사용하자.
// - 반대의 경우라면 속성 함수를 사용하자.

// 4. 호출 시그니처
// 값을 함수처럼 호출하는 방식에 대한 타입 시스템 설명
type FunctionAlias = (input: string) => number;
interface CallSignature {
    (input: string): number;
}

const typeFunctionAlias: FunctionAlias = (input) => input.length; // type: FunctionAlias = (input: string) => number
const typeCallSignature: CallSignature = (input) => input.length; // type: FunctionAlias = (input: string) => number

interface FunctionWithCount {
    count: number;
    (): void;
}

let hasCallCount: FunctionWithCount;

function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 1;
    console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
}

keepsTrackOfCalls.count = 0;

hasCallCount = keepsTrackOfCalls; // ok

function doesNotHaveCount() {
    console.log("No idea!");
}

// hasCallCount = doesNotHaveCount
// Property 'count' is missing in type '() => void' but required in type 'FunctionWithCount'.

// 5. 인덱스 시그니처
// 인터페이스의 객체가 임의의 키를 받고, 해당 키 아래의 특정 타입을 반환할 수 있음을 나타낸다.
// 인터페이스 객체는 문자열 키를 일반적으로 사용한다. <- JS 객체 속성 조회는 암묵적으로 키를 문자열로 변환함
interface WordCounts {
    [i: string]: number;
}

const counts: WordCounts = {};

counts.apple = 0;
counts.banana = 1;

// counts.cherry = false
// Type 'boolean' is not assignable to type 'number'.

// 인덱스 시그니처는 객체에 값을 할당할 때 편리하나 타입 안정성을 완벽히 보장하지는 X
// 키/값 쌍 저장 시 키를 미리 알 수 없으면 Map을 사용하는 게 안전하다.
interface DatesByName {
    [i: string]: Date;
}

const publishDates: DatesByName = {
    Frankenstein: new Date("13 June 2024"),
};
publishDates.Frankenstein; // type: Date
console.log(publishDates.Frankenstein.toString()); // ok

publishDates.Beloved; // 타입은 Date이지만 런타임 값은 undefined
console.log(publishDates.Beloved.toString());
// 타입 시스템에서는 오류가 나지 않지만 실제 런타임에서는 오류 발생
// Runtime error: Cannot read property 'toString' of undefined (reading publishDates.Beloved)

// 속성과 인덱스 시그니처 혼합
interface HistoricalNovels {
    Oroonoko: number;
    [i: string]: number;
}

const novels: HistoricalNovels = {
    Outlander: 1991,
    Oroonoko: 1688,
};

// const missingOroonoko: HistoricalNovels = {
//     Outlander: 1991
// }
// Property 'Oroonoko' is missing in type '{ Outlander: number; }' but required in type 'HistoricalNovels'.

//

interface ChapterStarts {
    preface: 0;
    [i: string]: number;
}

const correctPreface: ChapterStarts = {
    preface: 0,
    night: 1,
    shopping: 5,
};

// const wrongPreface: ChapterStarts = {
//     preface: 1
// }
// Type '1' is not assignable to type '0'.

// 숫자 인덱스 시그니처
interface MoreNarrowNumbers {
    [i: number]: string;
    [i: string]: string | undefined;
}

const mixesNumbersAndStrings: MoreNarrowNumbers = {
    0: "",
    key1: "",
    key2: undefined,
};

// interface MoreNarrowStrings {
//     [i: number]: string | undefined;
//     [i: string]: string;
// }
// 'number' index type 'string | undefined' is not assignable to 'string' index type 'string'.

// 6. 중첩 인터페이스
interface Novel {
    author: {
        name: string;
    };
    setting: Setting;
}

interface Setting {
    place: string;
    year: number;
}

let myNovel: Novel = {
    author: {
        name: "Jane Austen",
    },
    setting: {
        place: "England",
        year: 1812,
    },
};

// myNovel = {
//     author: {
//         name: 'Emily Bronte',
//     },
//     setting: {
//         place: 'West Yorkshire'
//     }
//     // Property 'year' is missing in type '{ place: string; }' but required in type 'Setting'.
// }
