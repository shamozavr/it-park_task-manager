
import { getItems } from "./assets/api.js";
import { renderTasks, clearTasks } from "./display.js"


const select = document.querySelector('#filter-assignee')


select.addEventListener('change', async(event) => {
    clearTasks();

    const user_id = event.target.value;
    const resp = await getItems("/api/tasks");

    // Проверяем, является ли результат массивом
    if (Array.isArray(resp) && resp.length > 0) {

        if (!isNaN(user_id)) { // Если число, значит айди; отрисовываем по нему
            await renderTasksByUserId(user_id, resp);
        } else {
            await renderTasks(resp);
        }

    } else {
        alert("Ответ не является массивом:", resp); // Если ошибка, выводим сообщение
    }
})


const renderTasksByUserId = async(user_id, tasks) => {
    const filteredTasks = tasks.map((task) => {
        if (task.assignedTo == user_id) {
            return task
        }
    });
    await renderTasks(filteredTasks);
}



const showUsersInOptions = (async () => {
    //Получаем по url наш массив tasks
    const resp = await getItems("/api/users");

    // Проверяем, является ли результат массивом
    if (Array.isArray(resp) && resp.length > 0) {
        renderUsers(resp); // Передаем данные для рендеринга
    } else {
        alert("Ответ не является массивом:", resp); // Если ошибка, выводим сообщение
    }
})();


const renderUsers = (users) => {
    users.map((user) => {
            const option = document.createElement('option');
            option.value = user.id;
            option.textContent = user.name;

            select.appendChild(option);
        }
    )
};
