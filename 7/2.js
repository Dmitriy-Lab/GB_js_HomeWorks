// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {

    constructor(name = 'Иван', age = '0', grade = '1a') {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo = () => {
        console.log(`Имя: ${this.name} \nВозраст: ${this.age} \nКласс: ${this.grade}`);
    }
}

const newStudent = new Student('Дон Кихот', 18, '10а');

newStudent.displayInfo();