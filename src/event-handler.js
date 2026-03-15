// load add project modal
import { modalNewProject } from "./dom.js";

// load divAddProject var from  function
const addProjects = () => {
    // sidebar add project button
    const divAddProject = document.querySelector("#sidebar-project");
    divAddProject.addEventListener("click", function(e){
        if (e.target.closest("#sidebar-project") !== null) {
            modalNewProject();
            console.log("adding new project...");
        } else {
            console.log("NULL");
        }
    })
}

export {addProjects};