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