const taskList = document.querySelector("#task-list");
const modalHidden = document.querySelector(".modal.hidden");
const editForm = document.querySelector("#edit-task-form");
const handlerModal = (item, state, name, action) => {
  item.addEventListener(state, (event) => {
    if (state == "submit") {
      event.preventDefault();
      setTimeout(()=> {
        modalHidden.style.cssText = "opacity:0; pointer-events: none";
      }, 200);
    }
    if (event.target.matches(name) && action == "close") {
      setTimeout(()=> {
        modalHidden.style.cssText = "opacity:0; pointer-events: none";
      }, 200);
    } else if (event.target.matches(name) && action == "open") {
      setTimeout(()=> {
        modalHidden.style.cssText = "opacity:1; pointer-events: auto;";
      }, 200);
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
