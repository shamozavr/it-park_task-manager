import { getArrItem, renderTasks, clearTasks } from "./display.js";

export let tasks=[]

export const initTasks = () => {
  getArrItem("/api/tasks", (newTasks) => {
    clearTasks();
    renderTasks(newTasks);
    tasks=newTasks
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
