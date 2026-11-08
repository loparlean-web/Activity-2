class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log("Hello! My name is " + this.name);
        console.log("I am " + this.age + " years old.");
    }
}

let person1 = new Person("Sophia", 20);

person1.introduce();
