const loadTasks = require("./loadTasks");
const renderTaskFields = require("./renderTaskFields");
const onRoute = require("../../utils/onRoute");

onRoute("/", () => {
  renderTaskFields();
  loadTasks();
});
