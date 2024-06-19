/* 2. 클래스 속성 */
// TS에서 클래스의 속성을 읽거나 쓰려면 클래스에 명시적으로 선언해야 한다.
class FieldTrip {
    destination: string;

    constructor(destination: string) {
        this.destination = destination; // ok
        console.log(`We're going to ${this.destination}`);

        // this.nonexistent = destination
        // Property 'nonexistent' does not exist on type 'FieldTrip'.
    }
}

const trip = new FieldTrip("planetarium");

this.destination; // ok

// trip.nonexistent
// Property 'nonexistent' does not exist on type 'FieldTrip'.

// 1. 함수 속성
// 메서드 접근 방식
// 함수를 클래스 프로토타입에 할당하므로 모든 클래스 인스턴스는 동일한 함수 정의를 사용
class WithMethod {
    myMethod() {}
}

new WithMethod().myMethod === new WithMethod().myMethod; // true

// 값이 함수인 속성 선언
// 클래스의 인스턴스당 새로운 함수가 생성됨. 항상 클래스 인스턴스를 가리켜야 하는 화살표 함수에서
// this 스코프를 사용하면 클래스 인스턴스당 새로운 함수를 생성하는 시간, 메모리 비용 측면에서 유용
class WithProperty {
    myProperty: () => {};
}

new WithMethod().myMethod === new WithProperty().myProperty; // false

// 2. 초기화 검사
class WithValue {
    immediate = 0; // ok
    later: number; // ok (constructor에서 할당)
    myBeUndefined: number | undefined; // ok (undefined가 되는 것이 허용됨)
    unused: number;
    // 엄격한 초기화 검사: Property 'unused' has no initializer and is not definitely assigned in the constructor.

    constructor() {
        this.later = 1;
    }
}

// 엄격한 초기화 검사가 수행되지 않으면 컴파일되나, 결과 JS는 런타임 시 문제가 발생한다.
class MissingInitializer {
    property: string;
}

new MissingInitializer().property.length;
// TypeError: Cannot read property 'length' of undefined

// 확실하게 할당된 속성
// 엄격한 초기화 검사를 적용하면 안 되는 속성에는 이름 뒤에 !를 추가해 검사를 비활성화
// => TS에 속성이 처음 사용되기 전 undefined 값이 할당된다.
class ActivitiesQueue {
    pending!: string[]; // ok

    initialize(pending: string[]) {
        this.pending = pending;
    }

    next() {
        return this.pending.pop();
    }
}

const activities = new ActivitiesQueue();

activities.initialize(["eat", "sleep", "learn"]);
activities.next();

// 3. 선택적 속성
class MissingInitializer_ {
    property?: string;
}

new MissingInitializer_().property?.length; // ok

// new MissingInitializer_().property.length;
// Object is possibly 'undefined'.

// 4. 읽기 전용 속성
class Quote {
    readonly text: string;

    constructor(text: string) {
        this.text = text;
    }

    emphasize() {
        // this.text += '!';
        // Cannot assign to 'text' because it is a read-only property.
    }
}

const quote = new Quote("There is a brilliant child locked inside every student.");
// Quote.text = 'Ha!'
// Property 'text' does not exist on type 'typeof Quote'.

// readonly로 선언된 속성은 더 넓은 원싯값이 아닌 값의 타입이 가능한 한 좁혀진 리터럴 타입으로 유추된다.
class RandomQuote {
    readonly explicit: string = "Home is the nicest word there is.";
    readonly implicit = "Home is the nicest word ther is.";

    constructor() {
        if (Math.random() > 0.5) {
            this.explicit = "We start learning the minute we are born."; // ok

            // this.implicit = 'We start learning the minute we are born.'
            // Type '"We start learning the minute we are born."' is not assignable to type '"Home is the nicest word ther is."'.
        }
    }
}

const randomQuote = new RandomQuote();

randomQuote.explicit; // type: string
randomQuote.implicit; // type: "Home is the nicest word ther is."
