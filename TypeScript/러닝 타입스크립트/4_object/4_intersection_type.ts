/* 4. 교차 타입 */
// 교차 타입은 일반적으로 여러 기존 객체 타입을
// 별칭 객체 타입으로 '&'로 결합해 새로운 타입을 생성한다.
type Artwork = {
    genre: string
    name: string
}
type Writing = {
    pages: number
    name: string
}

type WrittenArt = Artwork & Writing
// 다음과 같음
// {
//     genre: string
//     name: string
//     pages: number
// }

type ShortPoem = { author: string } & (
    | { kigo: string; type: 'haiku' }
    | { meter: number; type: 'villanelle' }
)

const morningGlory: ShortPoem = {
    author: 'Fukuda Chiyo-ni',
    kigo: 'Morning Glory',
    type: 'haiku'
}

// const oneArt: ShortPoem = {
//     author: 'Elizabeth Bishop',
//     type: 'villanelle'
// }
// Type '{ author: string; type: "villanelle"; }' is not assignable to type 'ShortPoem'.
//  Type '{ author: string; type: "villanelle"; }' is not assignable to type '{ author: string; } & { meter: number; type: "villanelle"; }'.
//   Property 'meter' is missing in type '{ author: string; type: "villanelle"; }' but required in type '{ meter: number; type: "villanelle"; }'.

// 1. 교차 타입의 위험성
// 긴 할당 가능성 오류: 타입이 복잡해질수록 타입 검사기 메시지를 이해하기가 어려워진다.
type ShortPeomBase = { author: string }
type Haiku = ShortPeomBase & { kigo: string; type: 'haiku' }
type villanelle = ShortPeomBase & { meter: number; type: 'villanelle' }
type ShortPoem_ = Haiku | villanelle

// const oneArt: ShortPoem_ = {
//     author: 'Elizabeth Bishop',
//     type: 'villanelle'
// }
// Type '{ author: string; type: "villanelle"; }' is not assignable to type 'ShortPoem_'.
//   Type '{ author: string; type: "villanelle"; }' is not assignable to type 'villanelle'.
//     Property 'meter' is missing in type '{ author: string; type: "villanelle"; }' but required in type '{ meter: number; type: "villanelle"; }'.

// never: 교차 타입은 잘못 사용하기 쉽고 불가능한 타입을 생성한다.
type NotPossible = number & string // type: never

// let notNumber: NotPossible = 0
// // Type 'number' is not assignable to type 'never'.
// let notString: never = ''
// // Type 'string' is not assignable to type 'never'.