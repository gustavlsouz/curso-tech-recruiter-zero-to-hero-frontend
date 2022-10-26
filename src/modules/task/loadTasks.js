const { BACKEND_URL } = require("../../config");
const cleanTasks = require("./cleanTasks");
const renderTask = require("./renderTask");
const renderTaskFields = require("./renderTaskFields");

module.exports = async function loadTasks(force = false) {
  console.log("task refreshing");
  const params = new URLSearchParams();
  const teamName = localStorage.getItem("team");
  params.append("team", teamName);
  const url = BACKEND_URL.concat("/task?").concat(params.toString());

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Bypass-Tunnel-Reminder", "true");
  headers.append("User-Agent", "agent");
  headers.append("x-user-name", localStorage.getItem("user"));

  const response = await fetch(url, {
    method: "GET",
    headers,
  });
  if (!response.ok) {
    const contentError = await response.text();
    console.error(contentError);
    return;
  }
  const tasks = await response.json();

  cleanTasks();
  renderTaskFields();
  tasks.forEach((task) => {
    renderTask(task);
  });
  return;
};
