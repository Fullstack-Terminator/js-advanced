'use strict';

/*
    Создать базовый класс Персонажа с параметрами: раса, имя, язык и
    метод - говорить (выводит язык и имя в консоль).
    Создать класс Орка, который наследуется от Персонажа, у которого
    есть оружие и который имееет метод - удара.
    Создать класс Эльфа, который наследуется от Персонажа, у
    которого есть тип заклинаний и метод - создать заклинание.

    Использовать прототипное наследование. Все методы просто
    выводят что-то в консоль.
*/

const Character = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;

    this.speak = function() {
        console.log(`Имя: ${this.name}, язык: ${this.language}`);
    }
}

const Ork = function(race , name, language, weapon) {
    Character.call(this, race , name, language, weapon);
    this.weapon = weapon;
}

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;

Ork.prototype.hit = function() {
    console.log(`Получен урон ${this.weapon}!`)
}

const Elf = function(race, name, language, spell) {
    Character.call(this, race, name, language, spell);
    this.spell = spell;
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function() {
    console.log(`Создано заклинание "${this.spell}"`)
}

const character1 = new Character('Люди', 'Владимир', 'русский');
character1.speak();

const ork1 = new Ork('Орк', 'Джон', 'оркский', 20);
ork1.speak();
ork1.hit();

const elf1 = new Elf('Эльф', 'Валера', 'эльфийский', 'Град стрел');
elf1.speak();
elf1.createSpell();