// current state data
import { Project } from "./classes/project.js";
import { logsProject } from "./logs.js";

const projects = [];

const currentState = (name) => {
    const project = new Project(name);
    projects.push(project);
    logsProject(projects);
}

export {currentState};