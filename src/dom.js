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

// element main content
const mainTitleText = document.createElement("h1");
mainTitleText.textContent = "PROJECT"

// append header
header.appendChild(titleHeader);

// append content
mainContent.appendChild(mainTitle);
mainContent.appendChild(mainProject);

// append sidebar

// append main content
mainTitle.appendChild(mainTitleText);