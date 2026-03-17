// import module
import {renderHeader, renderSidebar, renderMainContent} from "./dom.js";
import style from "./styles/style.css";
import { addNewProjects, addNewTasks, AddNewTasks } from "./event-handler.js";
import {format, compareAsc} from "date-fns";
import { logsMessage } from "./logs.js";

renderHeader();
renderSidebar();
renderMainContent();

// add project
addNewProjects();
addNewTasks();

format(new Date(), "dd-MM-yyy");

const dates = new Date(2026, 2, 17);
logsMessage(dates);