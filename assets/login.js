
// FORM VALIDATION FOR REGISTRATION (NOT COMPLETE)

function validateForm(field, regex) {
    field.classList.remove("border-info");
    if(regex.test(field.value)) {
        field.classList.add("border-success");
        field.classList.remove("border-danger");
    } else {
        field.classList.add("border-danger");
        field.classList.remove("border-success");
    }
}


const inputs = document.querySelectorAll('input');

inputs.forEach((input)=> {
    input.addEventListener('keyup',(e) => {
       validateForm(e.target, patterns[e.target.attributes.id.value]);
    });
});


const loginEmail = document.querySelector("#loginEmail");
const loginPassWord = document.querySelector("#loginPassword");

const newFN = document.querySelector("#firstname");
const newLN = document.querySelector("#lastname");
const newAddress = document.querySelector("#address");
const newUnitNo = document.querySelector("#unitno");
const newPostalCode = document.querySelector("#postalcode")
const newEmail = document.querySelector("#email");
const newPW = document.querySelector("#password");
const cfmnewPw = document.querySelector("#password2");


const patterns = {
    loginEmail: /^[a-z]{1,60}$/i,
    newFN: /[a-z]/i
}



