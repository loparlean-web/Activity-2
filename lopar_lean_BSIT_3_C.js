// ===============================
// STUDENT BASIC INFORMATION
// ===============================

// let variables can be changed later
let name = "Lean Lopar";
let age = 20;
let course = "BS Information Technology";
let year = "3rd Year";
let section = "3C";

// Student grades
let Gender_and_Society = 74;
let Networking = 75;
let IPT = 75;
let programming = 70;
let Professional_Elective_1 = 75;

// Attendance percentage
let attendance = 70;


// ===============================
// CONSTANT INFORMATION
// ===============================

// const values cannot be changed
const school = "NorthWest Samar State University";
const studentID = "2024-333-1";
const semester = "First Semester";
const teacher = "Mr. Ortiz";

// Passing grade and maximum grade
const passingGrade = 75;
const maxGrade = 100;

// Array containing subject names
const subjects = [
    "Gender_and_Society",
    "Networking",
    "IPT",
    "Programming",
    "Professional_Elective_1"
];

// Array containing the grades
const grades = [
    Gender_and_Society,
    Networking,
    IPT,
    programming,
    Professional_Elective_1
];

// Student contact information
const email = "loparlean@gmail.com";
const phone = "09354802934";

// Boolean value
const scholarship = true;


// ===============================
// FUNCTIONS
// ===============================

// Calculates the average of the grades
const average = (grades) =>
    grades.reduce((a, b) => a + b, 0) / grades.length;

// Checks if a grade is passing or failing
const status = (grade) =>
    grade >= passingGrade ? "PASSED" : "FAILED";

// Gets the highest grade
const highest = (grades) => Math.max(...grades);

// Gets the lowest grade
const lowest = (grades) => Math.min(...grades);

// Gives a remark based on the grade
const remark = (grade) =>
    grade >= 90 ? "Excellent" :
    grade >= 85 ? "Very Good" :
    grade >= 75 ? "Passed" :
    "Needs Improvement";


// ===============================
// STUDENT GRADE REPORT
// ===============================

// Displays the title of the report
console.log("\n======================================================");
console.log(`       ${school}`);
console.log(`             STUDENT GRADE REPORT`);
console.log("======================================================\n");

// Displays student information
console.log(`Student Name: ${name}`);
console.log(`Student ID: ${studentID}`);
console.log(`Age: ${age}`);
console.log(`Course: ${course}`);
console.log(`Year Level: ${year}`);
console.log(`Section: ${section}`);
console.log(`School Year: 2026-2027`);
console.log(`Semester: ${semester}`);
console.log(`Teacher: ${teacher}`);
console.log(`Attendance: ${attendance}%`);
console.log(`Enrolled: Yes`);

// Ternary operator checks if the student has a scholarship
console.log(`Scholarship: ${scholarship ? "Yes" : "No"}`);


// ===============================
// ARRAY DESTRUCTURING
// ===============================

// Gets the first three subjects from the array
const [firstSubject, secondSubject, thirdSubject] = subjects;

// Gets the first three grades from the array
const [firstGrade, secondGrade, thirdGrade] = grades;

// Gets the first two subjects and stores the rest
const [one, two, ...otherSubjects] = subjects;


// Displays subjects and grades
console.log("\n======================================================");
console.log("                 SUBJECTS AND GRADES ");
console.log("======================================================\n");

console.log(`Subject: ${firstSubject}`);
console.log(`Grade: ${firstGrade}`);

console.log(`Subject: ${secondSubject}`);
console.log(`Grade: ${secondGrade}`);

console.log(`Subject: ${thirdSubject}`);
console.log(`Grade: ${thirdGrade}`);

// join() combines the remaining subjects into one string
console.log(`Other Subjects: ${otherSubjects.join(", ")}`);


// ===============================
// OBJECTS
// ===============================

// Student object
const student = {
    name: name,
    age: age,
    course: course
};

// Teacher object
const teacherInfo = {
    name: teacher,
    subject: "Programming"
};

// School object
const schoolInfo = {
    name: school,
    location: "Calbayog City"
};


// ===============================
// OBJECT DESTRUCTURING
// ===============================

// Gets values from the student object
const { name: studentName, age: studentAge } = student;

// Gets values from the teacher object
const { name: teacherName, subject } = teacherInfo;

// Gets values from the school object
const { name: schoolName, location } = schoolInfo;


// Displays student information
console.log("\n======================================================");
console.log("                 STUDENT INFORMATION");
console.log("======================================================\n");

