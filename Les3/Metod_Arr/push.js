let my_arr = [2, 5, 8];

let new_arr = [];

for (let i = 0; i < my_arr.length; i++) {
  new_arr.push(my_arr[i] * 2);
}

console.log(my_arr); // [2, 5, 8]
console.log(my_arr.length); // 3
console.log(new_arr); // [4, 10, 16]
console.log(new_arr.length); // 3