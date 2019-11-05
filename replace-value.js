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

// .splice() has 3 parameters: 1)Where we want to start the modification, 2)How many values we want to change, and 3)The new values
fruits.splice(0, 2, "potato", "tomato");

console.log(fruits);
// returns ['potato', 'tomato', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple']
