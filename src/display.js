import { getItems } from "./assets/api";

const taskItem = document.querySelector(".task-item");
const taskTitle = document.querySelector(".task-title");
const taskDescription = document.querySelector(".task-desc");
const taskAssignee = document.querySelector(".task-meta strong");
// const taskStatus = document.querySelector(".task-status");

// eslint-disable-next-line no-unused-vars
const getProducts = (async () => {
  //Получаем по url наш массив tasks
  const resp = await getItems("/api/tasks");

  // Проверяем, является ли результат массивом
  if (Array.isArray(resp) && resp.length > 0) {
    renderTasks(resp); // Передаем данные для рендеринга
  } else {
    alert("Ответ не является массивом:", resp); // Если ошибка, выводим сообщение
  }
})();

//Отображение на дисплее. resp = tasks
const renderTasks = (tasks) => {
  if (Array.isArray(tasks) && tasks.length > 0) {
    tasks.map((task) => {
      taskItem.dataset.id = task.id;
      taskTitle.textContent = task.title;
      taskDescription.textContent = task.description;
      taskAssignee.textContent = task.assignedTo;
      // taskStatus.textContent = task.status
    });
  }
};

renderTasks();
