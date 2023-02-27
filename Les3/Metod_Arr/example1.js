// ЗАДАЧА
// Сделайте чтобы каждое слово в str1 было с заглавной буквы

const str1 = 'lorem ipsum dolor sit amet consectet ut et dolor sit amet consectet ut';
console.log(str1);

const arrayOfWords = str1.split(' ');

let result = arrayOfWords.map(function(word) {
	word = word.charAt(0).toUpperCase() + word.slice(1);
	// console.log(word);
	return word;
});

result = result.join(' ');

console.log(result);

// Вариант 2

let res = arrayOfWords.map(function(word) {
	let letters = word.split('');
	letters[0] = letters[0].toUpperCase();
	return letters.join('');
});

res = res.join(' ');

console.log(res); // Lorem Ipsum Dolor Sit Amet Consectet Ut Et Dolor Sit Amet Consectet Ut

