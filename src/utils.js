// priority color

const setPriorityColor = (priority, titleE1, descriptionE1, dueDateE1, dueDateValue) => {
    if (priority === "p0") {
        // priority condition
        // HIGH
        titleE1.style.color = "red";
        descriptionE1.style.color = "red";
        dueDateE1.textContent = `Due Date: ${dueDateValue}`;
        dueDateE1.style.color = "red";
    } else if (priority === "p1")  {
        // NORMAL
        titleE1.style.color = "rgb(201, 201, 67)";
        descriptionE1.style.color = "rgb(201, 201, 67)";
        dueDateE1.textContent = `Due Date: ${dueDateValue}`;
        dueDateE1.style.color = "rgb(201, 201, 67)";
    } else {
        // black
        titleE1.style.color = "rgb(0,0,0)";
        descriptionE1.style.color = "rgb(0,0,0)";
        dueDateE1.textContent = `Due Date: ${dueDateValue}`;
        dueDateE1.style.color = "rgb(0,0,0)";   
    }
}

export {setPriorityColor};