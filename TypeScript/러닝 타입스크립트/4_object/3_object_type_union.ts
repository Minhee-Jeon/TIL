/* 3. 타입 유니언 */
// 1. 유추된 객체 타입 유니언
const poem = Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7 }
    : { name: 'Her Kind', rhymes: true }

// 타입:
// {
//     name: string
//     pages: number
//     rhymes: undefined
// } | {
//     name: string
//     pages?.: undefined
//     rhymes: boolean
// }
poem.name // string
poem.pages // number | undefined
poem.rhymes // boolean | undefined

// 2. 명시된 객체 타입 유니언
type PoemWithPages = {
    name: string
    pages: number
}
type PoemWithRhymes = {
    name: string
    rhymes: boolean
}
type Poem = PoemWithPages | PoemWithRhymes

const poem_: Poem = Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7 }
    : { name: 'Her Kind', rhymes: true }

poem_.name // ok
// poem_.pages 
// Property 'pages' does not exist on type 'Poem'.
// Property 'pages' does not exist on type 'PoemWithRhymes'.

// poem_.rhymes
// Property 'rhymes' does not exist on type 'Poem'.
// Property 'rhymes' does not exist on type 'PoemWithPages'.

// 3. 객체 타입 내로잉
if ('pages' in poem_) { // (poem_.pages)로 접근 시 존재하지 않는 속성일 수 있어 타입 오류로 간주
    poem_.pages
} else {
    poem_.rhymes
}

// 4. 판별된 유니언
type PoemWithPages_ = {
    name: string
    pages: number
    type: 'pages'
}
type PoemWithRhymes_ = {
    name: string
    rhymes: boolean
    type: 'rhymes'
}
type Poem_ = PoemWithPages_ | PoemWithRhymes_

const poem__: Poem_ = Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7, type: 'pages' }
    : { name: 'Her Kind', rhymes: true, type: 'rhymes' }

if (poem__.type === 'pages') {
    console.log(poem__.pages)
} else {
    console.log(poem__.rhymes)
}

poem__.type // 'pages' | 'rhymes'
// poem__.pages
// Property 'pages' does not exist on type 'Poem_'.
// Property 'pages' does not exist on type 'PoemWithRhymes_'.