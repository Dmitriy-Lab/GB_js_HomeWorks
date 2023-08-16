"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const userNumberOne = prompt('Введите первое число: ');
const userNumberTwo = prompt('Введите второе число: ');
const userNumberThree = prompt('Введите третье число: ');

const findMax = (numberOne, numberTwo, numberThree) => {
    if (numberOne > numberTwo && numberOne > numberThree) {
        return console.log(`Максимальное значение среди чисел ${numberOne}, ${numberTwo}, ${numberThree} равно ${numberOne}.`);
    } else if (numberTwo > numberOne && numberTwo > numberThree) {
        return console.log(`Максимальное значение среди чисел ${numberOne}, ${numberTwo}, ${numberThree} равно ${numberTwo}.`);
    } else {
        return console.log(`Максимальное значение среди чисел ${numberOne}, ${numberTwo}, ${numberThree} равно ${numberThree}.`);
    }
}

findMax(userNumberOne, userNumberTwo, userNumberThree);