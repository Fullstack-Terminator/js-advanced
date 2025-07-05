'use strict';

class Task {
    constructor(task) {
        this.task = task;
    }

    run() {
        console.log(this.task);
    }
}

class User extends Task {
    constructor(task) {
        super(task);
    }

    do() {
        return super.run();
    }
}

const user1 = new User('Помыть посуду');
user1.do();
