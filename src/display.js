import { getItems } from "./assets/api";

const ul = document.querySelector('#task-list')

// eslint-disable-next-line no-unused-vars
export const getArrItem = async (url, callback) => {
  //Получаем по url наш массив данных
  const resp = await getItems(url);

  // Проверяем, является ли результат массивом
  if (Array.isArray(resp) && resp.length > 0) {
    callback(resp); // Передаем данные для рендеринга
  } else {
    alert("Ответ не является массивом:", resp); // Если ошибка, выводим сообщение
  }
};

//Отображение на дисплее. resp = tasks
export const renderTasks = (tasks) => {
  if (Array.isArray(tasks) && tasks.length > 0) {
    const taskElements = tasks.map(
      (task) =>
        `
      <li class="task-item" data-id=${task.id}>
          <div class="task-info">
            <h3 class="task-title">${task.title}</h3>
            <p class="task-desc">${task.description}</p>
            <p class="task-meta">
              <span>Assigned to: <strong>${task.assignedTo}</strong></span>
            </p>
            <span class="task-status">{taskStatus}</span>
          </div>
          <div class="task-actions">
            <button class="edit-task">Edit</button>
            <button class="delete-task">Delete</button>
          </div>
        </li>`,
    );
    ul.insertAdjacentHTML("beforeend", taskElements.join(''));
  } else {
    return null
  }
};


export const clearTasks = () => {
  ul.innerHTML = '';
}

