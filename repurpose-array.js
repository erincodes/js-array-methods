var friends = [
    {name: "John", age: 22},
    {name: "Peter", age: 23},
    {name: "Mark", age: 24},
    {name: "Maria", age: 22},
    {name: "Monica", age: 21},
    {name: "Martha", age: 19}
];

// callback function that produces an element of the new Array, takes 3 arguments: currentValue, index (optional), the array that .map was called upon(optional)
var friendAge = friends.map(function({age}) {
    return age;
});
// ES6 way:
var friendAgeES6 = friends.map(({age}) => age);

console.log("friendAge:", friendAge);
console.log("friendAgeES6:", friendAgeES6);

// .from() is another viable option in addition to .map()
var friendsNames = Array.from(friends, ({name}) => name);

console.log("friendsNames:", friendsNames);
// returns [“John”, “Peter”, “Mark”, “Maria”, “Monica”, “Martha”]
