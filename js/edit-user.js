const defaultFile = '../img/person-circle.svg';

const file = document.getElementById('foto');
const img = document.getElementById('img');
file.addEventListener('change', e => {
  if (e.target.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      img.src = e.target.result;
    }
    reader.readAsDataURL(e.target.files[0])
  }
});


const formulario = document.getElementById("miFormulario");
const nombreInput = document.getElementById("EditName");
// const emailInput = document.getElementById("email");
const nombreError = document.getElementById("nombreError");
// const emailError = document.getElementById("emailError");
const birthday = document.getElementById("EditDateOfBirth");
const birthdayerror = document.getElementById("birthdayerror");
const lastname = document.getElementById("EditLastName");
const lastnameError = document.getElementById("lastnameError");
 const EditCountry= document.getElementById("EditCountry");
 const countryError = document.getElementById("countryError");
 const EditAddress= document.getElementById("EditAddress");
 const addressError = document.getElementById("addressError");
const EditDepartament= document.getElementById("EditDepartament");
const departmentError = document.getElementById("departmentError");
const EditRol= document.getElementById("EditRol");
const RolError = document.getElementById("RolError");
const EditMunicipality = document.getElementById("EditMunicipality");
const municipError = document.getElementById("municipError");


      
const longitudMinima = 3;
const longitudMaxima = 45;

var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

formulario.addEventListener("submit", function (event) {

  let valid = true;


  if (nombreInput.value === "" || nombreInput.value.length > longitudMaxima) {
    nombreError.textContent = "Este campo es obligatorio (Debe tener menos de 45 caracteres)";
    nombreError.style.display = "block";
    valid = false;

  } else {
    nombreError.style.display = "none";

  } if (lastname.value === "" || lastname.value.length > longitudMaxima) {
    lastnameError.textContent = "Este campo es obligatorio (Debe tener menos de 45 caracteres)";
    lastnameError.style.display = "block";
    valid = false;

  } else {

    lastnameError.style.display = "none";

  } if (gender.value === "") {
    genderError.textContent = "Este campo es obligatorio";
    genderError.style.display = "block";
    valid = false;

  } else {

    genderError.style.display = "none";

  } if (birthday.value === "") {
    birthdayerror.textContent = "Este campo es obligatorio";
    birthdayerror.style.display = "block";
    valid = false;

  } else {
    birthdayerror.style.display = "none";
  }
  if (EditCountry.value === "") {
    countryError.textContent = "Este campo es obligatorio";
    countryError.style.display = "block";
    valid = false;

  } else {

    countryError.style.display = "none";

  }if (EditDepartament.value === "") {
      departmentError.textContent = "Este campo es obligatorio";
      departmentError.style.display = "block";
      valid = false;
  
    } else {
  
      departmentError.style.display = "none";

    }if (EditMunicipality.value === "") {
        municipError.textContent = "Este campo es obligatorio";
        municipError.style.display = "block";
        valid = false;
    
      } else {
    
        municipError.style.display = "none";
  
      }if (EditAddress.value === ""||EditAddress.value.length > longitudMaxima) {
        addressError.textContent = "Este campo es obligatorio (Debe tener menos de 45 caracteres)";
        addressError.style.display = "block";
        valid = false;
    
      } else {
    
        addressError.style.display = "none";
   

  }if (!valid) {
    event.preventDefault(); 
  }
})

