import { addItem } from "./assets/api";
import { initTasks } from "./init";
const taskForm = document.querySelector("#task-form");

// Функция проверяющая на фактическое введение значений в форме
const isInputForm = () => {
  const [title, description, assignedTo] = [
    taskForm.title.value,
    taskForm.description.value,
    taskForm.assignedTo.value,
  ];
  if (title && description && assignedTo) {
    return [title, description, assignedTo];
  }
};
// очищение формы
const clearForm = () => {
  taskForm.title.value = "";
  taskForm.description.value = "";
};
// Функция выполняющая вычисление id для новой задачи
const getIdNewTasks = (tasks) => {
  let id;

  if (tasks.length == 0) {
    id = 0;
  } else {
    id = tasks.length + 1;
  }
  return String(id);
};
let handlerAddTasks = () => {};
export const addTasks = (tasks) => {
  taskForm.removeEventListener("submit", handlerAddTasks);
  handlerAddTasks = async (event) => {
    event.preventDefault();
    const [title, description, assignedTo] = isInputForm();
    const newTask = {
      id: getIdNewTasks(tasks),
      title: title,
      description: description,
      assignedTo: assignedTo,
    };
    clearForm();
    await addItem(`/api/tasks`, newTask);
    initTasks();
  };
  // taskForm.removeEventListener("submit", handlerAddTasks);
  taskForm.addEventListener("submit", handlerAddTasks);
};
