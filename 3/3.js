"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const userNumberOne = Number(prompt('Введите первое число: '));
const userNumberTwo = Number(prompt('Введите второе число: '));
const userNumberThree = Number(prompt('Введите третье число: '));

const findMax = (numberOne, numberTwo, numberThree) => {
    return console.log(`Максимальное значение среди чисел ${numberOne}, ${numberTwo}, ${numberThree} равно ${Math.max(numberOne, numberTwo, numberThree)}.`);
}

findMax(userNumberOne, userNumberTwo, userNumberThree);