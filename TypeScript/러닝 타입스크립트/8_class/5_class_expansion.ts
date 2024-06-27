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
