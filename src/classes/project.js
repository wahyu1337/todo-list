import { logsMessage } from "./../logs.js";
import { Todo } from "./todo.js";

class Project {
    constructor (title) {
        this.title = title;
        this.detail = [];
    }
    // add 
    newTask (title, description, dueDate, priority, notes, checkList, isDone) {
        // add to Todo Logic
        const task = new Todo(title, description, dueDate, priority, notes, checkList, isDone);
        // push into addTask
        this.detail.push(task);
    }
    // remove 
    deleteTask (task) {
        this.detail = this.detail.filter(item => item.title !== task);
    }
    // search
    searchTask (task) {
        const findItem = this.detail.find(item => item.title === task); 
        return findItem;
    }

    // get task
    get allTask () {
        console.log(this.detail);
    }
}

export {Project};