import { addItem } from "./assets/api";
import { getArrItem, renderTasks, clearTasks } from "./display";
import { initTasks } from "./init";

const taskForm = document.querySelector("#task-form");

// массив, содержащий значения чилдрены формы (мне так удобнее обращаться..)

// Функция проверяющая на фактическое введение значений в форме
const isInputForm = async () => {
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
const getIdNewTasks = async () => {
  let id;
  await getArrItem("/api/tasks", (tasks) => {
    if (tasks.length == 0) {
      id = 0;
    } else {
      id = tasks.length + 1;
    }
  });
  return String(id);
};
const addTasks = async () => {
  const handlerAddTasks = async (event) => {
    event.preventDefault();
    const [title, description, assignedTo] = await isInputForm();
    const newTask = {
      id: await getIdNewTasks(),
      title: title,
      description: description,
      assignedTo: assignedTo,
    };
    addItem(`/api/tasks`, newTask);
    clearForm();
    initTasks();
  };
  taskForm.addEventListener("submit", handlerAddTasks);
};
await addTasks();
