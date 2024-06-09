/* 2. 배열 멤버 */
const defenders = ["Clarenza", "Dina"];
const defender = defenders[0]; // type: string

const soldiersOrDates = ["Deborah Sampson", new Date(1782, 6, 3)];
const soldiersOrDate = soldiersOrDates[0]; // type: string | Date

// 1. 주의 사항: 불안정한 멤버
// TS는 검색된 배열의 멤버가 존재하는지 의도적으로 확인하지 않으며
// 다음 코드에서 elements[9001]은 undefined가 아니라 string 타입으로 간주된다.
function withElements(elements: string[]) {
    console.log(elements[9001].length); // 타입 오류 없음
}

withElements(["It's", "over"]);
