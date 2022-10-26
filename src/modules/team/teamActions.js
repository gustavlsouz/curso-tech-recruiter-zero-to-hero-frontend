const DocumentUtil = require("../../utils/DocumentUtil");
const config = require("../../config");

const { BACKEND_URL } = config;

const documentUtil = new DocumentUtil();

document
  .getElementById("upsert-team-button")
  ?.addEventListener("click", async function upsertTeam() {
    console.log();
    console.log("Enviando time para o backend");

    const teamPayload = {
      name: documentUtil.getTextFromId("team-input"),
      userName: documentUtil.getTextFromId("team-user-input"),
    };

    const body = JSON.stringify(teamPayload);

    console.log("body", body);

    const headers = new Headers();
    headers.append("Bypass-Tunnel-Reminder", "true");
    headers.append("User-Agent", "agent");
    headers.append("Content-Type", "application/json");
    headers.append("x-user-name", localStorage.getItem("user"));

    headers.forEach((value, key) =>
      console.log(`request headers -> ${key}: ${value}`)
    );

    console.log("Enviando informação de time para o backend");

    try {
      const response = await fetch(BACKEND_URL.concat("/team"), {
        method: "PATCH",
        body,
        headers,
      });
      console.log(response.status);
      console.log(response.ok);
      console.log(await response.text());
      response.headers.forEach((value, key) =>
        console.log(`response headers -> ${key}: ${value}`)
      );
      console.log("Enviadas informações de time para o backend");
      localStorage.setItem("team", teamPayload.name);
      localStorage.setItem("user", teamPayload.userName);
      window.location.href = "/";
    } catch (error) {
      console.log("Ops! Tivemos um erro ao enviar o conteúdo para o backend");
      console.error(error);
    }
  });

document
  .getElementById("sign-out")
  ?.addEventListener("click", async function signOutFromTeam() {
    localStorage.removeItem("team");
    localStorage.removeItem("user");
    window.location.href = "/team";
  });
