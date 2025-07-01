import { savedData } from "./storage.js";

const form = document.querySelector("#contact form");
const contactButton = document.querySelector(
  "#contact form input[type='submit']"
);
const sesionContainer = document.querySelector("nav");
const ButtonSesion = document.querySelector("#session-button");
const closeIcon = "public/icons/close.svg";

// section contact
const openModal = (buttonOpen, modal) => {
  buttonOpen.addEventListener("click", () => {
    modal.style.display = "flex";
  });
};

const closeModal = (buttonClose, modal) => {
  let children = modal.firstChild;

  buttonClose.addEventListener("click", () => {
    children.style.animation = "closeModal 500ms";
    setTimeout(() => {
      modal.style.display = "none";
      children.style.animation = "";
    }, 300);
  });

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      children.style.animation = "closeModal 500ms";
      setTimeout(() => {
        modal.style.display = "none";
        children.style.animation = "";
      }, 300);
    }
  });
};

const generateModal = () => {
  let modal = document.createElement("div");
  let modalContent = document.createElement("div");
  let buttonClose = document.createElement("span");

  // set properties
  modal.classList.add("modal");
  modalContent.classList.add("modal-content");
  modal.style.display = "none";

  // add modal content
  buttonClose.classList.add("btn-close");
  buttonClose.innerHTML = `<img src="${closeIcon}" alt="close modal icon"/>`;

  modalContent.innerHTML = `
        <form id="session-form">
            <h3>Inicia Sesion</h3>
            <input type="text" placeholder="usuario" name="user"/>
            <input type="password" placeholder="contraseña" name="password"/>
            <input id="session-form-submit" type="submit" value="iniciar sesion"/>
        </form>
    `;

  modalContent.appendChild(buttonClose);
  modal.appendChild(modalContent);
  sesionContainer.appendChild(modal);

  // handler
  openModal(ButtonSesion, modal);
  closeModal(buttonClose, modal);
  sesionContainer
    .querySelector("#session-form input#session-form-submit")
    .addEventListener("click", (e) => savedData(e, "session", e.target.parentNode));
};

generateModal();
contactButton.addEventListener("click", (e) => savedData(e, "contact", form));
