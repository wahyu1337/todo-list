// current state data
import { Project } from "./classes/project.js";
import { Todo } from "./classes/todo.js";
import { logsMessage } from "./logs.js";

const projects = [];
let activeProject = null;

const addProjects = (name) => {
    const project = new Project(name);
    projects.push(project);
    logsMessage(projects);
};

const getActiveProject = () => {
    return activeProject;
};

const setActiveProject = (project) => {
    activeProject = project;
    if (project) {
        logsMessage(`Active project set to: ${project.title}`);
    }
};

export {projects, addProjects, getActiveProject, setActiveProject};