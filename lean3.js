let name = "Sophia";
let math = 85;
let english = 90;
let science = 88;

let average = (math + english + science) / 3;

console.log("Student: " + name);
console.log("Average: " + average);

if (average >= 75) {
    console.log("Status: Passed");
} else {
    console.log("Status: Failed");
}
