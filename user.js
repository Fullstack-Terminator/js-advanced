import { Task } from "./task.js";

export class User extends Task {
    constructor(task) {
        super(task);
    }

    do() {
        return super.run();
    }
}