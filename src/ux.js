const taskList = document.querySelector("#task-list");
const modalHidden = document.querySelector(".modal.hidden");
const modalAction = document.querySelector(".modal-actions");

const handlerModal = (item, state, name, action) => {
  item.addEventListener(state, (event) => {
    if (state == "submit") {
      event.preventDefault;
    }
    if (event.target.matches(name) && action == "close") {
      modalHidden.style.cssText = "opacity:0; pointer-events: none";
    } else if (event.target.matches(name) && action == "open") {
      modalHidden.style.cssText = "opacity:1; pointer-events: auto";
    }
  });
};

const closeModal = () => {
  handlerModal(modalAction, "click", ".cancel-btn", "close");
  handlerModal(modalAction, "submit", ".save-btn", "close");
  handlerModal(document, "click", ".modal", "close");
};
const openModal = (() => {
  handlerModal(taskList, "click", ".edit-task", "open");
  closeModal();
})();
