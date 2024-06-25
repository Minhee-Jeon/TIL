/* 4. 클래스와 인터페이스 */
// 클래스 이름 뒤에 implements 키워드와 인터페이스명을 추가해
// 클래스의 해당 인스턴스가 인터페이스를 준수한다고 선언할 수 있다.
interface Learner {
    name: string;
    study(hours: number): void;
}

class Student implements Learner {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    study(hours: number) {
        for (let i = 0; i < hours; i += 1) {
            console.log("...studying...");
        }
    }
}

// class Slacker implements Learner {}
//     Class 'Slacker' incorrectly implements interface 'Learner'.
//   Type 'Slacker' is missing the following properties from type 'Learner': name, study

class Student_ implements Learner {
    name;
    // Member 'name' implicitly has an 'any' type, but a better type may be inferred from usage.

    study(hours) {}
}

// 1. 다중 인터페이스 구현
interface Graded {
    grades: number[];
}

interface Reporter {
    report: () => string;
}

class ReportCard implements Graded, Reporter {
    grades: number[];

    constructor(grades: number[]) {
        this.grades = grades;
    }

    report() {
        return this.grades.join(", ");
    }
}

// class Empty implements Graded, Reporter { }
// Class 'Empty' incorrectly implements interface 'Graded'.
//   Property 'grades' is missing in type 'Empty' but required in type 'Graded'.
// Class 'Empty' incorrectly implements interface 'Reporter'.
//   Property 'report' is missing in type 'Empty' but required in type 'Reporter'.

// 두 충돌하는 인터페이스를 구현하는 클래스를 선언하려고 하면 클래스에
// 한 개 이상의 타입 오류가 발생한다.
interface AgeIsANumber {
    age: number;
}

interface AgeIsNotANumber {
    age: () => string;
}

// class AsNumber implements AgeIsANumber, AgeIsNotANumber {
//     age = 0
// }
//     Property 'age' in type 'AsNumber' is not assignable to the same property in base type 'AgeIsNotANumber'.
//   Type 'number' is not assignable to type '() => string'.

// class NotAsNumber implements AgeIsANumber, AgeIsNotANumber {
//     age() { return ''}
// }
//     Property 'age' in type 'NotAsNumber' is not assignable to the same property in base type 'AgeIsANumber'.
//   Type '() => string' is not assignable to type 'number'.
