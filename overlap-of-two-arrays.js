var arrayOne = [0, 2, 4, 6, 8, 8];

var arrayTwo = [1, 2, 3, 4, 5, 6];

// Make sure that the values in the array we are checking are not duplicates
var duplicatedValues = [...new Set(arrayOne)].filter(item =>
    // Filter on the items included in the second array that also appeared in the first array
    arrayTwo.includes(item)
);

console.log(duplicatedValues);
// returns [2, 4, 6]
