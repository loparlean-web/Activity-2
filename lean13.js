let expenses = [
    { item: "Food", amount: 100 },
    { item: "Transportation", amount: 50 },
    { item: "School Supplies", amount: 150 }
];

let totalExpenses = 0;

console.log("My Expenses");

for (let expense of expenses) {
    console.log(expense.item + ": ₱" + expense.amount);
    totalExpenses += expense.amount;
}

console.log("Total Expenses: ₱" + totalExpenses);
