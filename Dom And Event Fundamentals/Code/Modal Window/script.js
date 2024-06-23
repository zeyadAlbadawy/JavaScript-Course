"use strict";
const showModal = document.querySelectorAll(".show-modal");
const overLay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    overLay.classList.remove("hidden");
  });

const removeNewApp = () => {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
};
closeModal.addEventListener("click", removeNewApp);
overLay.addEventListener("click", removeNewApp);

document.addEventListener("keydown", (event) => {
  if (event.key == "Escape" && !modal.classList.contains("hidden"))
    removeNewApp();
});
