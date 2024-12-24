import { getArrItem, renderTasks, clearTasks } from "./display.js";
import { filter } from "./filter.js";
import { addTasks } from "./addTasks.js";
import { getDateModal } from "./editTask.js";

export const initTasks = () => {
  getArrItem("/api/tasks", (tasks) => {
    clearTasks();
    renderTasks(tasks);
    filter(tasks);
    addTasks(tasks);
    getDateModal(tasks)
  });
};
initTasks();
const initUsers = (users) => {
  const renderUsers = (id) => {
    const select = document.getElementById(id);

    users.map((user) => {
      const option = document.createElement("option");
      option.value = user.id;
      option.textContent = user.name;

      select.appendChild(option);
    });
  };

  renderUsers("task-assignee");
  renderUsers("filter-assignee");
  renderUsers("edit-task-assignee");
};

getArrItem("/api/users", initUsers);
