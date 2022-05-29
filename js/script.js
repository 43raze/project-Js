'use strict';
//let number = 5;

//const leftBorderWidth = 1;
//number = 10;
//console.log(number);

//const obj = {
//	a: 50
//};

//obj.a = 10;
//console.log(obj);

//let number2 = 4.6;
//console.log(-4 / 0); // !infinity
//console.log('string' * 9); // ! NaN

//const persone = `5`; //! будет строка

//let bool = true; //! false-нет

//const obj2 = {
//	name: 'John',
//	age: 25,
//	isMarried: false
//};
//console.log(obj2['isMarried']); // ! или точка "."

//let arr = ['plump.png', 'orange.jpg', 6, 'apple.bmp', {},
//	[]
//]
//console.log(arr[1]);
/***********************/

//alert('Hello world!');

//const result =confirm('Are you there?');

//console.log(result);

//const answer = +prompt('Вам есть 18?', '');
//console.log(answer + 5);

//const answers = [];

//answers[0] = prompt('Как ваше имя');
//answers[1] = prompt('Как ваше фамилия');
//answers[2] = prompt('Как вам лет');

//console.log(typeof (answers));
//console.log(typeof (null));

/***********************/

//! ИНТЕРПОЛЯЦИЯ

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`); // ! + category старый вариант!

// const user = 'Ivan';

// console.log(`Привет, ${user}`);

//! Фуyкции

let num = 20;

function shiwFirstMEssage(text) {
	console.log(text);
	//let num = 100;
	console.log(num);
}
shiwFirstMEssage('Hello world!');
console.log(num);

function calc(a, b) {
	return (a + b);
}
console.log(calc(7, 3));
console.log(calc(70, 3));
console.log(calc(10, 3));

function ret() {
	let num = 50;
	return num;
}

const anotheNum = ret();
console.log(anotheNum);

const logger = function () {
	console.log('Hello');
};
logger();

const cal2 = (a, b) => a + b;

//! Методы и свойства строк и чисел

const str = 'tEst';
// const arr = [1, 2, 3];
console.log(str.toUpperCase()); //! ВЕРХНИЙ
console.log(str.toLocaleLowerCase()); //!нижний регистр
// console.log(arr.length)

const fruit = 'Some fruit';
console.log(fruit.indexOf('q'));

const logg = 'Hello World!';
console.log(logg.slice(6));

console.log(logg.substring(6, 11));
console.log(logg.str(6, 5));

const num4 = 12.2;
console.log(Math.round(num4));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));

//! CALLBACK

function learnJS(lang, callback) {
	console.log(`я учу:${lang}`);
	callback();
}
learnJS('JavaScript', function () {
	console.log('я прошел этот урок');
});

const arr = [2, 3, 6, 8, 12];
arr.forEach(function (item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
}); // ! Где i это номер массива, item это количество в массиве, третий аргумент это ссылка на элемент в массиве!!!!

for (let value of arr) {
	console.log(value);
}

const str2 = prompt('', '');
const products = str2.split(',');
products.sort();
console.log(products.join(';'));


function copy(mainOdj) {
	let objCopy = {};

	let key;
	for (key in mainOdj) {
		objCopy[key] = mainOdj[key];
	}
	return objCopy;
}