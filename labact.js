
// PERSON CLASS
class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log("I am " + this.name);
    }
}

// MEMBER CLASS
class Member extends Person {
    borrowBook() {
        console.log(this.name + " borrowed a book.");
    }

    introduce() {
        console.log("Library member: " + this.name);
    }
}

// LIBRARIAN CLASS
class Librarian extends Person {
    manageBooks() {
        console.log(this.name + " is managing the books.");
    }
}

// LIBRARY CLASS
class Library {
    constructor(name) {
        this.name = name;
    }

    showLibrary() {
        console.log("Library Name: " + this.name);
    }
}

// ENCAPSULATION
class Wallet {
    #balance = 0;

    addBalance(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

// VARIABLES
let libraryName = "City Public Library";
let memberAge = 20;
let availableBooks = 5;

// OBJECTS
let person1 = new Person("John");
let member1 = new Member("Sophia");
let librarian1 = new Librarian("Mr. Cruz");
let library1 = new Library(libraryName);

// CONDITIONAL STATEMENTS
console.log("===== LIBRARY STATUS =====");

if (availableBooks > 0) {
    console.log("Books are available.");
} else {
    console.log("No books available.");
}

if (memberAge >= 18) {
    console.log("Member: Adult");
} else {
    console.log("Member: Minor");
}

// ARRAYS
let books = [
    "Harry Potter",
    "The Little Prince",
    "Matilda"
];

let authors = [
    "J.K. Rowling",
    "Antoine de Saint-Exupery",
    "Roald Dahl"
];

let prices = [350, 250, 300];

// LOOPS
console.log("\n===== BOOK LIST =====");

for (let i = 0; i < books.length; i++) {
    console.log("- " + books[i]);
}

console.log("\n===== AUTHORS =====");

for (let author of authors) {
    console.log("- " + author);
}

console.log("\n===== BOOK PRICES =====");

prices.forEach(function(price) {
    console.log("Price: ₱" + price);
});

// PERSON
console.log("\n===== PERSON =====");
person1.introduce();

// MEMBER
console.log("\n===== MEMBER =====");
member1.borrowBook();

// LIBRARIAN
console.log("\n===== LIBRARIAN =====");
librarian1.manageBooks();

// LIBRARY
console.log("\n===== LIBRARY =====");
library1.showLibrary();

// ENCAPSULATION
let wallet = new Wallet();
wallet.addBalance(500);

console.log("\n===== WALLET =====");
console.log("Balance: ₱" + wallet.getBalance());

// OBJECT LITERALS
let location = {
    city: "Calbayog",
    country: "Philippines"
};

let libraryRoom = {
    roomNumber: 101,
    totalShelves: 10
};

console.log("\n===== LOCATION =====");
console.log("City: " + location.city);
console.log("Country: " + location.country);

console.log("\n===== LIBRARY ROOM =====");
console.log("Room: " + libraryRoom.roomNumber);
console.log("Shelves: " + libraryRoom.totalShelves);

// POLYMORPHISM
console.log("\n===== POLYMORPHISM =====");
person1.introduce();
member1.introduce();
