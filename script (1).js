// Form validation
document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const taskName = document.getElementById("taskName").value.trim();
  const email = document.getElementById("email").value.trim();
  const errorMsg = document.getElementById("formError");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!taskName || !email || !emailRegex.test(email)) {
    errorMsg.textContent = "Please enter a valid task name and email.";
  } else {
    errorMsg.textContent = "";
    alert("Form submitted successfully!");
    this.reset();
  }
});

// DOM manipulation - To-Do List
function addTask() {
  const taskInput = document.getElementById("newTask");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const btn = document.createElement("button");
  btn.textContent = "Remove";
  btn.onclick = function () {
    li.remove();
  };

  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
