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

    // append sidebar
    sidebar.appendChild(divAddProject);
}

const renderMainContent = () => {
    // DOM structure
    const mainContent = document.querySelector("#main-content");

    // main content sub child
    const mainTitle = document.createElement("div");    
    const mainProject = document.createElement('div');
        // set main content id
        mainTitle.id = "main-title";
        mainProject.id = "main-project";

        // element main content
        const mainTitleText = document.createElement("h1");
        mainTitleText.textContent = "PROJECT";

        // append content
        mainContent.appendChild(mainTitle);
        mainContent.appendChild(mainProject);

        // append main content
        mainTitle.appendChild(mainTitleText);
}

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