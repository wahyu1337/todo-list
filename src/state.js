// current state data
import { Project } from "./classes/project.js";

const projects = [];

const currentState = (name) => {
    const project = new Project(name);
    projects.push(project);
}

export {currentState};