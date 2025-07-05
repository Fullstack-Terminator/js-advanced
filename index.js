'use strict';

import { Task } from "./task.js";
import { User } from "./user.js";

const task1 = new Task('Написать код');
const user1 = new User('Помыть посуду');
user1.do();