let array = [1, 2, 3, 4, 5, 6, "delete"];

let last = array.pop();
let first = array.pop();

console.log(last); // "delete"
console.log(first); // 6
console.log(array); // [1, 2, 4, 5]