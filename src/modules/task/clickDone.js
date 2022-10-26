const { BACKEND_URL } = require("../../config");

module.exports = async function clickDone(event, task) {
  const doneButtonElement = event.target;
  doneButtonElement.disabled = true;
  try {
    const url = BACKEND_URL.concat("/task/done?");

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Bypass-Tunnel-Reminder", "true");
    headers.append("User-Agent", "agent");
    headers.append("x-user-name", localStorage.getItem("user"));

    const body = JSON.stringify({
      taskId: task.id,
      teamName: localStorage.getItem("team"),
      userName: localStorage.getItem("user"),
    });

    const response = await fetch(url, {
      method: "PATCH",
      body,
      headers,
    });
    const data = await response.json();
    doneButtonElement.className =
      "col-1 btn btn-outline-secondary task-done-button";
    alert(data?.message || "");
  } catch {
    doneButtonElement.disabled = false;
  }
};
