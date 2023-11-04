// Get elements from the DOM
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
// Add a new task
addTaskButton.addEventListener("click", () => {
 const taskText = taskInput.value.trim();
 if (taskText !== "") {
 const li = document.createElement("li");
 li.innerHTML = `<span>${taskText}</span> <button class="delete-button">Delete</button>`;
 taskList.appendChild(li);
 taskInput.value = "";
 }
});
// Delete a task
taskList.addEventListener("click", (event) => {
 if (event.target.classList.contains("delete-button")) {
 event.target.parentElement.remove();
 }
});