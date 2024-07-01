/* 5. 클래스 확장 */
class Teacher_ {
    teach() {
        console.log("The surest test of discipline is its absence.");
    }
}

class StudentTeacher extends Teacher_ {
    learn() {
        console.log("I cannot afford the luxury of a closed mind.");
    }
}

const teacher_ = new StudentTeacher();
teacher_.teach(); // ok(기본 클래스에 정의됨)
teacher_.learn(); // ok(하위 클래스에 정의됨)

// teacher_.other()
// Property 'other' does not exist on type 'StudentTeacher'.

// 1. 할당 가능성 확장
// 파생 인터페이스가 기본 인터페이스를 확장하는 것과 마찬가지로 하위 클래스도 기본 클래스의 멤버를 상속한다.
class Lesson {
    subject: string;

    constructor(subject: string) {
        this.subject = subject;
    }
}

class OnlineLesson extends Lesson {
    url: string;

    constructor(subject: string, url: string) {
        super(subject);
        this.url = url;
    }
}

let lesson: Lesson;
lesson = new Lesson("coding"); // ok
lesson = new OnlineLesson("coding", "oreilly.com"); // ok

let online: OnlineLesson;
online = new OnlineLesson("coding", "oreilly.com"); // ok
// online = new Lesson('coding')
// Property 'url' is missing in type 'Lesson' but required in type 'OnlineLesson'.

// TS의 구조적 타입에 따라 하위 클래스의 모든 멤버가 동일 타입의 기본 클래스에 이미 존재하는 경우
// 기본 클래스의 인스턴스를 하위 클래스 대신 사용할 수 있다.
class PastGrades {
    grades: number[] = [];
}

class LabeledPastGrades extends PastGrades {
    label?: string;
}

let subClass: LabeledPastGrades;

subClass = new LabeledPastGrades(); // ok
subClass = new PastGrades(); // ok

// 2. 재정의된 생성자
// JS에서 하위 클래스가 자체 생성자를 선언하면 super를 통해 기본 클래스 생성자를 호출해야 한다.
class GradeAnnouncer {
    message: string;

    constructor(grade: number) {
        this.message = grade >= 65 ? 'Maybe next time...' : 'You pass!'
    }
}

class PassingAnnouncer extends GradeAnnouncer {
    constructor() {
        super(100)
    }
}

class FailingAnnouncer extends GradeAnnouncer {
    // constructor() { }
    // Constructors for derived classes must contain a 'super' call.
}

// JS 규칙: 하위 클래스의 생성자는 this 또는 super에 접근하기 전에 반드시 기본 클래스의 생성자를 호출해야 한다.
class GradesTally {
    grades: number[] = []

    addGrades(...grades: number[]) {
        this.grades.push(...grades)
        return this.grades.length
    }
}

class ContinuedGradesTally extends GradesTally {
    constructor(previousGrades: number[]) {
        // this.grades =[...previousGrades]
        // 'super' must be called before accessing 'this' in the constructor of a derived class.

        super()

        console.log('Starting with length', this.grades.length)
    }
}

// 3. 재정의된 메서드
// 하위 클래스의 메서드가 기본 클래스의 메서드에 할당될 수 있는 한 하위 클래스는
// 기본 클래스와 동일한 이름으로 새 메서드를 다시 선언할 수 있다.
class GradeCounter {
    countGrades(grades: string[], letter: string) {
        return grades.filter(grade => grade === letter).length
    }
}

class FailureCounter extends GradeCounter {
    countGrades(grades: string[]) {
        return super.countGrades(grades, 'F')
    }
}

class AnyFailureChecker extends GradeCounter {
    countGrades(grades: string[]) {
        // Property 'countGrades' in type 'AnyFailureChecker' is not assignable to the same property in base type 'GradeCounter'.
        //     Type '(grades: string[]) => boolean' is not assignable to type '(grades: string[], letter: string) => number'.
        //         Type 'boolean' is not assignable to type 'number'.
        return super.countGrades(grades, 'F') !== 0
    }
}

const counter: GradeCounter = new AnyFailureChecker()

// 예상 타입: number / 실제 타입: boolean
const count = counter.countGrades(['A', 'C', 'F'], 'F')

// 4. 재정의된 속성