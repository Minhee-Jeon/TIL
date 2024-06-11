/* 2. 속성 타입 */
// 1. 선택적 속성
interface Book {
    author?: string
    pages: number
}

const ok: Book = {
    author: 'Rita Dove',
    pages: 80
}
const onlyPages: Book = {
    pages: 80
}

// 2. 읽기 전용 속성
interface Page {
    readonly text: string
}

function read(page: Page) {
    console.log(page.text) // 속성을 읽는 건 가능

    // page.text += '!'
    // Cannot assign to 'text' because it is a read-only property.
}

// pageIsh에 할당된 객체는 함수 내부에서 text로 명시적 사용 X -> 함수 밖에서 속성 수정 가능
const pageIsh = {
    text: 'Hello, world!'
}

pageIsh.text += '!' // pageIsh는 Page 객체가 아니라 text가 있는, 유추된 객체 타입

read(pageIsh) // pageIsh의 더 구체적인 버전인 Page를 읽는다.

// 3. 함수와 메서드
// 인터페이스 멤버를 함수로 선언하는 방법 - 1. 메서드 구문 / 2. 속성 구문
// 차이점
// - 메서드는 readonly 선언이 불가 / 속성은 가능
// - 인터페이스 병합은 메서드와 속성을 다르게 처리한다.
// - 타입에서 수행되는 일부 작업 (15.type_operate 참고)
interface HasBothFunctionTypes {
    property: () => string
    method(): string
}

const hasBoth: HasBothFunctionTypes = {
    property: () => "",
    method() {
        return ""
    }
}

hasBoth.property()
hasBoth.method()

// 추천 스타일 가이드
// - 기본 함수가 this를 참조할 수 있다면 일반적으로 클래스 인스턴스에서 사용되는 메서드 함수를 사용하자.
// - 반대의 경우라면 속성 함수를 사용하자.

// 4. 호출 시그니처
// 값을 함수처럼 호출하는 방식에 대한 타입 시스템 설명
type FunctionAlias = (input: string) => number
interface CallSignature {
    (input: string): number
}

const typeFunctionAlias: FunctionAlias = (input) => input.length // type: FunctionAlias = (input: string) => number
const typeCallSignature: CallSignature = (input) => input.length // type: FunctionAlias = (input: string) => number



interface FunctionWithCount {
    count: number
    (): void
}

let hasCallCount: FunctionWithCount

function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 1
    console.log(`I've been called ${keepsTrackOfCalls.count} times!`)
}


// 5. 인덱스 시그니처