// import module
import {Project} from "./classes/project.js";
import {renderHeader, renderSidebar, renderMainContent, modalNewProject} from "./dom.js";
import style from "./styles/style.css";
import { addModalBox, modalBox } from "./event-handler.js";

renderHeader();
renderSidebar();
renderMainContent();

// event handler
addModalBox();