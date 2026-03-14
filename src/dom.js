import addIconProject from "./asset/add.svg";
import "bootstrap-icons/font/bootstrap-icons.css";

// DOM structure
const container = document.querySelector("#container");
const header = document.querySelector("#header");
const content = document.querySelector("#content");

// content subchild
const sidebar = document.querySelector("#sidebar");
const mainContent = document.querySelector("#main-content");

// main content sub child
const mainTitle = document.createElement("div");
const mainProject = document.createElement('div');
    mainTitle.id = "main-title";
    mainProject.id = "main-project";

// element header
const titleHeader = document.createElement("h1");
titleHeader.classList.add("h1-shadow");
titleHeader.textContent = "TO-DO Application";

// element sidebar
const divAddProject = document.createElement("div");
const btnAddProject = document.createElement("button");
const iconAdd = document.createElement("i");
    // sidebar element's class  
    divAddProject.id = "sidebar-project";
    btnAddProject.id = "btn-add-project";
    btnAddProject.textContent = "Add Project";
    iconAdd.classList.add("bi");
    iconAdd.classList.add("bi-plus-circle-fill");
    // iconAdd.style.fill = "#5c3dbf";
divAddProject.appendChild(iconAdd);
divAddProject.appendChild(btnAddProject);

// element main content
const mainTitleText = document.createElement("h1");
mainTitleText.textContent = "PROJECT"

// append header
header.appendChild(titleHeader);

// append content
mainContent.appendChild(mainTitle);
mainContent.appendChild(mainProject);

// append sidebar
sidebar.appendChild(divAddProject);

// append main content
mainTitle.appendChild(mainTitleText);

// export
export {divAddProject};