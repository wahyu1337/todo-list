import "bootstrap-icons/font/bootstrap-icons.css";
import {projects} from "./state.js"
import {format, compareAsc} from "date-fns";
import { logsMessage } from "./logs.js";
import { setPriorityColor } from "./utils.js";

const renderHeader = () => {
    // DOM structure
    const header = document.querySelector("#header");

    // element header
    const titleHeader = document.createElement("h1");
    titleHeader.classList.add("h1-shadow");
    titleHeader.textContent = "TO-DO Application";

    // append header
    header.appendChild(titleHeader);
}

const renderSidebar = () => {
    const sidebar = document.querySelector("#sidebar");
    addNewProject(sidebar);
    listProject(sidebar);
}

const addNewProject = (parentElement) => {
     // create element button sidebar
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

   
    // append sidebar
    parentElement.appendChild(divAddProject);
}

const listProject = (parentElement) =>  {
    // create element list project
    const divListProject = document.createElement("div");
    divListProject.id = "sidebar-list-project";

    const divListProjectName = document.createElement("div");
    divListProjectName.id = "list-project";
    // sidebar list project elements
    const labelProject = document.createElement("p");
    labelProject.textContent = "---MY PROJECTS---";

    // sidebar list project append
    divListProject.appendChild(labelProject);
    divListProject.appendChild(divListProjectName);

    // append to their parent
    parentElement.appendChild(divListProject);
}

const addListProject = (projects) => {
    // create element
    const divList = document.querySelector("#list-project")
    
    projects.forEach(project => {
        // create list element
        const li = document.createElement("li");
        // make list into project title's name
        li.textContent = project.title;
        
        // append
        divList.appendChild(li);    
    });
}

const renderMainContent = () => {
    // DOM structure
    const mainContentElement = document.querySelector("#main-content");
    mainTitle(mainContentElement);
    mainProjectContent(mainContentElement);
    addNewTasks(mainContentElement);
}

const mainTitle = (parentElement) => {
    // Parent sub child
    const title = document.createElement("div");    
        title.id = "main-title";
    // main content title 
    const titleText = document.createElement("h1");
    titleText.textContent = "PROJECT";

    // append
    title.appendChild(titleText);
    parentElement.appendChild(title);
}

const mainProjectContent = (parentElement) => {
    // main content sub child    
    const mainProject = document.createElement('div');
    // set main content id        
    mainProject.id = "main-project";
    // append content       
    parentElement.appendChild(mainProject);

}

