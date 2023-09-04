// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).

// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee {
    name = '';

    constructor(name) {
        this.name = name;
    }

    displayInfo() {
    console.log(`Name: ${this.name}`);
    }
}

class Manager extends Employee {
    department = '';

    constructor(name, department) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Department: ${this.department}`);
    }
}

// const mom = new Manager('mama', 12)
// mom.displayInfo();