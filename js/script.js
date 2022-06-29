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

// let num = 20;

// function shiwFirstMEssage(text) {
// 	console.log(text);
// 	//let num = 100;
// 	console.log(num);
// }
// shiwFirstMEssage('Hello world!');
// console.log(num);

// function calc(a, b) {
// 	return (a + b);
// }
// console.log(calc(7, 3));
// console.log(calc(70, 3));
// console.log(calc(10, 3));

// function ret() {
// 	let num = 50;
// 	return num;
// }

// const anotheNum = ret();
// console.log(anotheNum);

// const logger = function () {
// 	console.log('Hello');
// };
// logger();

// const cal2 = (a, b) => a + b;

// //! Методы и свойства строк и чисел

// const str = 'tEst';
// // const arr = [1, 2, 3];
// console.log(str.toUpperCase()); //! ВЕРХНИЙ
// console.log(str.toLocaleLowerCase()); //!нижний регистр
// console.log(arr.length)

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('q'));

// const logg = 'Hello World!';
// console.log(logg.slice(6));

// console.log(logg.substring(6, 11));
// console.log(logg.str(6, 5));

// const num4 = 12.2;
// console.log(Math.round(num4));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

//! CALLBACK

// function learnJS(lang, callback) {
// 	console.log(`я учу:${lang}`);
// 	callback();
// }
// learnJS('JavaScript', function () {
// 	console.log('я прошел этот урок');
// });

// const arr = [2, 3, 6, 8, 12];
// arr.forEach(function (item, i, arr) {
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
//}); // ! Где i это номер массива, item это количество в массиве, третий аргумент это ссылка на элемент в массиве!!!!

// for (let value of arr) {
// 	console.log(value);
// }

// const str2 = prompt('', '');
// const products = str2.split(',');
// products.sort();
// console.log(products.join(';'));

// function copy(mainOdj) {
// 	let objCopy = {};

// 	let key;
// 	for (key in mainOdj) {
// 		objCopy[key] = mainOdj[key];
// 	}
// 	return objCopy;
// }

//! Оператор разворота!!!
// const video = ['youtube', 'vimio', 'rytube'];
// const blogs = ['worpress', 'livejournal', 'bloger'];
// const internet = [...video, ...blogs, 'vk', 'faceboock'];
// console.log(internet);

// const array = ['1', 'b'];
// const newAAray = [...array];

// const q = {
// 	one: 1,
// 	two: 2
// };

// const newObj = {
// 	...q
// };

//! ООП основы

// let str3 = 'some';
// let strObj = new String(str3);

// console.log(typeof (str3));
// console.log(typeof (strObj));

// console.dir([1, 2, 3]);


// const box = document.getElementById('box');
// console.log(box);

// const buttos = document.getElementsByTagName('button');

// console.log(buttos[1]); //! выбрать элемен из колекции []

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');

// hearts.forEach(item => {
// 	console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);
//! practice
// const
// 	box = document.getElementById('box'),
// 	buttos = document.getElementsByTagName('button'),
// 	circles = document.getElementsByClassName('circle'),
// 	hearts = document.querySelectorAll('.heart'),
// 	oneHeart = document.querySelector('.heart'),
// 	wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// box.style.cssText = 'background-color: blue; width: 100px;';

// buttos[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
// hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {
// 	item.style.backgroundColor = 'blue';
// });

// const div = document.createElement('div');

// const text = document.createTextNode('Тут был я');

// div.classList.add('black');

// wrapper.append(div); //! append добавить элемент  в конец
//wrapper.prepend(div);  //! append добавить элемент  в начало

//hearts[1].before(div);
//hearts[1].after(div);

// circles[0].remove();
//wrapper.removeChild(hearts[1]); //! старый синтаксис

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[1]);

// div.innerHTML = '<h1>Hello World</h1>';

//div.insertAdjacentHTML('', '<h2>hello</h2>');
// div.textContent= 'hello';

// const btn = document.querySelector('button');

// btn.addEventListener('click', (e) => {
// 	e.target.remove();
// });

// let i = 0;
// const deleteElement = (e) => {
// 	console.log(e.target);
// 	i++;
// 	if (i == 1) {
// 		btn.removeEventListener('click', deleteElement);
// 	}
// };

// btn.addEventListener('click', deleteElement);

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
// 	this.style.backgroundColor = 'red';
// });

// btn.addEventListener('click',  (e)=> {
// 	e.target.style.backgroundColor = 'red';
// });

//const obj = {
// 	num: 5,
// 	sayNumber: function () {
// 		const say = () => {
// 			console.log(this);
// 		};
// 		say();
// 	}
// };
// obj.sayNumber();

// const double = a => a * 2;


// class Rectangle {
// 	constructor(height, width) {
// 		this.height = height;
// 		this.width = width;
// 	}

// 	calcArea() {
// 		return this.height * this.width;
// 	}
// }

// class ColoredRectangleWithText extends Rectangle {
// 	constructor(height, width, text, bgColor) {
// 		super(height, width);
// 		this.text = text;
// 		this.bgColor = bgColor;
// 	}
// 	showMyProps() {
// 		console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
// 	}
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');

// div.showMyProps();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());


// const log = function (a, b, ...rest) {
// 	console.log(a, b, rest);
// };
// log('basic', 'rest', 'operator', 'usage');

// function calcDouble(number, basis = 2) {
// 	basis = basis || 2; // старый варинт
// 	console.log(number * basis);
// }
// calcDouble(3);


//AJAX и общение с сервером

// const inputRub = document.querySelector('#rub'),
// 	inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
// 	const request = new XMLHttpRequest();

// 	request.open('GET', 'js/current.json');
// 	request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
// 	request.send();

// 	request.addEventListener('load', () => {
// 		if (request.status === 200) {
// 			console.log(request.response);
// 			const data = JSON.parse(request.response);
// 			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
// 		} else {
// 			inputUsd.value = "Что-то пошло не так";
// 		}
// 	});

// 	// status
// 	// statusText
// 	// response
// 	// readyState

// });

//! Promise

console.log('Запрос данных...');

const req = new Promise(function (resolve, reject) {
	setTimeout(() => {
		console.log('Подготовка данных...');

		const product = {
			name: 'tv',
			price: 2000
		};
		resolve(product);
	}, 2000);
});

req.then((product) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			resolve(product);
		}, 2000);
	});
}).then(data => {
	data.modify = true;
	return data;

}).then(data => {
	console.log(data);
}).catch(() => {
	console.error('Произошла ошибка');
}).finally(() => {
	console.log('Finally');
});

const test = time => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), time);
	});
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
	console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => {
	console.log('All');
});