class Project {
    constructor (title, description) {
        this.title = title;
        this.description = description;
        this.todos = [];
    }
    // add 
    addTask (task) {
        this.todos.push(task);
        logsMessage(`${task} telah ditambahkan!.`);
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