'use strict';

class Character {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    speak() {
        console.log(`Имя: ${this.name}, язык: ${this.language}`);
    }
}

class Ork extends Character {
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }

    hit() {
        console.log(`Получен урон ${this.weapon}!`);
    }

    speak() {
        console.log(`Имя: ${this.name}, язык: ${this.language}, урон: ${this.weapon}`);
    }
}

class Elf extends Character {
    constructor(race, name, language, spell) {
        super(race, name, language);
        this.spell = spell;
    }

    createSpell() {
        console.log(`Создано заклинание "${this.spell}"`);
    }

    speak() {
        console.log(`Имя: ${this.name}, язык: ${this.language}, заклинание: ${this.spell}`);
    }
}

const character1 = new Character('Люди', 'Владимир', 'русский');
character1.speak();

const ork1 = new Ork('Орк', 'Джон', 'оркский', 20);
ork1.speak();
ork1.hit();

const elf1 = new Elf('Эльф', 'Валера', 'эльфийский', 'Град стрел');
elf1.speak();
elf1.createSpell();