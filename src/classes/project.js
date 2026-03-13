import { logsMessage } from "./../logs.js";
import { Todo } from "./todo.js";

class Project {
    constructor (title, description) {
        this.title = title;
        this.description = description;
        this.todos = [];
    }
    // add 
    addTask (title, description, dueDate, priority, isDone) {
        // add to Todo Logic
        const task = new Todo(title, description, dueDate, priority, isDone);
        // push into addTask
        this.todos.push(task);
    }
    // remove 
    removeTask (task) {
        this.todos = this.todos.filter(item => item !== task);
    }
    // search
    searchTask (task) {
        return this.todos.find(item => item === task);
    }
}