// Change theme button color
document.getElementById("themeButton").addEventListener("click", function() {
    document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
});

// Mark tasks as completed
document.querySelectorAll(".complete-btn").forEach(button => {
    button.addEventListener("click", function() {
        let taskTitle = this.parentElement.querySelector("h2").innerText;
        let currentTime = new Date().toLocaleTimeString();
        alert(`You have completed the task "${taskTitle}" at ${currentTime}`);
        
        this.disabled = true;
        this.classList.replace("bg-blue-600", "bg-gray-400");

        let taskCount = document.getElementById("taskCount");
        let completedCount = document.getElementById("completedCount");
        let activityLog = document.getElementById("activityLog");

        taskCount.innerText--;
        completedCount.innerText++;

        let logEntry = document.createElement("div");
        logEntry.classList.add("bg-gray-100", "p-2", "rounded");
        logEntry.innerText = `You have completed the task "${taskTitle}" at ${currentTime}`;
        activityLog.prepend(logEntry);

        // Check if all tasks are completed
        let allDisabled = Array.from(document.querySelectorAll(".complete-btn")).every(btn => btn.disabled);
        if (allDisabled) {
            alert("Congrats!! You have completed all the current tasks.");
        }
    });
});

// Redirect to blog page
document.getElementById("blogRedirect").addEventListener("click", function() {
    window.location.href = "blogs.html";
});

// Clear activity log history
document.getElementById("clearHistory").addEventListener("click", function() {
    document.getElementById("activityLog").innerHTML = "";
});

// Get and display the current date
const currentDate = new Date();
const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);
document.getElementById('current-date').textContent = formattedDate;
