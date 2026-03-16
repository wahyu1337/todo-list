// import module
import {renderHeader, renderSidebar, renderMainContent} from "./dom.js";
import style from "./styles/style.css";
import { addProjects } from "./event-handler.js";

renderHeader();
renderSidebar();
renderMainContent();

// event handler
addProjects();