/* 1. 객체 타입 */
const poet = {
    born: 1935,
    name: 'Mary Oliver'
}

poet['born'] // number type
poet.name // string type
// poet.end // Property 'end' does not exist on type '{ born: number; name: string; }'

// 객체 타입 선언
let poetLater: {
    born: number
    name: string
}

poetLater = { born: 1935, name: 'Mary Oliver' } // OK
// poetLater = 'Sappho' // Type 'string' is not assignable to type '{ born: number; name: string; }'

//  별칭 객체 타입
type Poet = {
    born: number
    name: string
}

let poetLater_: Poet
poetLater_ = { born: 1935, name: 'Sara Teasdale' } // OK
// poetLater_ = 'Emily Dickinson' // Type 'string' is not assignable to type 'Poet'.