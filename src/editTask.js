import { updateItem } from "./assets/api.js";
import { tasks, initTasks } from "./init.js";

const taskList = document.querySelector("#task-list");
const editTaskForm = document.querySelector("#edit-task-form");
const {title, description, assignee}= editTaskForm
let id

const handlerOpenModal = (event) => {
  if (event.target.closest(".edit-task")) {
    id = event.target.closest('.task-item').dataset.id
    const thisTask= tasks.find(task=> task.id==id)

    title.value=thisTask.title
    description.value=thisTask.description
    assignee.value = thisTask.assignedTo
  }
}

const handlerEditForm = async (event) => {
  event.preventDefault();

  await updateItem(`/api/tasks/${id}`, {
    title: title.value,
    description: description.value,
    assignedTo: assignee.value
  })

  initTasks()
}

taskList.addEventListener("click", handlerOpenModal)
editTaskForm.addEventListener("submit", handlerEditForm)