console.log(`Student: ${studentName}`);
console.log(`Age: ${studentAge}`);
console.log(`Course: ${course}`);
console.log(`Teacher: ${teacherName}`);
console.log(`Subject: ${subject}`);
console.log(`School: ${schoolName}`);
console.log(`Location: ${location}`);


// ===============================
// SPREAD OPERATOR
// ===============================

// Additional subjects
const extraSubjects = ["PATHFIT", "Ethics"];

// Combines the subjects using the spread operator
const allSubjects = [
    ...subjects,
    ...extraSubjects
];

// Adds another grade to the grades array
const allGrades = [
    ...grades,
    90
];


// ===============================
// COMBINING OBJECTS
// ===============================

// Basic student information
const basicInfo = {
    name: name,
    age: age
};

// Academic information
const academicInfo = {
    course: course,
    section: section
};

// Combines basic and academic information
const fullInfo = {
    ...basicInfo,
    ...academicInfo
};

// Contact information
const contactInfo = {
    email: email,
    phone: phone
};

// Combines all student information
const completeInfo = {
    ...fullInfo,
    ...contactInfo
};


// Displays complete student profile
console.log("\n======================================================");
console.log("               STUDENT PROFILE");
console.log("======================================================\n");

console.log(`Name: ${completeInfo.name}`);
console.log(`Age: ${completeInfo.age}`);
console.log(`Course: ${completeInfo.course}`);
console.log(`Section: ${completeInfo.section}`);
console.log(`Email: ${completeInfo.email}`);
console.log(`Phone: ${completeInfo.phone}`);


// ===============================
// MAP METHOD
// ===============================

// Adds % to every grade
const formattedGrades = grades.map(grade => `${grade}%`);

// Creates a detailed report for every subject
const gradeReports = grades.map((grade, index) =>
    `${subjects[index]}: ${grade}% - ${remark(grade)}`
);


// Displays grade results
console.log("\n======================================================");
console.log("                  GRADE RESULTS");
console.log("======================================================\n");

console.log("Grades:");
console.log(formattedGrades.join(", "));

console.log("\nDetailed Grade Reports:");

// forEach() displays each grade report
gradeReports.forEach(report => {
    console.log(report);
});


// ===============================
// FILTER METHOD
// ===============================

// Gets all grades that passed
const passing = grades.filter(grade => grade >= passingGrade);

// Gets all excellent grades
const excellent = grades.filter(grade => grade >= 90);


// Displays grade analysis
console.log("\n======================================================");
console.log("                 GRADE ANALYSIS");
console.log("======================================================\n");

console.log(`Passing Grades: ${passing.join(", ")}`);
console.log(`Excellent Grades: ${excellent.join(", ")}`);


// ===============================
// OPTIONAL CHAINING
// ===============================

// Contact object with nested information
const contact = {
    details: {
        email: email,
        phone: phone
    }
};

// Address object with nested information
const address = {
    details: {
        city: "Calbayog City",
        province: "Samar"
    }
};

// ?. safely accesses nested values
const contactResult = {
    email: contact?.details?.email,
    phone: contact?.details?.phone
};

const addressResult = {
    city: address?.details?.city,
    province: address?.details?.province
};


// ===============================
// FINAL CALCULATIONS
// ===============================

// Calculates the average, highest, and lowest grades
const avg = average(grades);
const high = highest(grades);
const low = lowest(grades);

// Checks the overall status
const result = status(avg);


// ===============================
// FINAL RESULT
// ===============================

console.log("\n======================================================");
console.log("                   FINAL RESULT");
console.log("======================================================\n");

console.log(`Student Name: ${name}`);
console.log(`Average Grade: ${avg.toFixed(2)}`);
console.log(`Highest Grade: ${high}/${maxGrade}`);
console.log(`Lowest Grade: ${low}/${maxGrade}`);
console.log(`Passing Subjects: ${passing.length}`);
console.log(`Excellent Subjects: ${excellent.length}`);
console.log(`Overall Status: ${result}`);
console.log(`Overall Remark: ${remark(avg)}`);

// Ternary operator checks scholarship status
console.log(`Scholarship: ${scholarship ? "QUALIFIED" : "NOT QUALIFIED"}`);


// ===============================
// CONGRATULATIONS MESSAGE
// ===============================

console.log("\n======================================================");
console.log(`Congratulations, ${name}!`);
console.log(`Your final average is ${avg.toFixed(2)}.`);
console.log(`Your academic status is ${result}.`);
console.log("======================================================");