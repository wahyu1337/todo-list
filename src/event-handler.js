// load add project modal
import { modalNewProjects, addListProject, modalNewTasks, mainProjectTasks } from "./dom.js";
import { addProjects, addTasks, projects } from "./state.js";
import { logsMessage } from "./logs.js";
import { setPriorityColor } from "./utils.js";

// event listener for new project (sidebar)
const addNewProjects = () => {
    // sidebar add project button
    const divAddProject = document.querySelector("#sidebar-project");
    divAddProject.addEventListener("click", function(e){
        if (e.target.closest("#sidebar-project") !== null) {
            modalNewProjects();
            newProjectsBox();
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
            newTasksBox();
            logsMessage(e.target + "clicked");
        } else {
            logsMessage(console.error())
        }
    });
};

const newProjectsBox = () => {
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
            addProjects(projectName);
            addListProject(projects);
            logsMessage("New project added!");
            alert("Projects added!");
            form.reset();
        } else {
            logsMessage("Input's empty / NULL");
        }
    });
};

const newTasksBox = () => {
    // overlay and button close logic
    const overlay = document.querySelector("#overlayTasks");
    const btnClose = document.querySelector("#btn-close");
    const btnSubmit = document.querySelector("#btn-submit");
     // form manipulation for resetting after submit
    const form = document.querySelector("#form-inputTasks");

    // close button
    btnClose.addEventListener("click", function() {
        logsMessage("Closing add task box...");
        overlay.remove();
    });

    // submit button
    btnSubmit.addEventListener("click", function(e) {
        // prevent default behavior
        e.preventDefault();
        // get each task form value
        const titleValue = document.querySelector("#title").value;
        const descriptionValue = document.querySelector("#description").value;
        const dueDateValue = document.querySelector("#dueDate").value;
        const priorityValue = document.querySelector("#priority").value;
        const notesValue = document.querySelector("#notes").value;
        mainProjectTasks(titleValue, descriptionValue, dueDateValue, priorityValue, notesValue);
        // set elements dom that been render.
        const titleElement = document.querySelectorAll(".taskTitle");
        const descriptionElement = document.querySelectorAll(".taskDescription");
        const dueDateElement = document.querySelectorAll(".taskDueDate");
        addTasks(titleValue, descriptionValue, dueDateValue, priorityValue, notesValue);
        // ----------------------------------------------
        // logs message after submit.
        logsMessage(`New Task Added
Title: ${titleValue},
Description: ${descriptionValue},
Due Date: ${dueDateValue},
Priority Level: ${priorityValue},
Notes: ${notesValue}
                `);                
        // --------------------------------------------------        
        // change color text depend on the priority
       setPriorityColor(priorityValue, titleElement[titleElement.length - 1], descriptionElement[descriptionElement.length - 1], dueDateElement[dueDateElement.length - 1], dueDateValue[dueDateValue.length - 1]);
        form.reset();
    });
};

export {addNewProjects, addNewTasks};