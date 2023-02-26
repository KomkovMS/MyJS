// Задача - с помощью slice() скопируйте месяцы с апреля по октябрь включительно

let months = [
	'Januar', 'Februar', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
	'October', 'November', 'December'
];

// Метод slice() возвращает новый массив, содержащий копию части исходного массива.

let newMonths = months.slice(3, 10);
console.log(newMonths);