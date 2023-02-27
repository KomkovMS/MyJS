// Задача - получить значения, которые есть в обоих массивах:

const arr1 = ['jane', 'alex', 'john', 'fred', 'ivan', 'sam', 'joel', 'max'];
const arr2 = ['evgeniy', 'alex', 'petr', 'john', 'vasiliy','semen', 'joel'];

// Вариант 1:
const arr3 = [];

for (let i = 0; i < arr1.length; i++) {
	for (let j = 0; j < arr2.length; j++) {
		if (arr1[i] === arr2[j]) {
            arr3.push(arr1[i]);
        }
	}
}

console.log(arr3);

// Вариант 2:
const intersection = arr1.filter(function (name) {
	return arr2.includes(name);
});

console.log(intersection);

// Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.