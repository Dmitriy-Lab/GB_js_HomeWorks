// Задание 1
// Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, 
// решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];

const minArrValue = Math.min(...arr);

console.log(minArrValue);

// Задание 2
// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: 
// increment и decrement.Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен 
// уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    let counter = 10;
    const step = 1;

    return {
        increment() {
            return counter += step;
        },
        decrement() {
            return counter -= step;
        },
    }
}

console.log(createCounter().increment());
console.log(createCounter().decrement());

// Задание 3
// 3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * factorial(number - 1);
};


console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // выводит 1 (по определению факториала)

