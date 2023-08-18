"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/
const array = [];
let count = 0;
const getRandom = (min = 0, max = 9) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 5; i++) {
    array.push(getRandom());
    count += array[i];
}

let minValue;

for (let i = 1; i < array.length; i++) {
    minValue = Math.min(array[i - 1], array[i])
}

const indexOfArray = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
        indexOfArray.push(i);
    }
}

console.log(array);
console.log(count);
console.log(minValue);
console.log(indexOfArray);