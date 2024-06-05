/* 1. 함수 매개변수 */
// 1. 필수 매개변수
function singTwo(first: string, second: string) {
    console.log(`${first} / ${second}`)
}

singTwo("I Will Survive", "Higher Love")

// singTwo("Ball and Chain")
// Expected 2 arguments, but got 1.

// singTwo("Go Your Own Way", "The Chain", "Dreams") // Logs: "Go Your Own Way / The Chain"
// Expected 2 arguments, but got 3.

// 2. 선택적 매개변수
// 선택적 매개변수는 | undefined를 포함하는 유니언 타입 매개변수(undefined라도 항상 제공되어야 함)
// 와는 다르게 항상 제공되지 않아도 된다.
// 모든 선택적 매개변수는 마지막 매개변수여야 한다.
function announceSong(song: string, singer?: string) {
    console.log(`Song: ${song}`)

    if (singer) {
        console.log(`Singer: ${singer}`)
    }
}

announceSong("Greensleeves")
announceSong("GreenSleeves", undefined)
announceSong("Chandelier", "Sia")

// 3. 기본 매개변수
// rating은 기본적으로 number 타입으로 유추되나 number | undefined가 되기도 한다.
function rateSong(song: string, rating = 0) {
    console.log(`${song} gets ${rating}/5 stars!`)
}

rateSong("Photograph")
rateSong("Set Fire to the Rain", 5)
rateSong("Set Fire to the Rain", undefined)

// rateSong("At Last!", "100")
// Argument of type 'string' is not assignable to parameter of type 'number'.

// 4. 나머지 매개변수
// ... 연산자는 함수 선언 마지막 매개변수에 위치하며, 해당 매개변수에서 시작해
// 함수에 전달된 '나머지' 인수가 모두 단일 배열에 저장되어야 함을 나타낸다.
function singAllTheSongs(singer: string, ...songs: string[]) {
    for (const song of songs) {
        console.log(`${song}, by ${singer}`)
    }
}

singAllTheSongs("Alicia Keys")
singAllTheSongs("Lady Gaga", "Bad Romance", "Poker Face", "Born This Way")

// singAllTheSongs("Ella Fitzgerald", 2000)
// Argument of type 'number' is not assignable to parameter of type 'string'.