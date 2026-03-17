// import module
import {renderHeader, renderSidebar, renderMainContent} from "./dom.js";
import style from "./styles/style.css";
import { addNewProjects } from "./event-handler.js";

renderHeader();
renderSidebar();
renderMainContent();

// add project
addNewProjects();