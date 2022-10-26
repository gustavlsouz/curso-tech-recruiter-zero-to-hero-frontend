const config = require("../../config");

const { BACKEND_URL } = config;

async function addTask() {
  console.log();
  console.log("Preparando nova task para enviar ao backend");

  const titleElement = document.getElementById("new-task-title-input");
  const descriptionElement = document.getElementById(
    "new-task-description-input"
  );

  const newTask = {
    id: null,
    doneBy: "",
    title: titleElement?.value,
    description: descriptionElement?.value,
    userName: localStorage.getItem("user"),
    teamName: localStorage.getItem("team"),
  };

  const body = JSON.stringify(newTask);

  console.log("body", body);

  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Bypass-Tunnel-Reminder", "true");
  headers.append("User-Agent", "agent");
  headers.append("x-user-name", localStorage.getItem("user"));

  headers.forEach((value, key) =>
    console.log(`request headers -> ${key}: ${value}`)
  );

  console.log("Enviando a task para o backend");

  try {
    const response = await fetch(BACKEND_URL.concat("/task"), {
      method: "POST",
      body,
      headers,
    });
    console.log(response.status);
    console.log(response.ok);
    if (!response.ok) {
      const error = await response.text();
      console.error(error);
      throw new Error(error);
    }
    const data = await response.json();
    console.log(data);
    response.headers.forEach((value, key) =>
      console.log(`response headers -> ${key}: ${value}`)
    );
    console.log("Nova task cadastrada no backend!");

    titleElement.value = "";
    descriptionElement.value = "";

    return alert("Nova task cadastrada no backend!");
  } catch (error) {
    console.log("Ops! Tivemos um erro ao enviar o conteúdo para o backend");
    console.error(error);
  }
}

document.getElementById("add-task-button")?.addEventListener("click", addTask);
module.exports = addTask;
