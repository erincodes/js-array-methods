// If you have an array full of elements but need it to be empty, just set the length to 0

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

fruits.length = 0;

console.log(fruits); // returns []
