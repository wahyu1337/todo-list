// priority color modern palette

const setPriorityColor = (priority, titleE1, descriptionE1, dueDateE1, dueDateValue) => {
    // Reset colors first (optional but good practice)
    titleE1.style.color = "";
    descriptionE1.style.color = "";
    dueDateE1.style.color = "";

    if (priority === "p0") {
        // HIGH - Neon Red/Rose
        titleE1.style.color = "#fb7185"; 
        descriptionE1.style.color = "rgba(251, 113, 133, 0.8)";
        dueDateE1.textContent = `Due Date: ${dueDateValue}`;
        dueDateE1.style.color = "#fb7185";
        titleE1.style.textShadow = "0 0 10px rgba(251, 113, 133, 0.3)";
    } else if (priority === "p1")  {
        // NORMAL - Amber/Yellow
        titleE1.style.color = "#fbbf24";
        descriptionE1.style.color = "rgba(251, 191, 36, 0.8)";
        dueDateE1.textContent = `Due Date: ${dueDateValue}`;
        dueDateE1.style.color = "#fbbf24";
    } else {
        // LOW - Emerald/Green or default cyan
        titleE1.style.color = "#34d399";
        descriptionE1.style.color = "rgba(52, 211, 153, 0.8)";
        dueDateE1.textContent = `Due Date: ${dueDateValue}`;
        dueDateE1.style.color = "#34d399";   
    }
}

export {setPriorityColor};
