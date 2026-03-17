// load add project modal
import { modalNewProjects, addListProject, modalNewTasks } from "./dom.js";
import { addProject, projects } from "./state.js";
import { logsMessage } from "./logs.js";

// event listener for new project (sidebar)
const addNewProjects = () => {
    // sidebar add project button
    const divAddProject = document.querySelector("#sidebar-project");
    divAddProject.addEventListener("click", function(e){
        if (e.target.closest("#sidebar-project") !== null) {
            modalNewProjects();
            newProjectBox();
            logsMessage("adding new project...");
        } else {
            logsMessage("NULL");
        };
    });
};

// event listener for new task in project content
const addNewTasks = () => {
    // main project add tasks
    const divAddTask = document.querySelector("#divAddTask");
    divAddTask.addEventListener("click", function(e) {
        if (e.target.closest("#divAddTask") !== null) {
            modalNewTasks();
            logsMessage(e.target + "clicked");
        } else {
            logsMessage(console.error())
        }
    });
};

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
};

export {addNewProjects, addNewTasks, newProjectBox};