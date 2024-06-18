/* 4. 인터페이스 병합 */
// 가능하면 인터페이스 병합 사용 X <- 코드를 이해하기 어려워진다.
interface Merged {
    fromFirst: string;
}

interface Merged {
    fromSecond: number;
}

// 다음과 같음
// interface Merged {
//     fromFirst: string
//     fromSecond: number;
// }

// 외부 패키지 또는 Window처럼 내장된 전역 인터페이스 보강에는 유용하다.
interface Window {
    myEnvironmentVariable: string;
}
window.myEnvironmentVariable; // type: string

// 1. 이름이 충돌되는 멤버
// 병합 인터페이스는 타입이 다른 동일명 속성을 여러 번 선언할 수 없다.
interface MergedProperties {
    same: (input: boolean) => string;
    different: (input: string) => string;
}

// interface MergedProperties {
//     same: (input: boolean) => string // ok
//     different: (input: number) => string
//     // Subsequent property declarations must have the same type.  Property 'different' must be of type '(input: string) => string', but here has type '(input: number) => string'.
// }

// 그러나 동일명 + 다른 시그니처를 지닌 메서드는 정의할 수 있다.
// => 메서드에 대한 함수 오버로드 발생
interface MergedMethods {
    different(input: string): string;
}

interface MergedMethods {
    different(input: number): string; // ok
}
