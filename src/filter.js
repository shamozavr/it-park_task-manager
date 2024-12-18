import { renderTasks, clearTasks } from "./display.js"

const select = document.querySelector('#filter-assignee')

export const filter = (tasks) => {
  select.addEventListener('change', async(event) => {
    clearTasks();

    const user_id = event.target.value;

    if (!isNaN(user_id)) { // Если число, значит айди; отрисовываем по нему
      await renderTasksByUserId(user_id, tasks);
    } else {
      await renderTasks(tasks);
    }
  })
}


const renderTasksByUserId = async(user_id, tasks) => {
    const filteredTasks = tasks.filter((task) => {
        if (task.assignedTo == user_id) {
            return task
        }
    });
    await renderTasks(filteredTasks);
}