// Parent Class
class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }

  introduce() {
    console.log(`Name: ${this.name}`);
    console.log(`Course: ${this.course}`);
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

// Child Class - Inheritance
class CollegeStudent extends Student {
  constructor(name, course, year) {
    super(name, course);
    this.year = year;
  }

  showYear() {
    console.log(`Year Level: ${this.year}`);
  }

  attendClass() {
    console.log(`${this.name} is attending class.`);
  }
}

// Create an object
const student1 = new CollegeStudent(
  "Lean Lopar",
  "BS Information Technology",
  "3rd Year"
);

// Call the 4 methods
student1.introduce();
student1.study();
student1.showYear();
student1.attendClass();