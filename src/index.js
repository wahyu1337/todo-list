// import module
import {renderHeader, renderSidebar, renderMainContent} from "./dom.js";
import style from "./styles/style.css";
import { addNewProjects, addNewTasks, taskDetails } from "./event-handler.js";
import {format, compareAsc} from "date-fns";
import { logsMessage } from "./logs.js";
import { addProjects, addTasks } from "./state.js";

renderHeader();
renderSidebar();
renderMainContent();

// add project for render box
addNewProjects();
addNewTasks();

format(new Date(), "dd-MM-yyy");

const dates = new Date(2026, 2, 17);
logsMessage(dates);