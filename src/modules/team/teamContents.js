const onRoute = require("../../utils/onRoute");

function setTeamNameLabel() {
  const teamNameLabelElement = document.getElementById("team-name-label");
  if (!teamNameLabelElement) {
    return;
  }
  const teamName = localStorage.getItem("team");
  teamNameLabelElement.textContent = teamName || "desconhecido";
}

function setUserNameLabel() {
  const userNameLabelElement = document.getElementById("user-name-label");
  if (!userNameLabelElement) {
    return;
  }
  const userName = localStorage.getItem("user");
  userNameLabelElement.textContent = userName || "desconhecido";
}

onRoute("/", () => {
  setTeamNameLabel();
  setUserNameLabel();
});
