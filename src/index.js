import {Project} from "./classes/project.js";

const task = new Project("Olahraga" );
task.newTask("Jogging", "Simple Run in morning", "14-03-2026", "Low");
task.newTask("GYM", "Simple Run in morning", "14-03-2026", "Low");
task.newTask("Leg Day", "Simple Run in morning", "14-03-2026", "Low");
task.deleteTask("GYM");
task.searchTask("Jogging");
task.allTask;