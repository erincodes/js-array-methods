// In JS, there are 6 falsy values: false, 0, empty string "", null, NaN, and undefined

var mixedArr = [0, "blue", "", NaN, 9, true, undefined, "white", false];

// filter out the the falsy Boolean values
var trueArr = mixedArr.filter(Boolean);

console.log(trueArr);
// returns only the truthy values ['blue', 9, true, 'white']
