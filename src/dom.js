// DOM structure
const container = document.querySelector("#container");
const header = document.querySelector("#header");
const content = document.querySelector("#content");

// content subchild
const sidebar = document.querySelector("#sidebar");
const mainContent = document.querySelector("main-content");

// element header
const titleHeader = document.createElement("h2");
titleHeader.textContent = "WAYS PROJECT";

// append
header.appendChild(titleHeader);