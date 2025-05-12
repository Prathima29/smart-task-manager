document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("task-form");
  const taskList = document.getElementById("task-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("task-title").value;
    const date = document.getElementById("task-date").value;
    const priority = document.getElementById("task-priority").value;

    if (!title || !date || !priority) return;

    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
      <strong>${title}</strong><br />
      Due: ${date}<br />
      Priority: ${priority}
    `;

    taskList.appendChild(taskItem);

    // Clear inputs
    form.reset();
  });
});
