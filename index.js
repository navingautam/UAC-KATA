const findAllIndices = require("./src/indices");
const intersect = require("./src/intersect");
const isMonotonic = require("./src/monotonic");

console.log("Running indices samples...");

console.log(findAllIndices('the fox jumps over the dog', 'the'));
// expecting [0, 19])

console.log(findAllIndices('the fox jumps over the dog', 'brown'));
// expecting []

console.log(findAllIndices('the fox jumps over the dog', 'o'));
// expecting [5, 14, 24]

console.log(findAllIndices('the fox jumps over the dog', ' '));
// expecting [3, 7, 13, 18, 22]

console.log("Running intersection samples...");

console.log(intersect([[7, 3, 6, 10], [9, 10, 3]])); 
// return [10, 3]

console.log(intersect([[9, 10, 3], [7, 3, 6, 10], [3, 7]])); 
// return [3]

console.log(intersect([[2, 3], [4, 5]]));
// return []

console.log(intersect([[2, 3, 5]]));
// return [2, 3, 5]

console.log("Running isMonotonic samples...");

//monotonic
console.log(isMonotonic([]));
console.log(isMonotonic([1]));
console.log(isMonotonic([1, 2]));
console.log(isMonotonic([1, 1, 1, 1, 1, 1]));
console.log(isMonotonic([1, 1, 2, 2, 3, 4, 4, 5]));
console.log(isMonotonic([5, 4, 4, 3, 2, 2, 1, 0, 0, -1]));
console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -2000]));
console.log(isMonotonic([1, 5, 10, 1100, 1101, 1102, 2000]));

//NOT monotonic
console.log(isMonotonic([1, 2, 4, 3]));
console.log(isMonotonic([5, 5, 4, 3, 3, 1, 2, 0]));
console.log(isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -2000]));
console.log(isMonotonic([1, 2, 0]));
console.log(isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11]));



