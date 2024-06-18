/* 1. 클래스 메서드 */
class Greeter {
    greet(name: string) {
        console.log(`${name}, do your stuff!`);
    }
}

new Greeter().greet("Miss Frizzle"); // ok

// new Greeter().greet()
// Expected 1 arguments, but got 0.

// 클래스 생성자는 매개변수와 관련해 전형적인 클래스 메서드처럼 취급된다.
class Greeted {
    constructor(message: string) {
        console.log(`As I always say: ${message}`);
    }
}

new Greeted("take chances, make mistakes, get messy");

// new Greeted()
// Expected 1 arguments, but got 0
