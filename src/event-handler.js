// load add project modal
import { modalNewProjects } from "./dom.js";
import { currentState } from "./state.js";
import { logsMessage } from "./logs.js";

// load divAddProject var from  function
const addModalBox = () => {
    // sidebar add project button
    const divAddProject = document.querySelector("#sidebar-project");
    divAddProject.addEventListener("click", function(e){
        if (e.target.closest("#sidebar-project") !== null) {
            modalNewProjects();
            modalBox();
            console.log("adding new project...");
        } else {
            console.log("NULL");
        }
    })
}

const modalBox = () => {
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
        // avoid reloading page
        e.preventDefault();
        // project name
        const projectName = document.getElementById("project-name").value;
        // conditional logs
        if (projectName !== "") {
            currentState(projectName);
            logsMessage("New project added!");
            alert("Projects added!");
            form.reset();
        } else {
            logsMessage("Input's empty / NULL");
        }
    });
}

export {addModalBox, modalBox};