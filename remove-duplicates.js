// An array with the string "apple" and "orange" duplicated multiple times
var fruits = [
    "banana",
    "apple",
    "orange",
    "watermelon",
    "apple",
    "orange",
    "grape",
    "apple"
];

// First method, using .from() and new Set()
var uniqueFruits1 = Array.from(new Set(fruits));
console.log(uniqueFruits1);
// returns ['banana', 'apple', 'orange', 'watermelon', 'grape']

// Second method, using new Set() and the spread operator (...)
var uniqueFruits2 = [...new Set(fruits)];
console.log(uniqueFruits2);
// returns ['banana', 'apple', 'orange', 'watermelon', 'grape']
