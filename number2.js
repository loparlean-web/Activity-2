// Array 1
const students = ["Lean", "John", "Maria"];

// Array 2
const grades = [85, 90, 88];

// Arrow Function 1
const showStudents = students.map((student) => {
  return `Student: ${student}`;
});

// Arrow Function 2
const showGrades = grades.map((grade) => {
  return `Grade: ${grade}`;
});

// Arrow Function 3
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Display results
console.log(showStudents);
console.log(showGrades);
console.log(greet("Lean"));