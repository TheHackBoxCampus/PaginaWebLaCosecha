import { savedData } from "../../utils/storage.js";

const formPQRS = document.querySelector("section.pqrs form"); 
const PQRSSubmit = document.querySelector("section.pqrs form input[type='submit']"); 

PQRSSubmit.addEventListener("click", (e) => savedData(e, "pqrs", formPQRS)); 
