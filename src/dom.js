import "bootstrap-icons/font/bootstrap-icons.css";

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
    divListProjectName.id = "list-project"
    const li = document.createElement("li");

    // divListProjectName appends
    divListProjectName.appendChild(li);

    // sidebar list project elements
    const labelProject = document.createElement("label");
    labelProject.textContent = "---MY PROJECTS---";

    // sidebar list project append
    divListProject.appendChild(labelProject);
    divListProject.appendChild(divListProjectName);

    // append to their parent
    parentElement.appendChild(divListProject);
}

const renderMainContent = () => {
    // DOM structure
    const mainContentElement = document.querySelector("#main-content");    
    mainTitle(mainContentElement);
    mainContent(mainContentElement);
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

const mainContent = (parentElement) => {
    // main content sub child    
    const mainProject = document.createElement('div');
    // set main content id        
    mainProject.id = "main-project";
    // append content       
    parentElement.appendChild(mainProject);       
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
// export
export {renderHeader, renderSidebar, renderMainContent, modalNewProjects};