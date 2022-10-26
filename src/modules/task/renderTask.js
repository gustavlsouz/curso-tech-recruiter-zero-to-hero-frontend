const clickDone = require("./clickDone");

module.exports = function renderTask(task) {
  const taskListElement = document.getElementById("task-list");
  const row = document.createElement("div");

  row.className = "row";
  row.id = task.id;

  const titleElement = document.createElement("span");
  titleElement.className = "col task-title";

  const descriptionElement = document.createElement("span");
  descriptionElement.className = "col-6 task-description";

  const dateElement = document.createElement("span");
  dateElement.className = "col task-date";

  const authorElement = document.createElement("span");
  authorElement.className = "col task-author";

  const doneBy = document.createElement("span");
  doneBy.className = "col task-done-by";

  const statusElement = document.createElement("span");
  statusElement.className = "col-1 task-status";

  titleElement.textContent = task.title;
  descriptionElement.textContent = task.description;
  dateElement.textContent = task.createdAt?.substring?.(11, 19) || "";
  authorElement.textContent = task.userName;
  doneBy.textContent = task.doneBy;
  statusElement.textContent = task.doneBy ? "Feito" : "Pendente";

  const doneButtonElement = document.createElement("button");
  doneButtonElement.type = "button";
  doneButtonElement.textContent = "Feito";
  const isDone = !!task.doneBy;
  doneButtonElement.disabled = isDone;
  doneButtonElement.className = isDone
    ? "col-1 btn btn-outline-secondary task-done-button"
    : "col-1 btn btn-outline-success task-done-button";
  doneButtonElement.addEventListener("click", (event) =>
    clickDone(event, task)
  );

  row.appendChild(titleElement);
  row.appendChild(descriptionElement);
  row.appendChild(dateElement);
  row.appendChild(statusElement);
  row.appendChild(authorElement);
  row.appendChild(doneBy);
  row.appendChild(doneButtonElement);

  taskListElement.appendChild(row);
  return;
};
