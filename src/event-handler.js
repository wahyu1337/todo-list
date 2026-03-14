import { divAddProject } from "./dom.js";

divAddProject.addEventListener("click", function(event) {
    console.log("click: " + event.target.closest("#sidebar-project"));
});