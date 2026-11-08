let cart = [
    { name: "T-shirt", price: 250 },
    { name: "Shoes", price: 800 },
    { name: "Bag", price: 500 }
];

let total = 0;

console.log("Shopping Cart");

for (let item of cart) {
    console.log(item.name + " - ₱" + item.price);
    total += item.price;
}

console.log("Total: ₱" + total);
