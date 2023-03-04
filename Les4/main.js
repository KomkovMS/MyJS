'use strict';

// до 2015 года

function Person(name, gender) {
	this.name = name;
	this.gender = gender;
}

Person.prototype.sayName = function () {
	console.log(`My name: ${this.name}`);
};

const person1 = new Person('Maksim', 'm');

// ------------------------------

function Employee(name, gender, position) {
	Person.call(this, name, gender);
	this.position = position;
}
//----------------------------------------------------------------
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
//----------------------------------------------------------------

Employee.prototype.sayPosition = function () {
	console.log(`My position: ${this.position}`);
};

const employee1 = new Employee('Irina', 'w', 'doctor');