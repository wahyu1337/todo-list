// load divAddProject var from  function
const eventHandler = () => {
    // sidebar add project button
    const divAddProject = document.querySelector("#sidebar-project");
    divAddProject.addEventListener("click", function(e){
        if (e.target.closest("#sidebar-project") !== null) {
                console.log("adding new project...");
        } else {
                console.log("NULL");
        }
    })
}

export {eventHandler};