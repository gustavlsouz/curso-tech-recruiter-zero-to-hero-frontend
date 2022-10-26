module.exports = function renderTaskFields() {
  const taskListElement = document.getElementById("task-list");
  if (!taskListElement) {
    return;
  }
  const row = document.createElement("div");

  row.className = "row";

  const titleElement = document.createElement("span");
  titleElement.className = "col task-title-field field";

  const descriptionElement = document.createElement("span");
  descriptionElement.className = "col-6 task-description-field field";

  const dateElement = document.createElement("span");
  dateElement.className = "col task-date-field field";

  const authorElement = document.createElement("span");
  authorElement.className = "col task-author-field field";

  const doneBy = document.createElement("span");
  doneBy.className = "col task-done-by-field field";

  const statusElement = document.createElement("span");
  statusElement.className = "col-1 task-status-field field";

  titleElement.textContent = "Titulo";
  descriptionElement.textContent = "Descrição";
  dateElement.textContent = "Horário";
  authorElement.textContent = "Autor";
  doneBy.textContent = "Realizado por";
  statusElement.textContent = "Status";

  const buttonField = document.createElement("span");
  buttonField.className = "col-1 task-done-button-field field";

  row.appendChild(titleElement);
  row.appendChild(descriptionElement);
  row.appendChild(dateElement);
  row.appendChild(statusElement);
  row.appendChild(authorElement);
  row.appendChild(doneBy);
  row.appendChild(buttonField);

  taskListElement.appendChild(row);
  return;
};
