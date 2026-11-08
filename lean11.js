let username = "Sophia";
let email = "sophia@gmail.com";
let password = "12345";

if (username === "" || email === "" || password === "") {
    console.log("Please fill in all fields.");
} else if (!email.includes("@")) {
    console.log("Invalid Email Address.");
} else if (password.length < 5) {
    console.log("Password is too short.");
} else {
    console.log("Form Submitted Successfully!");
}
