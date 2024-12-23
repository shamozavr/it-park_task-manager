const taskList = document.querySelector("#task-list");
const modalHidden = document.querySelector(".modal.hidden");
const modalAction = document.querySelector(".modal-actions");
const modal = document.querySelector(".modal");

const openModal = async () => {
  const handlerOpenModal = () => {
    taskList.addEventListener("click", (event) => {
      if (event.target.closest(".edit-task")) {
        modalHidden.style.cssText = "opacity:1; pointer-events: auto";
        closeModal();
      }
    });
  };
  handlerOpenModal();
};
const closeModal = () => {
  const handlerCloseModal = async () => {
    modalAction.addEventListener("click", (event) => {
      if (event.target.closest(".cancel-btn")) {
        modalHidden.style.cssText = "opacity:0; pointer-events: none";
      }
    });
    modalAction.addEventListener("submit", (event) => {
      event.preventDefault();
      if (event.target.closest(".save-btn")) {
        modalHidden.style.cssText = "opacity:0; pointer-events: none";
      }
    });
  };
  handlerCloseModal();
};

await openModal();
