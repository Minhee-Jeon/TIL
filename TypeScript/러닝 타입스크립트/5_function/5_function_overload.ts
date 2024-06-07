/* 5. 함수 오버로드 */
// 복잡하고 설명하기 어려운 함수 타입에 사용하는 *최후의 수단*이다.
// 함수를 단순하게 유지하고, 가능하면 함수 오버로드를 쓰지 말자.
function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(monthOrTimestamp: number, day?: number, year?: number) {
    return day === undefined || year === undefined ? new Date(monthOrTimestamp) : new Date(year, monthOrTimestamp, day);
}

createDate(554356800);
createDate(7, 27, 1987);

// createDate(4, 1);
// No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.

// 위의 createDate는 아래 JS 구문으로 컴파일된다.
function createDate_(monthOrTimestamp, day, year) {
    return day === undefined || year === undefined ? new Date(monthOrTimestamp) : new Date(year, monthOrTimestamp, day);
}

// 1. 호출 시그니처 호환성
// 구현 시그니처는 모든 오버로드 시그니처와 호환되어야 한다.
function format(data: string): string;
function format(data: string, needle: string, haystack: string): string;

// function format(getData: () => string): string;
// This overload signature is not compatible with its implementation signature.

function format(data: string, needle?: string, haystack?: string) {
    return needle && haystack ? data.replace(needle, haystack) : data;
}
