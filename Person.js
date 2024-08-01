// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const person1 = new Person('Alice', 30);
// const person2 = new Person('Bob', 25);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        console.log(this);
    }
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);