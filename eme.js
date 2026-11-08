let name = "Lean Lopar";
let age = 20;
let course = "BS Information Technology";
let year = "3rd Year";
let section = "3C";
let Gender_and_Society = 74;
let Networking = 75;
let IPT = 75;
let programming = 70;
let Professional_Elective_1 = 75;
let attendance = 70;

const school = "NorthWest Samar State University";
const studentID = "2024-333-1";
const semester = "First Semester";
const teacher = "Mr. Ortiz";
const passingGrade = 75;
const subjects = ["Gender_and_Society", "Networking", "IPT", "Programming", "Professional_Elective_1"];
const grades = [Gender_and_Society, Networking, IPT, programming, Professional_Elective_1];
const email = "loparlean@gmail.com";
const phone = "09354802934";
const scholarship = true;
const maxGrade = 100;

const average = (grades) =>
    grades.reduce((a, b) => a + b, 0) / grades.length;

const status = (grade) =>
    grade >= passingGrade ? "PASSED" : "FAILED";

const highest = (grades) => Math.max(...grades);

const lowest = (grades) => Math.min(...grades);

const remark = (grade) =>
    grade >= 90 ? "Excellent" :
    grade >= 85 ? "Very Good" :
    grade >= 75 ? "Passed" :
    "Needs Improvement";

console.log("\n======================================================");
console.log(`       ${school}`);
console.log(`             STUDENT GRADE REPORT`);
console.log("======================================================\n");

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
console.log(`Scholarship: ${scholarship ? "Yes" : "No"}`);

const [firstSubject, secondSubject, thirdSubject] = subjects;
const [firstGrade, secondGrade, thirdGrade] = grades;
const [one, two, ...otherSubjects] = subjects;

console.log("\n======================================================");
console.log("                 SUBJECTS AND GRADES ");
console.log("======================================================\n");

console.log(`Subject: ${firstSubject}`);
console.log(`Grade: ${firstGrade}`);
console.log(`Subject: ${secondSubject}`);
console.log(`Grade: ${secondGrade}`);
console.log(`Subject: ${thirdSubject}`);
console.log(`Grade: ${thirdGrade}`);
console.log(`Other Subjects: ${otherSubjects.join(", ")}`);

const student = {
    name: name,
    age: age,
    course: course
};

const teacherInfo = {
    name: teacher,
    subject: "Programming"
};

const schoolInfo = {
    name: school,
    location: "Calbayog City"
};

const { name: studentName, age: studentAge } = student;
const { name: teacherName, subject } = teacherInfo;
const { name: schoolName, location } = schoolInfo;

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

const extraSubjects = ["PATHFIT", "Ethics"];

const allSubjects = [
    ...subjects,
    ...extraSubjects
];

const allGrades = [
    ...grades,
    90
];


const basicInfo = {
    name: name,
    age: age
};

const academicInfo = {
    course: course,
    section: section
};

const fullInfo = {
    ...basicInfo,
    ...academicInfo
};

const contactInfo = {
    email: email,
    phone: phone
};

const completeInfo = {
    ...fullInfo,
    ...contactInfo
};

console.log("\n======================================================");
console.log("               STUDENT PROFILE");
console.log("======================================================\n");

console.log(`Name: ${completeInfo.name}`);
console.log(`Age: ${completeInfo.age}`);
console.log(`Course: ${completeInfo.course}`);
console.log(`Section: ${completeInfo.section}`);
console.log(`Email: ${completeInfo.email}`);
console.log(`Phone: ${completeInfo.phone}`);

const formattedGrades = grades.map(grade => `${grade}%`);

const gradeReports = grades.map((grade, index) =>
    `${subjects[index]}: ${grade}% - ${remark(grade)}`
);

console.log("\n======================================================");
console.log("                  GRADE RESULTS");
console.log("======================================================\n");

console.log("Grades:");
console.log(formattedGrades.join(", "));

console.log("\nDetailed Grade Reports:");

gradeReports.forEach(report => {
    console.log(report);
});

const passing = grades.filter(grade => grade >= passingGrade);

const excellent = grades.filter(grade => grade >= 90);

console.log("\n======================================================");
console.log("                 GRADE ANALYSIS");
console.log("======================================================\n");

console.log(`Passing Grades: ${passing.join(", ")}`);
console.log(`Excellent Grades: ${excellent.join(", ")}`);

const contact = {
    details: {
        email: email,
        phone: phone
    }
};

const address = {
    details: {
        city: "Calbayog City",
        province: "Samar"
    }
};

const contactResult = {
    email: contact?.details?.email,
    phone: contact?.details?.phone
};

const addressResult = {
    city: address?.details?.city,
    province: address?.details?.province
};

const avg = average(grades);
const high = highest(grades);
const low = lowest(grades);
const result = status(avg);

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
console.log(`Scholarship: ${scholarship ? "QUALIFIED" : "NOT QUALIFIED"}`);

console.log("\n======================================================");
console.log(`Congratulations, ${name}!`);
console.log(`Your final average is ${avg.toFixed(2)}.`);
console.log(`Your academic status is ${result}.`);
console.log("======================================================");
