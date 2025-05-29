'use strict';

/*
    Спроектируйте класс Billing со свойством amount и методом
    calculateTotal для расчета счета. Сделайте разный calculateTotal для
    разных типов:
    - fixBilling - где нужно вернуть amount как результат
    - hourBilling - который считает amount * число часов
    - itemBilling где считается amount * число элементов

    Соблюдайте принцип открытости / закрытости!
*/

class Billing {
    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal(billing) {
        return billing.calculateTotal();
    }
}

class FixBilling extends Billing {
    constructor(amount) {
        super(amount);
    }

    calculateTotal() {
        return this.amount;
    }
}

class HourBilling extends Billing {
    constructor(amount, numberOfHour) {
        super(amount);
        this.numberOfHour = numberOfHour;
    }

    calculateTotal() {
        return this.amount * this.numberOfHour;
    }
}

class ItemBilling extends Billing {
    constructor(amount, numberOfElements) {
        super(amount);
        this.numberOfElements = numberOfElements;
    }

    calculateTotal() {
        return this.amount * this.numberOfElements;
    }
}

const billing1 = new Billing();

const fixBilling1 = new FixBilling(300);
console.log(billing1.calculateTotal(fixBilling1));

const hourBilling1 = new HourBilling(300, 5);
console.log(billing1.calculateTotal(hourBilling1));

const itemBilling1 = new ItemBilling(300, 3);
console.log(billing1.calculateTotal(itemBilling1));