// Задача - Используя метод map() нужно получить новый массив, где каждое число будет увеличено на 10.

const nums = [4, 1093, 38, 8, 75];

const newNumsMult10 = nums.map(number => number + 10);
console.log(newNumsMult10);

// простая (не стрелочная) функция выглядела бы так:

const newNums = nums.map(function (value) {
	return value + 10;
});
console.log(newNums);