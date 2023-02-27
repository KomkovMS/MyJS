let clients = ["Василий", "Сергей", "Екатерина", "Александр", "Владимир", "Валентина", "Дмитрий", "Андрей", "Лава"];

// Задание - взять из массива все имена, которые начинаются на букву "В"

// Вариант 1 с помощью метода indexOf():
function getVName(vClient) {
	if (vClient.indexOf("В")!== -1) {
		return vClient;
	}
}

let vClients = clients.filter(getVName);
console.log(vClients);

// Вариант 2 с помощью for по индексу 0:

newClients = [];

for (let i = 0; i < clients.length; i++) {
	for (let j = 0; j < clients[i].length; j++) {
		if (clients[i][j] === "В") {
            newClients.push(clients[i]);
        }
	}
}

console.log(newClients);


// Вариант 3 с помощью метода строки startsWith():

newClients2 = [];
for (let i = 0; i < clients.length; i++) {
	if (clients[i].startsWith("В")) {
		newClients2.push(clients[i]);
	}
}

console.log(newClients2);

// Вариант 4 с помощью метода строки startsWith() и стрелочной функции:
newClients3 = clients.filter(vClient => vClient.startsWith("В"));
console.log(newClients3);

// Вариант 5 с помощью методов charAt(), filter() и стрелочной функции:

let vLetterClients = clients.filter(vClient => {
	if (vClient.charAt(0) === "В") {
		return vClient.charAt(0);
	}
} );
console.log(vLetterClients);

// Вариант 6 с помощью методов charAt(), filter():
let vLetterClients2 = clients.filter(function(vClient) {
	return vClient.charAt(0) == "В";
});

console.log(vLetterClients2);