const mainProjectTasks = (titleValue, descriptionValue, dueDate, priorityValue = "", notesValue = "") => {
    // main parent
    const mainProject = document.querySelector("#main-project");

    // sub parent
    const divTaskItem = document.createElement("div");
    divTaskItem.id = "divTaskItem";
    // element
    const divEditDelete = document.createElement("div");
    divEditDelete.id = "edit-delete";
    const editBtn = document.createElement("i");
    editBtn.id = "edtBtn";
    editBtn.classList.add("bi");
    editBtn.classList.add("bi-pencil-square");
    const deleteBtn = document.createElement("i");
    deleteBtn.id = "deleteTasks"
    deleteBtn.classList.add("bi");
    deleteBtn.classList.add("bi-trash");
    let taskTitle = document.createElement("h3");
    // taskTitle.id = "taskTitle";
    taskTitle.classList.add("taskTitle");
    taskTitle.textContent = titleValue;
    let taskDescription = document.createElement("p");
    taskDescription.id = "taskDescription";
    taskDescription.classList.add("taskDescription");
    taskDescription.textContent = descriptionValue;
    let taskDueDate = document.createElement("p");
    taskDueDate.id = "taskDueDate";
    taskDueDate.classList.add("taskDueDate");
    taskDueDate.textContent = dueDate;
    const checkedButton = document.createElement('input');
    checkedButton.type = "checkbox";
    // append element to their sub parent
    divTaskItem.appendChild(divEditDelete);
        divEditDelete.appendChild(editBtn);
        divEditDelete.appendChild(deleteBtn);
    divTaskItem.appendChild(taskTitle);
    divTaskItem.appendChild(taskDescription);
    divTaskItem.appendChild(taskDueDate);
    divTaskItem.appendChild(checkedButton);

    // fetch the current task data & for edit 
    let currentTitle = titleValue;
    let currentDescription = descriptionValue;
    let currentDueDate = dueDate;
    let currentPriority = priorityValue;
    let currentNotes = notesValue;

    // listener for delete button 
    deleteBtn.addEventListener("click", function() {
        deleteBtn.parentElement.parentElement.remove();
        logsMessage(`deleting ${taskTitle.textContent}`);
    });

    // listener for edit button
    editBtn.addEventListener("click", function() {
        modalNewTasks();
        const btnClose = document.querySelector("#btn-close");
        const overlayTasks = document.querySelector("#overlayTasks")
        // listener for btn close
        btnClose.addEventListener("click", function() {
            overlayTasks.remove();
        });

        document.querySelector("#title").value = currentTitle;
        document.querySelector("#description").value = currentDescription;
        document.querySelector("#dueDate").value = currentDueDate; 
        document.querySelector("#priority").value = currentPriority;
        document.querySelector("#notes").value = currentNotes;

        // submit for data changes
        const btnSubmit = document.querySelector("#btn-submit");
        btnSubmit.addEventListener("click", function (e) {
            // prevent default behavior
            e.preventDefault();
            // re-render the text content after get some changes.
            currentTitle = document.querySelector("#title").value;
            currentDescription = document.querySelector("#description").value;
            currentDueDate = document.querySelector("#dueDate").value;
            currentPriority = document.querySelector("#priority").value
            currentNotes = document.querySelector("#notes").value;

            // re-change the content in webpage.
            taskTitle.textContent = currentTitle;
            taskDescription.textContent = currentDescription;
            taskDueDate.textContent = currentDueDate;


            // priority color conditional
            setPriorityColor(currentPriority, taskTitle, taskDescription, taskDueDate, currentDueDate);

            // logs the message after submit
            logsMessage(`New Task Added
Title: ${currentTitle},
Description: ${currentDescription},
Due Date: ${currentDueDate},
Priority Level: ${currentPriority},
Notes: ${currentNotes}`);       
        });
    });
    // appen sub parent to  main parent
    mainProject.appendChild(divTaskItem);
}

const addNewTasks = (parentElement) => {
    // create tructure.
    const divAddTask = document.createElement("div");
    divAddTask.id = "divAddTask";

    // create button
    const btnAddTask = document.createElement("button");
    btnAddTask.id = "btnAddTask";
    btnAddTask.textContent = "Add Task";

    // create icon
    const iconAdd = document.createElement("i");
    iconAdd.classList.add("bi");
    iconAdd.classList.add("bi-plus-lg");

    // append
    parentElement.appendChild(divAddTask);
    divAddTask.appendChild(iconAdd);
    divAddTask.appendChild(btnAddTask);
}

// pop modal for add  projects
const modalNewProjects = () => {
    const content = document.querySelector("#content");
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    const modalBox = document.createElement("div");
    modalBox.id = "modal-box";
        // append
        content.appendChild(overlay);
        overlay.appendChild(modalBox);
    
    // modal box element
    // form input
    const formInput = document.createElement("form");
    formInput.id = "form-input";
    // btn close
    const btnClose = document.createElement("button");
    btnClose.id = "btn-close";
    btnClose.type = "button";
    btnClose.textContent = "X";
    // label
    const projectLabel = document.createElement("label");
    projectLabel.htmlFor = "project-name";
    projectLabel.textContent = "Project Title";
    const inputProjectName = document.createElement("input");
    inputProjectName.id = "project-name";
    inputProjectName.required = true;
    inputProjectName.type = "text";
    const btnSubmit = document.createElement("button");
    btnSubmit.id = "btn-submit";
    btnSubmit.type = "submit";
    btnSubmit.textContent = "SUBMIT";
        // append 
        modalBox.appendChild(formInput);
        formInput.appendChild(btnClose);
        formInput.appendChild(projectLabel);
        formInput.appendChild(inputProjectName);
        formInput.appendChild(btnSubmit);
}

