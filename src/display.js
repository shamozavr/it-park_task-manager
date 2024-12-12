import { getItems } from "./assets/api";

const taskForm = document.querySelector(".task-form");

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
  //Полученный ответ перебираю через map
  const taskElements = tasks.map(
    (task) =>
      `
      <section class="task-display">
      <h2>Task List</h2>
      <ul id="task-list">
        <li class="task-item" data-id=${task.id}>
          <div class="task-info">
            <h3 class="task-title">${task.title}</h3>
            <p class="task-desc">${task.description}</p>
            <p class="task-meta">
              <span>Assigned to: <strong>${task.assignedTo}</strong></span>
            </p>
          </div>
          <div class="task-actions">
            <button class="edit-task">Edit</button>
            <button class="delete-task">Delete</button>
          </div>
        </li>
      </ul>
    </section>
    `,
  );
  taskForm.insertAdjacentHTML("afterend", taskElements); // Вставляем разметку
};

renderTasks();
