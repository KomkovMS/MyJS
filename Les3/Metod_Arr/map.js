// Задача - Используя метод map() нужно получить новый массив, где каждое число будет увеличено на 10.

const nums = [4, 1093, 38, 8, 75];

const newNumsMult10 = nums.map(number => number + 10);
console.log(newNumsMult10);

// простая (не стрелочная) функция выглядела бы так:

const newNums = nums.map(function (value) {
	return value + 10;
});
console.log(newNums);


// ЗАДАЧА
// Перед вами массив с пользователями, используя метод map() создайте новый
// массив, в котором появится префикс к фамилии Mr. или Mrs. в зависимости
// от пола пользователя, например для объекта:

// {
// 	surname: 'Campbell',
// 	gender: 'male',
// },
// результат будет:
// {
// 	surname: 'Campbell',
// 	gender: 'male',
//  appreal: 'Mr.',
// },


const users = [
	{
		surname: 'Campbell',
        gender:'male',
	},
	{
		surname: 'Miller',
        gender: 'female',
	},
	{
		surname: 'Jones',
        gender: 'female',
	},
	{
        surname: 'Brown',
        gender: 'female',
    },
	{
		surname: 'Smith',
        gender:'male',
	},
];

const usersGender = users.map(function (user) {
	if (user.gender === 'male') {
		user.appreal = 'Mr.';
	}
	user.appreal = 'Mrs.';
	return user;
});

console.log(usersGender);

// Вариант решения с помощью Object.assign():
const usersWithAppeal = users.map(function (user) {
	if (user.gender === 'male') {
		return Object.assign({}, user, {appreal: 'Mr.'});
	}
	return Object.assign({}, user, {appreal: 'Mrs.'});
});

console.log(usersWithAppeal);