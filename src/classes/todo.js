import { logsMessage } from "./../logs.js";

class Todo {
    // constructor
    constructor(title, description, dueDate, priority, notes = "", checkList = [], isDone = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = isDone;
        this.notes = notes;
        this.checkList = checkList;
    }
    // Task Action
    completed() {
        // change action
        this.isDone = !this.isDone;
        // logs
        if (!this.isDone){
            logsMessage("Task isn't done.");
        } else {
            logsMessage("Task is completed!.");
        }
    }
    // check completed item
    addCheckedItem (item) {
        this.checkList.push(item)
    }
}

export {Todo};