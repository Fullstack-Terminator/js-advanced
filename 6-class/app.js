'use strict';

/*
    Создайте класс Car у котрого есть марка, модель и пробег (все
    свойства приватные, задаются в конструкторе).
    - Сделайте для него возможность менять пробег через get и set.
    - Добавьте метод info, котрый выводит в консоль марку, модели
    и пробег.
*/

class Car {
    #make;
    #model;
    #run;
    constructor(make, model, run) {
        this.#make = make;
        this.#model = model;
        this.#run = run;
    }

    set run(value) {
        this.#run = value;
    }

    get runLog() {
        return this.#run;
    }

    info() {
        return `Марка: ${this.#make}, модель: ${this.#model}, пробег: ${this.#run}`
    }
}

const car1 = new Car('Audi', 'A6', 45000);
car1.set(345000);
console.log(car1.info());