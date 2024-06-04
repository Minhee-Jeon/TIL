/* 2. 구조적 타이핑 */
// 타입스크립트의 구조적 타이핑은 자바스크립트의 덕 타이핑과 다르다.
// 구조적 타이핑: 정적 시스템이 타입을 검사
// 덕 타이핑: 런타임에서 사용될 때까지 객체 타입을 검사하지 X
type WithFirstName = {
    firstName: string
}
type WithLastName = {
    lastName: string
}
const hasBoth = {
    firstName: 'Lucille',
    lastName: 'Clifton'
}

let withFirstName: WithFirstName = hasBoth
let withLastName: WithLastName = hasBoth

// 1. 사용 검사
type FirstAndLastNames = {
    first: string
    last: string
}

const hasBoth_: FirstAndLastNames = {
    first: 'Sarojini',
    last: 'Naidu'
}

// const hasOnlyOne: FirstAndLastNames = {
//     first: 'Sappho'
// }
// Error: Property 'last' is missing in type '{ first: string; }' 
//        but required in type 'FirstAndLastNames'.

type TimeRange = {
    start: Date
}

// const hasStartString: TimeRange = {
//     start: '1879-02-13'
// }
// Error: Type 'string' is not assignable to type 'Date'.

// 2. 초과 속성 검사
type Poet = {
    born: number
    name: string
}

const poetMatch: Poet = {
    born: 1928,
    name: 'Maya Angelou'
}

// const extraProperty: Poet = {
//     activity: 'walking',
//     born: 1935,
//     name: 'May Oliver'
// }
// Error: Type '{ activity: string; born: number; name: string; }' is not assignable to type 'Poet'.
//   Object literal may only specify known properties, and 'activity' does not exist in type 'Poet'.

// 3. 중첩된 객체 타입
type Poem_2_1 = {
    author: {
        firstName: string
        lastName: string
    }
    name: string
}

const poemMatch_: Poem_2_1 = {
    author: {
        firstName: 'Sylvia',
        lastName: 'Plath'
    },
    name: 'Lady Lazarus'
}

// const poemMismatch: Poem = {
//     author: {
//         name: 'Sylvia Plath'
//     },
//     name: 'Tulips'
// }
// Type '{ name: string; }' is not assignable to type '{ firstName: string; lastName: string; }'.
//   Object literal may only specify known properties, and 'name' does not exist in type '{ firstName: string; lastName: string; }'.

// 중첩된 객체 타입을 고유한 타입 이름으로 바꿔 쓰면 코드와 오류 메시지 읽기가 더 수월해진다.
type Author = {
    firstName: string
    lastName: string
}
type Poem_2_2 = {
    author: Author
    name: string
}

// const poemMismatch: Poem_ = {
//     author: {
//         name: 'Sylvia Plath'
//     },
//     name: 'Tulips'
// }
// Type '{ name: string; }' is not assignable to type 'Author'.
//   Object literal may only specify known properties, and 'name' does not exist in type 'Author'.

// 4. 선택적 속성
type Book = {
    author?: string
    pages: number
}

const ok: Book = {
    pages: 80
}
// const missing: Book = {
//     author: 'Rita Dove'
// }
// Property 'pages' is missing in type '{ author: string; }' but required in type 'Book'.