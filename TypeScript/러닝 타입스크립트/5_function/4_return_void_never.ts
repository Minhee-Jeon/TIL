/* 4. 그 외 반환 타입 */
// 1. void 반환 타입
// 아무것도 반환하지 않는 함수
function logSong_(song: string | undefined): void {
    if (!song) {
        return;
    }

    console.log(`${song}`);

    // return true;
    // Type 'boolean' is not assignable to type 'void'.
}

// JS 함수는 함수에서 값을 반환하지 않으면 undefined를 반환하나,
// TS에서 void는 함수의 반환 타입이 무시된다는 걸 의미하므로 반환되는 리터럴 값인 undefined와 차이점이 있다.
function returnsVoid() {
    return;
}

let lazyValue: string | undefined;

// lazyValue = returnsVoid();
// Type 'void' is not assignable to type 'string | undefined'.

const records: string[] = [];

function saveRecords(newRecords: string[]) {
    newRecords.forEach((record) => records.push(record));
}

saveRecords(["21", "Come on Over", "The Bodyguard"]);

// 2. never 반환 타입
// 의도적으로 항상 오류를 발생시키거나 무한 루프를 실행하는 함수
function fail(message: string): never {
    throw new Error(`Invariant failure: ${message}`);
}

function workWithUnsafeParam(param: unknown) {
    if (typeof param !== "string") {
        fail(`param should be a string, not ${typeof param}`);
    }

    param.toUpperCase();
}
