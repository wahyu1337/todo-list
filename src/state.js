// current state data
import { Project } from "./classes/project.js";
import { Todo } from "./classes/todo.js";
import { logsMessage } from "./logs.js";

const projects = [];
const tasks = [];

const addProjects = (name) => {
    const project = new Project(name);
    projects.push(project);
    logsMessage(projects);
};

const addTasks = (name, description, dueDate, priority, notes) => {
    const task = new Todo(name, description, dueDate, priority, notes);
    tasks.push(task);
    logsMessage(tasks);
};

export {projects, tasks, addProjects, addTasks};