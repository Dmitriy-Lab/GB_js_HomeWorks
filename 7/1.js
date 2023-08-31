// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).


class Book {

    constructor(title = 'Книга', author = 'Автор', pages = 0) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo = () => {
        console.log(`Название книги: ${this.title}\nАвтор книги: ${this.author}\nСтраниц в книге: ${this.pages}`);
    }
}

const myBook = new Book('Дон Кихот', 'Жак Ив Кусто', 222);

myBook.displayInfo();