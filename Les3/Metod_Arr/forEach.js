// Задача - Найдите максимальное число в массиве, используя метод forEach:

let numbers = [3, 700, 304, 29, 1073, 142];

let maxNumber = numbers[0];

numbers.forEach(function (number) {
	if (number > maxNumber) {
		maxNumber = number;
    }
});
console.log(maxNumber);