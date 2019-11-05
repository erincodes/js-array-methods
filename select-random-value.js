// we can get a random index number according to the array length
var colors = [
    "blue",
    "white",
    "green",
    "navy",
    "pink",
    "purple",
    "orange",
    "yellow",
    "black",
    "brown"
];

var randomColor = colors[Math.floor(Math.random() * colors.length)];

console.log(randomColor);
