/* 3. 함수 타입 */
let nothingInGivesString: () => string;
let inputAndOutput: (songs: string[], count?: number) => number;

const songs = ["Juice", "Shake It Off", "What's Up"];

function runOnSongs(getSongAt: (index: number) => string) {
    for (let i = 0; i < songs.length; i++) {
        console.log(getSongAt(i));
    }
}
function getSongAt(index: number) {
    return `${songs[index]}`;
}
runOnSongs(getSongAt); // OK

function logSong(song: string) {
    return `${song}`;
}

// runOnSongs(logSong)
// Argument of type '(song: string) => string' is not assignable to parameter of type '(index: number) => string'.
//   Types of parameters 'song' and 'index' are incompatible.
//     Type 'number' is not assignable to type 'string'.

// 1. 함수 타입 괄호

// 타입: string | undefined 유니언을 반환하는 함수
let returnStringOrUndefined: () => string | undefined;
// 타입: undefined나 (string을 반환하는 함수)
let maybeReturnString: (() => string) | undefined;

// 2. 매개변수 타입 추론
let singer: (song: string) => string;

singer = function (song) {
    // song: string의 타입
    return `Singing: ${song.toUpperCase()}!`;
};

// 함수를 매개변수로 갖는 함수에 인수로 전달된 함수는 해당 매개변수 타입도 잘 유추한다.
const songs_ = ["Call Me", "Jolene", "The Chain"];

// song: string
// index: number
songs.forEach((song, index) => {
    console.log(`${song} is at index ${index}`);
});

// 3. 함수 타입 별칭
type StringToNumber = (input: string) => number;

let stringToNumber: StringToNumber;
stringToNumber = (input) => input.length;

// stringToNumber = (input) => input.toUpperCase()
// Type 'string' is not assignable to type 'number'.
