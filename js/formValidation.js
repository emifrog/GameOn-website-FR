// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");
const prenom = document.getElementById('first');
const nom = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const citySelector = document.getElementsByName("location");
const termsCheckbox = document.getElementById('termsChecked');
const checkbox1 = document.getElementById("checkbox1");
const error = document.getElementById('error');
const error = document.getElementById('error2');
const error = document.getElementById('error3');

///////////////////////// FORM VALIDATION //////////////////////////////
document.getElementById('modalBtn').addEventListener('submit', (e) => {
    e.preventDefault();
    //Functions stored inside a variable with arguments inside
    let prenomOk = validateString(prenom.value, 2, error,"Veuillez entrer 2 caractères ou plus pour le champ du prenom.");
    let nomOk = validateString(nom.value, 2, error2, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    let emailOk = checkEmail(email.value, error3, "Veuillez entre une adresse mail valid.");
    let birthdateOk = validateString(birthdate.value, 2, error4, "Vous devez entrer votre date de naissance.");
    let quantityOk = checkTournois(quantity.value, error5, "Veuillez entrer une valeur numerique");
    let citySelectorOk = citySelectorFunction();
    let termsAndConditionsOK = termsAndConditions(termsCheckbox, errorCheckbox, "Vous devez vérifier que vous acceptez les termes et conditions.");
   
    // Functions Called Here    
    if(prenomOk && nomOk && emailOk && birthdateOk && quantityOk && citySelectorOk && termsAndConditionsOK ) {
    //Close ModalBox and OPEN SuccesBox
    const modalBox = document.querySelector(".bground");
    const succesMessageBox = document.querySelector(".submbit-confirmation-bg");
      modalBox.style.display = "none";
      succesMessageBox.style.display = "block";  
      //Close succesBox
      document.querySelectorAll('.close-Succes').forEach(button =>{
      button.addEventListener('click', button => {
      if (succesMessage.style.display === "block"){
            succesMessage.style.display = 'none';
      }})});
      //Reset the form  
      document.getElementById('modalBtn').reset();
    } 
    return true;
}) 

///// Validate Prenom & Nom & Birthdate & Tournes //////
function validateString(entry, size, errorElt, errorMessage) {
  if ( entry.length < size ) {
    errorElt.innerHTML = errorMessage;
    errorElt.style.color = "red";
    errorElt.style.fontSize = "0.8rem";
    return false;
  }else {
    errorElt.innerHTML = " ";
    return true;
  }
}

////// Validate EMAIL /////// 
function checkEmail(email, errorElt, errorMessage ) {
   let patern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   if (!email.toLowerCase().match(patern) || email == '') {
       errorElt.innerHTML = errorMessage;
       errorElt.style.color = "red";
       errorElt.style.fontSize = "0.8rem";
       return false;
   }else {
       errorElt.innerHTML = "";
       return true;
   }
}

////// Validate Tournois //////
function checkTournois(element, errorElt, errorMessage ) {
  if(!/^[0-9]+$/.test(element)){
    errorElt.innerHTML = errorMessage;
    errorElt.style.color = "red";
    errorElt.style.fontSize = "0.8rem";
    return false;
  }else {
    errorElt.innerHTML = " ";
    return true;
  }
}

////// Validate City selector ///////
function citySelectorFunction() {
 let check1 = false;
 for(i=0; i<citySelector.length; i++) {
   if (citySelector[i].checked) {
      check1 = true;
   }
 }
   if (check1 == false) {
        errorCity.innerHTML = "Vous devez choisir une option.";
        errorCity.style.color = "red";
        errorCity.style.fontSize = "0.8rem";
        return false;
   }else {
        errorCity.innerHTML = " ";
        return true;
   }
}

//////// Validate Terms and Conditions //////
function termsAndConditions(checkboxTerms, errorElementSelect, errorMessage ) {
  if(!checkboxTerms.checked) {
    errorElementSelect.innerHTML = errorMessage;
    errorElementSelect.style.color = "red";
    errorElementSelect.style.fontSize = "0.8rem";
    return false;
  }
    errorElementSelect.innerHTML = "";
    return true;
}