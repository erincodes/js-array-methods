var fruits = ["apple", "banana", "orange"];

var meat = ["poultry", "beef", "fish"];

var vegetables = ["potato", "tomato", "cucumber"];

var food = [...fruits, ...meat, ...vegetables];

console.log(food);
// returns ['apple', 'banana', 'orange', 'poultry', 'beef', 'fish', 'potato', 'tomato', 'cucumber']
