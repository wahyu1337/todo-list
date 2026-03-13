import { logsMessage } from "./../logs.js";
import { Todo } from "./todo.js";

class Project {
    constructor (title) {
        this.title = title;
        this.detail = [];
    }
    // add 
    addTask (title, description, dueDate, priority, isDone) {
        // add to Todo Logic
        const task = new Todo(title, description, dueDate, priority, isDone);
        // push into addTask
        this.detail.push(task);
        logsMessage("New Task Has been added!");
    }
    // remove 
    removeTask (task) {
        this.detail = this.detail.filter(item => item !== task);
        logsMessage(`${task} has been remove from task!`)
    }
    // search
    searchTask (task) {
        logsMessage("Searching task...")
        const findItem = this.detail.find(item => item === task) 
        logsMessage(`Task founded. ${task}`);
        return findItem;
    }
}

export {Project};