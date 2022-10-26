const loadTasks = require("./loadTasks");
const onRoute = require("../../utils/onRoute");

onRoute("/", () => {
  setInterval(loadTasks, 2500);
});
