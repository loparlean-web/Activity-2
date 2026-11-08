let fruits = ["Apple", "Banana", "Mango"];

console.log("Original Fruits:", fruits);

fruits.push("Orange");
console.log("After Adding:", fruits);

fruits.pop();
console.log("After Removing:", fruits);

let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());

console.log("Uppercase Fruits:", upperCaseFruits);
