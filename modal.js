function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Modal
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelectorAll(".close");

// launch modal 
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
  modalbg.style.display = "block";
}));

// close modal 
closeModal.forEach((btn) => btn.addEventListener("click", () => {
 modalbg.style.display = "none"; 
}));

// DOM Elements
const prenom = document.getElementById('first');
const error = document.getElementById('error');
const nom = document.getElementById('last');
//const error2 = document.getElementById('error2');
const email = document.getElementById('email');
//const error3 = document.getElementById('error3');
const birthdate = document.getElementById('birthdate');
//const error4 = document.getElementById('error4');
const quantity = document.getElementById('quantity');
//const error5 = document.getElementById('error5');
const citySelector = document.getElementsByName("location");
const errorCity = document.getElementById('errorCity');
const termsCheckbox = document.getElementById('termsChecked');
const errorCheckbox = document.getElementById('errorCheckbox');
const succesMessage = document.getElementById('confirmation-message');