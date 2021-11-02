// Методы — вспомогательные функции.
// Свойства — вспомогательные значения

const str = 'test';
const arr = [1, 2, 4];


// Свойство — Без вызывания
console.log(arr.length);
console.log(str[2]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

//поиск подстроки
const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));

//Методы со строками
const logg = 'Hello World';


//Не включает указанную финальную точку (только до неё)
console.log(logg.slice(6, 11));

//С какого места вырезать
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));

// Субстринг (схожий)
console.log(logg.substring(6, 11));

//Substr (второй аргумент — количество символов, которые нужно вырезать)
console.log(logg.substr(6, 5));


//Числа (есть отдельная библиотека Math)

//Округление
const num = 12.2;
console.log(Math.round(num));

//Переводит в другую систему счисления — сразу переводится в число
const test = '12.2px';
console.log(parseInt(test));

// Возвращает десятичные
console.log(parseFloat(test));
