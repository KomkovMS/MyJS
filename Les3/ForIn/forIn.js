const user = {
	id: 3,
	age: 25,
	name: 'John Doe',
};

for (let property in user) {
	console.log(property); // id
	                       // forIn.js:8 age
						   // forIn.js:8 name
}

for (let property in user) {
	console.log(user[property]); // 3
						   		 // 25
						   		 // John Doe
}

