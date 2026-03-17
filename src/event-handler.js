// load add project modal
import { modalNewProjects, addListProject } from "./dom.js";
import { addProject, projects } from "./state.js";
import { logsMessage } from "./logs.js";

// load divAddProject var from  function
const addNewProjects = () => {
    // sidebar add project button
    const divAddProject = document.querySelector("#sidebar-project");
    divAddProject.addEventListener("click", function(e){
        if (e.target.closest("#sidebar-project") !== null) {
            modalNewProjects();
            newProjectBox();
            console.log("adding new project...");
        } else {
            console.log("NULL");
        }
    })
}


const newProjectBox = () => {
    // sidebar project's dom
    const form = document.querySelector("#form-input");
    const overlay = document.querySelector("#overlay");
    const btnClose = document.querySelector("#btn-close");
    const btnSubmit = document.querySelector("#btn-submit");

    // event listener
    btnClose.addEventListener("click", function() {
        logsMessage("Closing add project box...");
        overlay.remove();
    });

    btnSubmit.addEventListener("click", function(e) {
        // prevent default behavior
        e.preventDefault();
        // project name
        const projectName = document.getElementById("project-name").value;
        const getListProject = document.querySelector("#list-project");
        getListProject.textContent = "";
        // conditional logs
        if (projectName !== "") {
            addProject(projectName);
            addListProject(projects);
            logsMessage("New project added!");
            alert("Projects added!");
            form.reset();
        } else {
            logsMessage("Input's empty / NULL");
        }
    });
}

export {addNewProjects, newProjectBox};