const modalNewTasks = () => {
    // parent element to appending later
    const content = document.querySelector("#content");
    const overlay = document.createElement("div");
    overlay.id = "overlayTasks";
    const modalBox = document.createElement("div");
    modalBox.id = "modal-boxTasks";

    content.appendChild(overlay);
    overlay.appendChild(modalBox);
    // format for time
    format(new Date(), "dd-MM-yyy");
    // priority holder
    const priorityValue = [
        {id: "p0", name: "HIGH"},
        {id: "p1", name: "NORMAL"},
        {id: "p3", name: "LOW"}
    ];

    // forms
    const taskForm = document.createElement("form");
    taskForm.id = "form-inputTasks"
    // create the element
    // title
    const divTitle = document.createElement("div");
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "TITLE";
    titleLabel.htmlFor = "title";
    const inputTitle =  document.createElement("input");
    inputTitle.type = "text";
    inputTitle.id = "title";
    inputTitle
    inputTitle.required = true;
    divTitle.id = "divTitle";
    divTitle.appendChild(titleLabel);
    divTitle.appendChild(inputTitle);
    // description
    const divDescription = document.createElement("div");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "DESCRIPTION";
    descriptionLabel.htmlFor = "description";
    const inputDescription = document.createElement("input");
    inputDescription.type = "text";
    inputDescription.id = "description";
    inputDescription.required = true;
    divDescription.id = "divDescription";
    divDescription.appendChild(descriptionLabel);
    divDescription.appendChild(inputDescription);
    // due date
    const divDueDate = document.createElement("div");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date";
    dueDateLabel.htmlFor = "dueDate";
    const inputDueDate = document.createElement("input");
    inputDueDate.type = "date";
    inputDueDate.id = "dueDate";
    divDueDate.id = "divDueDate";
    divDueDate.appendChild(dueDateLabel);
    divDueDate.appendChild(inputDueDate);
    // priority selection
    const divPriority = document.createElement("div");
    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "PRIORITY";
    priorityLabel.htmlFor = "priority"
    const inputPriority =  document.createElement("select");
    inputPriority.id = "priority";
    for (let i = 0; i < priorityValue.length; i++) {
        const priorityOption = document.createElement("option");
        priorityOption.value = priorityValue[i].id;
        priorityOption.textContent = priorityValue[i].name;
        // append
        inputPriority.appendChild(priorityOption);
    }
    divPriority.id = "divPriority";
    divPriority.appendChild(priorityLabel);
    divPriority.appendChild(inputPriority);
    // notes
    const divNotes = document.createElement("div");
    const notesLabel = document.createElement("label");
    notesLabel.textContent = "NOTES(Optional)";
    notesLabel.htmlFor = "notes";
    const inputNotes = document.createElement("input");
    inputNotes.type = "text";
    inputNotes.id = "notes";
    divNotes.id = "divNotes"
    divNotes.appendChild(notesLabel);
    divNotes.appendChild(inputNotes);

    // button submit & close
    const btnClose = document.createElement("button");
    btnClose.type = "button";
    btnClose.textContent = "X";
    btnClose.id = "btn-close";
    const btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "SUBMIT";
    btnSubmit.id = "btn-submit";

    // append from parent
    modalBox.appendChild(taskForm);
    // append task form element
    taskForm.appendChild(btnClose);
    taskForm.appendChild(divTitle);
    taskForm.appendChild(divDescription);
    taskForm.appendChild(divDueDate);
    taskForm.appendChild(divPriority);
    taskForm.appendChild(divNotes);
    taskForm.appendChild(btnSubmit);
}

// export
export {renderHeader, renderSidebar, addListProject, renderMainContent, mainProjectTasks, modalNewProjects, modalNewTasks};