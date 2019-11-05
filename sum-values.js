var numbers = [1, 5, 2, 6];

var sum = numbers.reduce(function(x, y) {
    return x + y;
});

// ES6 way:
var sumES6 = numbers.reduce((x, y) => x + y);

console.log(sum); // returns 14
console.log(sumES6); // returns 14
