'use strict';

/**
 * Функция генерирует массив из 4-х случайных чисел
 * Выбор чисел происходит из строки generated
 * Для добавления неповторяющихся чисел в пустой массив используется метод includes().
 * Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.
 * @returns {Array} Функция возвращает массив из 4-х случайных неповторяющихся чисел
 */
function getRandomAsArray() {
	let generated = String(Math.random() * 1000000000000000);
	let result = [];
	for (let value of generated) {
		if (!result.includes(value)) {
			result.push(value);
		}
		if (result.length == 4) {
			return result;
		}
	}
}

/**
 * Функция возвращает количество быков
 * @param {Array} riddle
 * @param {Array} answer
 * @returns {number}
 */
function getBullsCount(riddle, answer) {
	let count = 0;
	for (let i = 0; i < riddle.length; i++) {
		if (riddle[i] == answer[i]) {
			count++;
		}
	}
	return count;
}

/**
 * Функция возвращает количество коров, при этом коровы могут оказаться быками
 * @param {Array} riddle
 * @param {Array} answer
 * @returns {number}
 */
function getCowsCount(riddle, answer) {
	let count = 0;
	for (let value of riddle) {
		if (answer.includes(value)) {
			count++;
		}
	}
	return count;
}

/**
 * Функция возвращает количество быков и коров
 * @param riddle загаданное значение
 * @param answer ответ пользователя
 *
 * @returns {Object} obj - количество быков и коров
 * @returns {number} obj.bullsCount - количество быков
 * @returns {number} obj.cowsCount - количество коров
 */
function getBullsAndCowsCount(riddle, answer) {
	let bullsCount = getBullsCount(riddle, answer);
	let cowsCount = getCowsCount(riddle, answer);
	return {
        "bullsCount": bullsCount,
        "cowsCount": cowsCount - bullsCount, // из коров вычитаем тех, что оказались быками
    };
}

/**
 * Функция вызывает функцию генерации массива из 4-х элементов и сохраняет результат в переменную
 * riddle (загадка). Далее у пользователя спрашиваем загаданное 4-х значное число, так как prompt()
 * возвращает строку используем метод split() для добавления каждого элемента числа в массив
 * Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой
 * Для проверки угадал ли пользователь число вызываем функцию getBullsAndCowsCount()
 */
function startGame() {
	let riddle = getRandomAsArray();
	while (true) {
		let answer = prompt("Угадайте 4-х значное число: ").split("");
		let result = getBullsAndCowsCount(riddle, answer);
		console.log(`Ваш ответ: ${answer}, быков: ${result.bullsCount}, коров: ${result.cowsCount}}\n`);
		if (riddle.toString() === answer.toString()) {
			console.log("Вы победили!");
			break;
		}
	}
	console.log("Загадка: " + riddle);
}

/**
 * Функция вызывает начало игры
 */
startGame();