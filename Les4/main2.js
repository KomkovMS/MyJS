'use strict';

// function Person(name, gender) {
// 	this.name = name;
// 	this.gender = gender;
// }
//
// Person.prototype.sayName = function () {
// 	console.log(`My name: ${this.name}`);
// };
//
// const person1 = new Person('Maksim', 'm');

// после 2015 года

class Person {
	constructor(name, gender) {
		this.name = name;
		this.gender = gender;
	}

	sayName() {
		console.log(`My name: name${this.name}`);
	}
}

class Employee extends Person {
	constructor (name, gender, position) {
		super(name, gender);
		this.position = position;
	}

	sayPosition () {
		console.log(`My position: ${this.position}`);
	};
}