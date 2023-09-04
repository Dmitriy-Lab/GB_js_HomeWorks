// Задача необязательная для выполнения

// Задача: Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл". 
// Класс должен иметь методы для установки и получения значений свойств, а также метод для вывода информации о студенте.

class Student {
    #name = '';
    #age = 0;
    #averageGrade = 0;

    constructor() {

    }

    setName(name) {
        this.#name = name;
    }

    setAge(age) {
        this.#age = age;
    }

    setAverageGrade(grade) {
        this.#averageGrade = grade;
    }

    displayInfo() {
        console.log(`Имя: ${this.#name}\nВозраст: ${this.#age}\nСредний балл: ${this.#averageGrade}`);
    }
}

const student = new Student();
student.setName('Питер Паркер');
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo();