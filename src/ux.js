const taskList = document.querySelector("#task-list");
const modalHidden = document.querySelector(".modal.hidden");
const modalAction = document.querySelector(".modal-actions");
const editForm = document.querySelector("#edit-task-form");
const handlerModal = (item, state, name, action) => {
  item.addEventListener(state, (event) => {
    if (state == "submit") {
      event.preventDefault();
      setTimeout(function () {
        modalHidden.style.cssText = "opacity:0; pointer-events: none";
      }, 400);
    }
    if (event.target.matches(name) && action == "close") {
      setTimeout(function () {
        modalHidden.style.cssText = "opacity:0; pointer-events: none";
      }, 400);
    } else if (event.target.matches(name) && action == "open") {
      setTimeout(function () {
        modalHidden.style.cssText = "opacity:1; pointer-events: auto;";
      }, 400);
    }
  });
};

const closeModal = () => {
  handlerModal(editForm, "click", ".cancel-btn", "close");
  handlerModal(editForm, "submit", ".save-btn", "close");
  handlerModal(document, "click", ".modal", "close");
};
const openModal = (() => {
  handlerModal(taskList, "click", ".edit-task", "open");
  closeModal();
})();
