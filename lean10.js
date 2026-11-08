class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hello, I am " + this.name);
    }
}

class Student extends Person {
    study() {
        console.log(this.name + " is studying JavaScript.");
    }
}

let student1 = new Student("Sophia");

student1.sayHello();
student1.study();
