/* 2. 반환 타입 */

// 타입: (songs: string[]) => number
function singSongs(songs: string[]) {
    for (const song of songs) {
        console.log(`${song}`)
    }
    return songs.length
}

// 함수에 여러 개의 반환문이 있다면, TS는 모든 가능한 반환 타입의 조합을 유추한다.
// 타입: (songs: string[], index: number) => string | undefined
function getSongAt_(songs: string[], index: number) {
    return index < songs.length
        ? songs[index]
        : undefined
}

// 1. 명시적 반환 타입
// 함수에서 반환 타입을 명시적으로 선언하는 방식이 매우 유용한 경우
// - 반환값이 많은 함수가 항상 동일한 타입을 반환하도록 강제한다.
// - TS는 재귀 함수의 반환 타입을 통해 타입을 유추하는 것을 거부한다.
// - TS 파일이 매우 많은 대규모 프로젝트에서 TS 타입 검사 속도를 높일 수 있다.
function singSongsRecursive(songs: string[], count = 0): number {
    return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count
}

const singSongsRecursiveArrow = (songs: string[], count = 0): number =>
    songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count

function getSongRecordingDate(song: string):
    Date | undefined {
    switch (song) {
        case "Strange Fruit":
            return new Date("June 5, 2024")

        // case "Greenleeves":
        //     return "unknown"
        // Type 'string' is not assignable to type 'Date'.

        default:
            return undefined

    }
}