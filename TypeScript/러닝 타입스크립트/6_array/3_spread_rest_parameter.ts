/* 3. 스프레드와 나머지 매개변수 */
// 1. 스프레드
const soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"]; // type: string[]
const soldierAges = [90, 19, 45]; // type: number[]
const conjoined = [...soldiers, ...soldierAges]; // type: (string | number)[]

// 2. 나머지 매개변수 스프레드
function logWarriors(greeting: string, ...names: string[]) {
    for (const name of names) {
        console.log(`${greeting}, ${name}!`);
    }
}

const warriors_ = ["Caty Williams", "Lozen", "Nzinga"];
logWarriors("Hello", ...warriors_);

const birthYears = [1844, 1840, 1583];
// logWarriors("Born in", ...birthYears);
// Argument of type 'number' is not assignable to parameter of type 'string'.
