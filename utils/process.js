import data from "./data.js";

const sectionProcess = document.querySelector("#process");
const closeIcon = "public/icons/close.svg"; 

const openModal = (buttonOpen, modal) => { 
    buttonOpen.addEventListener("click", () => {
        modal.style.display = "flex"; 
    })
}
// refactor this code!!! 
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
        if(e.target == modal) { 
            children.style.animation = "closeModal 500ms"; 
            setTimeout(() => {
                modal.style.display = "none"; 
                children.style.animation = ""; 
            }, 300); 
        }
    })
}

const generateModal = (key, data) => { 
    let modal = document.createElement("div"); 
    let modalContent = document.createElement("div"); 
    let buttonClose = document.createElement("span");

    modal.classList.add(`modal`); 
    modalContent.classList.add(`modal-content`); 
    modal.style.display = "none"; 

    // add modal content 
    buttonClose.classList.add("btn-close");
    buttonClose.innerHTML = `<img src="${closeIcon}" alt="close modal icon"/>`;
    
    modalContent.innerHTML = `
        <div>
            <h3>${data.content.title}</h3>
            <p>${data.content.information}</p>
        </div>
    `

    modalContent.appendChild(buttonClose); 
    modal.appendChild(modalContent); 
    sectionProcess.appendChild(modal); 
    
    // generate buttons 
    generateButtons(key, data, modal); 

    // close this modal 
    closeModal(buttonClose, modal); 
}

const generateButtons = (key, data, modal) => { 
    let containerButton = document.createElement("div") 
    let span = document.createElement("span")
    let button = document.createElement("button")
    
    button.classList.add("btn-process"); 
    button.id = `button-${key}` 
    containerButton.classList.add(`container-button`)
    span.classList.add(`title-${key}`)

    button.innerHTML = `<img src="${data.content.icon}" alt="image-${data.content.title}">`;
    span.textContent = data.content.title;
    
    containerButton.appendChild(button); 
    containerButton.appendChild(span); 
    sectionProcess.appendChild(containerButton); 
    
    // add event to open modal
    openModal(button, modal)
}

const PrintProcess = () => {
    for (const key in data) {
        generateModal(key, data[key]); // generate modals
    } 
}

PrintProcess();


