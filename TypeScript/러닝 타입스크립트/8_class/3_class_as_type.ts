/* 3. 타입으로서의 클래스 */

class Teacher {
    sayHello() {
        console.log("Take chances, make mistakes, get messy!");
    }
}

let teacher: Teacher;
teacher = new Teacher(); // ok

// teacher = 'Wahoo!'
// Type 'string' is not assignable to type 'Teacher'.

// TS는 클래스의 동일한 멤버를 모두 포함하는 모든 객체 타입을 클래스에 할당할 수 있는 것으로 간주한다.
// <= TS의 구조적 타이핑이 선언되는 방식이 아니라 객체의 형태만 고려하기 때문
class SchoolBus {
    getAbilities() {
        return ["magic", "shapeshifting"];
    }
}

function withSchoolBus(bus: SchoolBus) {
    console.log(bus.getAbilities());
}

withSchoolBus(new SchoolBus()); // ok

withSchoolBus({
    getAbilities: () => ["transmogrification"],
}); // ok

// withSchoolBus({
//     getAbilities: () => 123,
// })
// Type 'number' is not assignable to type 'string[]'.
