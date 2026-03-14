// import module
import {Project} from "./classes/project.js";
import {renderHeader, renderSidebar, renderMainContent} from "./dom.js";
import style from "./styles/style.css";
import { addProjects } from "./event-handler.js";

const task = new Project("Olahraga" );
task.newTask("Jogging", "Simple Run in morning", "14-03-2026", "Low");
task.newTask("GYM", "Simple Run in morning", "14-03-2026", "Low");
task.newTask("Leg Day", "Simple Run in morning", "14-03-2026", "Low");
task.deleteTask("GYM");
task.searchTask("Jogging");
task.allTask;

renderHeader();
renderSidebar();
renderMainContent();

// event handler
addProjects();