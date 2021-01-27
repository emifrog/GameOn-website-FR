// Element DOM
const form = document.getElementById("form");
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.querySelectorAll("#city .checkbox-input")
const citySelector = document.getElementById("city")
const checkbox1 = document.getElementById("checkbox1");
const input = document.getElementsByClassName("text-control");


// Verification Prenom //
const checkFirstName = () => {
    let regexPrenom = /^[a-zA-Z ]+$/
    if( prenom.value.trim().length < 2 || prenom.value.trim() === "" || !prenom.value.trim().match(regexPrenom)){
        prenom.parentElement.setAttribute("data-error-visible", "true")
        return false
    }
    prenom.parentElement.setAttribute("data-error-visible", "false")
    return true;
}

// Verification Nom //
const checkLastName = () => {
    let regexNom = /^[a-zA-Z ]+$/
    if( nom.value.trim().length < 2 || nom.value.trim() === "" || !nom.value.trim().match(regexNom)){
        nom.parentElement.setAttribute("data-error-visible", "true")
        return false
    }
    nom.parentElement.setAttribute("data-error-visible", "false")
    return true;
}

// Verification EMAIL //
const checkEmail = () => {
    let regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (email.value.trim().match(regexEmail)) {
        email.parentElement.setAttribute("data-error-visible", "false")
        return true; 
    }else {
        email.parentElement.setAttribute("data-error-visible", "true")
        return false; 
    }
}

// Verification Date de Naissance //
const checkBirthday = () => {
    if(birthdate.value.trim().length !== 10) {
        birthdate.parentElement.setAttribute("data-error-visible", "true")
        return false
    }
    birthdate.parentElement.setAttribute("data-error-visible", "false")
    return true;
}

// Validation Nombre //
const checkTypeNumber = () => {
    console.log();
    if(quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true ||quantity.value.trim() < 0) {
        quantity.parentElement.setAttribute("data-error-visible", "true")
        return false;
    }else {
        quantity.parentElement.setAttribute("data-error-visible", "false")
        return true;
    }
}

// Validation Selection Ville //
const checkCity = () => {
    citySelector.setAttribute("data-error-visible", "true")
    for (let i = 0; i < city.length; i++) {
        if(city[i].checked) {
            citySelector.setAttribute("data-error-visible", "false")
            return true
        }
    }
    return false
}

// Validation Condition d'utilisations Generales (CHECKED) //
const checkboxChecked = () => {
    if(checkbox1.checked === false) {
        checkbox1.parentElement.setAttribute("data-error-visible", "true")
        return false
    }
    checkbox1.parentElement.setAttribute("data-error-visible", "false")
    return true;
}

// Quels champs à verifier //
const checkFields = (element, method, event) => {
    element.addEventListener(event, method)
}

// Ajout d'evenement au formulaire //
checkFields(prenom, checkFirstName, "focusout")
checkFields(nom, checkLastName, "focusout")
checkFields(email, checkEmail,"focusout")
checkFields(quantity, checkTypeNumber,"focusout")
checkFields(birthdate, checkBirthday,"focusout")
checkFields(citySelector, checkCity,"change")
checkFields(checkbox1, checkboxChecked,"change")

// Verification de tous les champs //
const checkAllFields = () => {
    checkFirstName()
    checkLastName()
    checkEmail()
    checkTypeNumber()
    checkBirthday()
    checkCity()
    checkboxChecked()
}

// Validation de tous les champs //
const finalValidation = () => {
    if(checkFirstName() === true &&
        checkLastName() === true &&
        checkEmail() === true &&
        checkTypeNumber() === true &&
        checkBirthday() === true &&
        checkCity() === true &&
        checkboxChecked() === true) {
            return true
    }
    return false
}


// Soumission du formulaire //
form.addEventListener("submit", (e) => {
    // Bloque le raffrechissement de la page //
    e.preventDefault()
    if (finalValidation() === true) {
        
        launchModalSubmittedForm()
        // Efface les champs apres soumission //
        document.querySelector("form").reset();
    }else {
        // Affiche les champs non et mal rempli //
        checkAllFields()
    }
});