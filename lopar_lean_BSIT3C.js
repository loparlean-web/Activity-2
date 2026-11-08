// ==========================================
// STUDENT GRADE MANAGEMENT SYSTEM
// ==========================================

// 3 VARIABLES
let studentName = "Lean Lopar";
let age = 20;
let course = "BSIT";

// 3 ARRAYS
let subjects = ["Programming", "Database", "Networking"];
let grades = [80, 81, 88];
let activities = ["Quiz", "Activity", "Exam"];

console.log("==========================================");
console.log("       STUDENT GRADE MANAGEMENT SYSTEM");
console.log("==========================================");

console.log("Student Name : " + studentName);
console.log("Age          : " + age);
console.log("Course       : " + course);

console.log("------------------------------------------");
console.log("              STUDENT STATUS");
console.log("------------------------------------------");

// CONDITIONAL 1
if (age >= 18) {
    console.log("Age Status   : Adult");
} else {
    console.log("Age Status   : Minor");
}

// CONDITIONAL 2
if (course === "BSIT") {
    console.log("Course Status: Information Technology Student");
} else {
    console.log("Course Status: Other Course");
}

console.log("------------------------------------------");
console.log("             SUBJECT GRADES");
console.log("------------------------------------------");

// LOOP 1 - Display subjects and grades
for (let i = 0; i < subjects.length; i++) {

    // CONDITIONAL 3
    let status;

    if (grades[i] >= 75) {
        status = "PASSED";
    } else {
        status = "FAILED";
    }

    console.log(
        (i + 1) + ". " +
        subjects[i] +
        " - Grade: " +
        grades[i] +
        " - " +
        status
    );
}

console.log("------------------------------------------");
console.log("              ACTIVITIES");
console.log("------------------------------------------");

// LOOP 2 - Display activities
for (let i = 0; i < activities.length; i++) {
    console.log((i + 1) + ". " + activities[i]);
}

console.log("------------------------------------------");
console.log("              GRADE SUMMARY");
console.log("------------------------------------------");

// Calculate total
let total = 0;

// LOOP 3 - Calculate total grades
for (let i = 0; i < grades.length; i++) {
    total += grades[i];
}

let average = total / grades.length;

console.log("Total Grade  : " + total);
console.log("Average Grade: " + average.toFixed(2));

// Final result
if (average >= 90) {
    console.log("Final Remark  : EXCELLENT");
} else if (average >= 85) {
    console.log("Final Remark  : VERY GOOD");
} else if (average >= 75) {
    console.log("Final Remark  : PASSED");
} else {
    console.log("Final Remark  : FAILED");
}

console.log("==========================================");
console.log("          END OF STUDENT RECORD");
console.log("==========================================");