/* 3. 함수 타입 */
let nothingInGivesString: () => string
let inputAndOutput: (songs: string[], count?: number) => number

const songs = ["Juice", "Shake It Off", "What's Up"]

function runOnSongs(getSongAt: (index: number) => string) {
    for (let i = 0; i < songs.length; i++) {
        console.log(getSongAt(i))
    }
}
function getSongAt(index: number) {
    return `${songs[index]}`
}
runOnSongs(getSongAt) // OK

function logSong(song: string) {
    return `${song}`
}

// runOnSongs(logSong)
// Argument of type '(song: string) => string' is not assignable to parameter of type '(index: number) => string'.
//   Types of parameters 'song' and 'index' are incompatible.
//     Type 'number' is not assignable to type 'string'.

// 1. 함수 타입 괄호
// 타입: string | undefined 유니언을 반환하는 함수
let returnStringOrUndefined: () => string | undefined
// 타입: undefined나 (string을 반환하는 함수)
let maybeReturnString: (() => string) | undefined

// 2. 매개변수 타입 추론