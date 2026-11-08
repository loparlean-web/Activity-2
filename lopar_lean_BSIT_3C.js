// ===============================
// BOOK CLASS
// ===============================

// Class is a blueprint for creating Book objects
class Book {

    // Constructor runs when a new Book is created
    constructor(title) {
        this.title = title;
    }

    // Method to display the book title
    showBook() {
        console.log("Book: " + this.title);
    }
}


// ===============================
// NOVEL CLASS
// ===============================

// Novel inherits properties and methods from Book
class Novel extends Book {

    // Method for reading a novel
    read() {
        console.log(this.title + " is being read.");
    }

    // Overrides the showBook() method from Book
    showBook() {
        console.log("Novel: " + this.title);
    }
}


// ===============================
// TEXTBOOK CLASS
// ===============================

// Textbook also inherits from Book
class Textbook extends Book {

    // Method for studying the textbook
    study() {
        console.log("Studying: " + this.title);
    }
}


// ===============================
// LIBRARY CLASS
// ===============================

// Class for creating Library objects
class Library {

    // Constructor receives the library name
    constructor(name) {
        this.name = name;
    }

    // Displays the library name
    showLibrary() {
        console.log("Library: " + this.name);
    }
}


// ===============================
// VARIABLES
// ===============================

// Basic library information
let libraryName = "City Library";
let bookCount = 5;
let memberAge = 20;


// ===============================
// OBJECT CREATION
// ===============================

// Creates a Book object
let book1 = new Book("The Little Prince");

// Creates a Novel object
let novel1 = new Novel("Harry Potter");

// Creates a Textbook object
let textbook1 = new Textbook("JavaScript Basics");

// Creates a Library object
let library1 = new Library(libraryName);


// ===============================
// LIBRARY CARD CLASS
// ===============================

// Class for a library card
class LibraryCard {

    // # makes the number private
    #number = 0;

    // Setter method changes the private number
    setNumber(number) {
        this.#number = number;
    }

    // Getter method gets the private number
    getNumber() {
        return this.#number;
    }
}


// ===============================
// BORROWED BOOK CLASS
// ===============================

// Class for storing borrowed book information
class BorrowedBook {

    // Private variable for borrowed days
    #days = 0;

    // Sets the number of borrowed days
    setDays(days) {
        this.#days = days;
    }

    // Gets the number of borrowed days
    getDays() {
        return this.#days;
    }
}


// ===============================
// ARRAYS
// ===============================

// Array containing book names
let books = [
    "The Little Prince",
    "Harry Potter",
    "JavaScript Basics"
];

// Array containing author names
let authors = [
    "Antoine de Saint-Exupery",
    "J.K. Rowling",
    "John Smith"
];

// Array containing book prices
let prices = [
    100,
    200,
    400
];


// ===============================
// CONDITIONALS
// ===============================

console.log("===== LIBRARY STATUS =====");

// Checks if there are books available
if (bookCount > 0) {
    console.log("Books: Available");
}

// Checks if the member is 18 or older
if (memberAge >= 18) {
    console.log("Member: Allowed to borrow");
}

// Checks if there are at least 5 books
if (bookCount >= 5) {
    console.log("Status: Many books available");
} else {
    console.log("Status: Few books available");
}


// ===============================
// FOR LOOP
// ===============================

console.log("\n===== BOOKS =====");

// Loop displays every book in the array
for (let i = 0; i < books.length; i++) {
    console.log("- " + books[i]);
}


// ===============================
// FOR...OF LOOP
// ===============================

console.log("\n===== AUTHORS =====");

// for...of gets each author from the array
for (let author of authors) {
    console.log("- " + author);
}


// ===============================
// FOREACH LOOP
// ===============================

console.log("\n===== PRICES =====");

// forEach() runs the function for every price
prices.forEach(function(price) {
    console.log("₱" + price);
});


// ===============================
// BOOK OBJECT
// ===============================

console.log("\n===== BOOK INFORMATION =====");

// Calls the showBook() method
book1.showBook();


// ===============================
// NOVEL OBJECT
// ===============================

console.log("\n===== NOVEL =====");

// Calls the read() method
novel1.read();


// ===============================
// TEXTBOOK OBJECT
// ===============================

console.log("\n===== TEXTBOOK =====");

// Calls the study() method
textbook1.study();


// ===============================
// LIBRARY OBJECT
// ===============================

console.log("\n===== LIBRARY =====");

// Calls the showLibrary() method
library1.showLibrary();


// ===============================
// ENCAPSULATION
// ===============================

// Creates a LibraryCard object
let card = new LibraryCard();

// Sets the private card number
card.setNumber(123);

console.log("\n===== LIBRARY CARD =====");

// Gets the private card number using the getter
console.log("Card Number: " + card.getNumber());


// ===============================
// ENCAPSULATION
// ===============================

// Creates a BorrowedBook object
let borrowed = new BorrowedBook();

// Sets the private borrowed days
borrowed.setDays(7);

console.log("\n===== BORROWED BOOK =====");

// Gets the private borrowed days
console.log("Borrowed Days: " + borrowed.getDays());


// ===============================
// ABSTRACTION
// ===============================

console.log("\n===== ABSTRACTION =====");

// Calls a method without showing how it works internally
library1.showLibrary();


// ===============================
// OBJECT LITERAL
// ===============================

// Object literal for librarian information
let librarian = {
    name: "Lean",
    age: 19
};

// Object literal for library schedule
let schedule = {
    opening: "9:00 AM",
    closing: "5:00 PM"
};


// ===============================
// LIBRARIAN INFORMATION
// ===============================

console.log("\n===== LIBRARIAN =====");

// Accesses object properties using dot notation
console.log("Name: " + librarian.name);
console.log("Age: " + librarian.age);


// ===============================
// LIBRARY SCHEDULE
// ===============================

console.log("\n===== LIBRARY SCHEDULE =====");

// Displays schedule information
console.log("Opening: " + schedule.opening);
console.log("Closing: " + schedule.closing);


// ===============================
// POLYMORPHISM
// ===============================

console.log("\n===== POLYMORPHISM =====");

// Calls Book's showBook() method
book1.showBook();

// Calls Novel's overridden showBook() method
novel1.showBook();