// DOM Elements
const closeModalSubmittedForm = document.getElementsByClassName("close-modal-submit")
const modalSubmittedForm = document.getElementsByClassName("container-modal-submit")
const modalBtnConfirmation = document.getElementById("btn-confirmation");

// launch modal form
function launchModalSubmittedForm() {
    modalbg.style.display = "none" 
    modalSubmittedForm[0].style.display = "block";
}

// close modal
const FermetureModalSubmittedForm = () => {
    modalSubmittedForm[0].style.display = "none";
}

// Close modal event
closeModalSubmittedForm[0].addEventListener("click", FermetureModalSubmittedForm)
modalBtnConfirmation.addEventListener("click", FermetureModalSubmittedForm)