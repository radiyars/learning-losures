'use strict'

//? Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

function counter(a) {
	return b => {
		return a + b;
	}
}

let c = counter;
console.log(c(5)(-1));
console.log('-------------------------------------');


//? У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
//? Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива


function inBetween(a, b) {
	return function (item) {
		return (item >= a) && (item <= b)
	}
}

function inArray(ar) {
	return function (item) {
		return ar.includes(item)
	}

}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));
console.log('-------------------------------------');


//? У нас есть массив объектов, который нужно отсортировать:

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];
// Обычный способ был бы таким:

// по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, скажем, вот таким?

// users.sort(byField('name'));
// users.sort(byField('age'));
// То есть, чтобы вместо функции, мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.

function byField(fieldName) {
	switch (fieldName) {
		case 'age':
			return (a, b) => a.age > b.age ? 1 : -1;
		case 'name':
			return (a, b) => a.name > b.name ? 1 : -1

	}
}

// function byField(field) {
// 	return (a, b) => a[field] > b[field] ? 1 : -1;
// }

let users = [
	{ name: "John", age: 20, surname: "Johnson" },
	{ name: "Pete", age: 18, surname: "Peterson" },
	{ name: "Ann", age: 19, surname: "Hathaway" }
];

console.log(users.sort(byField('age')));
// console.log(users.sort(byField('name')));