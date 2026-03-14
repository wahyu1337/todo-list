    import "bootstrap-icons/font/bootstrap-icons.css";


    const renderHeader = () => {
        // DOM structure
        const container = document.querySelector("#container");
        const header = document.querySelector("#header");

        // element header
        const titleHeader = document.createElement("h1");
        titleHeader.classList.add("h1-shadow");
        titleHeader.textContent = "TO-DO Application";

        // append header
        header.appendChild(titleHeader);
    }

    const renderSidebar = () => {
        const container = document.querySelector("#container");
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
        const content = document.querySelector("#content");
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
    // export
    export {renderHeader, renderSidebar, renderMainContent};