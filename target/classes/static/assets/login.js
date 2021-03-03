
// FORM VALIDATION FOR REGISTRATION (NOT COMPLETE)


function validateForm(field, regex) {
    field.classList.remove("border-info");
    if(regex.test(field.value)) {
        field.classList.add("border-success");
        field.classList.remove("border-danger");
    } else {
        field.classList.add("border-danger");
        field.classList.remove("border-success");
        if (field.id == firstname ) {
            const notice = document.createElement('li');
            notice.innerHTML = 
            `<p>Please only enter alphabet characters</p>`
            field.parentElement.appendChild(notice);
        }

    }
}


const inputs = document.querySelectorAll('.register');

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
const password = document.querySelector("#password");


const patterns = {
    firstname: /^[a-z]$/i,
    lastname: /^[a-z]$/i,
    password2: /^[\w!@-]{8,20}$/,
    password: /^[\w!@-]{8,20}$/,
}

register.addEventListener('submit', function (e){



})


