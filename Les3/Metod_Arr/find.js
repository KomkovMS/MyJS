let prices = [123, 46, 230, 11, 144];

// Задача - найти и вывести первую цену ниже 50 с помощью метода find():

let prices50 = prices.find(price => price < 50);
console.log(prices50);

// Тоже самое с помощью обычной функции:

let price50 = prices.find(function (price) {
	return price < 50;
})
console.log(price50);