import { renderTasks, clearTasks } from "../display.js";
import { getItems } from "./api.js";

export let tasks=[]

// Возвращает item - который может быть либо массивом юзеров, либо массивом задач
export const getArrItem = async (url, callback) => {
  //Получаем по url наш массив данных
  const resp = await getItems(url);

  // Проверяем, является ли результат массивом
  if (Array.isArray(resp)) {
    callback(resp); // Передаем данные для рендеринга
  } else {
    alert("Ответ не является массивом:", resp); // Если ошибкдаа, выводим сообщение
  }
};
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
