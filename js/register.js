
//js de email para mandar mensaje 

// document.getElementById('formulario').addEventListener('submit', function (event) {
//     const correo1 = document.getElementById('inputEmail').value;
//     const correo2 = document.getElementById('inputEmailVerification').value;
//     const inputEmailError = document.getElementById('inputEmailError');

  

//     if (correo1 !== correo2 ) {
      
//         inputEmailError.textContent = "(los correos no coinciden)";
//         inputEmailError.style.display = "block";
//         event.preventDefault(); // Esto previene el envío del formulario
//     } else {
  
//         inputEmailError.style.display = "none";
//     }
// });

document.getElementById('formulario').addEventListener('submit', function (event) {
    const correo1 = document.getElementById('inputEmail').value;
    const correo2 = document.getElementById('inputEmailVerification').value;
    const inputEmailError = document.getElementById('inputEmailError');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (correo1 !== correo2 ) {
        inputEmailError.textContent = "(los correos no coinciden)";
        inputEmailError.style.display = "block";
        event.preventDefault(); // Esto previene el envío del formulario
    } else if (!emailRegex.test(correo1) || !emailRegex.test(correo2)) {
        inputEmailError.textContent = "(formato de correo no válido)";
        inputEmailError.style.display = "block";
        event.preventDefault();
    } else {
        inputEmailError.style.display = "none";
    }
});
     


//APARTADO DE PASSWORD 



var eye = document.getElementById('eye');
var input = document.getElementById('inputPassword');

eye.addEventListener("click", function () {
    if (input.type == "password") {

        input.type = "text"
        eye.style.opacity = 0.8

    } else {

        input.type = "password"
        eye.style.opacity = 0.6
    }
});


//  <!-- funcion para el campo 2 de verifircar contraseña -->

var eye2 = document.getElementById('eye2');
var input2 = document.getElementById('inputPassword2');

eye2.addEventListener("click", function () {
    if (input2.type == "password") {

        input2.type = "text"
        eye2.style.opacity = 0.8

    } else {

        input2.type = "password"
        eye2.style.opacity = 0.6
    }
})



document.getElementById('formulario').addEventListener('submit', function (event) {
    let valid = true;
    // Ontenemos los valores de los campos de contraseñas 
    const pass1 = document.getElementById('inputPassword');
    const pass2 = document.getElementById('inputPassword2');
    const inputPassError = document.getElementById('inputPassError');
    
    // Verificamos si las constraseñas no coinciden 
    if (pass1.value !== pass2.value) {

      
            // Si los correos no coinciden, mostramos un mensaje de error y cancelamos el envío del formulario
            inputPassError.textContent = "(contraseñas no coinciden)";
            inputPassError.style.display = "block";
              valid = false;
            event.preventDefault(); // Esto previene el envío del formulario
        } else {
            // Si los correos coinciden, ocultamos el mensaje de error
            inputPassError.style.display = "none";
     
        }
        }
    );
    






//  COMPROBAR REQUISITOS DE LA BASE DE DATOS DE TODOS LOS CAMPOS 

const formulario = document.getElementById('formulario');
const inputName = document.getElementById('inputName');
const inputnombreError = document.getElementById("inputnombreError");
const inputLastName = document.getElementById('inputLastName');
const inputLastnameError = document.getElementById("inputLastnameError");
const inputAddress = document.getElementById('inputAddress');
const inputAddressError = document.getElementById("inputAddressError");
const birthday = document.getElementById('dateOfBirth');
const inputbirthdayError = document.getElementById("inputbirthdayError");
const inputcountry = document.getElementById('inputcountry');
const inputcountryError = document.getElementById("inputcountryError");
const inputDepartment = document.getElementById('inputDepartment');
const inputDepartmentError = document.getElementById("inputDepartmentError");
const inputMunicipality = document.getElementById('inputMunicipality');
const inputMunicipalityError = document.getElementById("inputMunicipalityError");

const inputSex = document.getElementById('inputSex');
const inputSexError = document.getElementById("inputSexError");


const correo1 = document.getElementById('inputEmail');
    const correo2 = document.getElementById('inputEmailVerification');
    const inputEmailError = document.getElementById('inputEmailError');


    const pass1 = document.getElementById('inputPassword');
    const pass2 = document.getElementById('inputPassword2');
    const inputPassError = document.getElementById('inputPassError');
    
// formulario.addEventListener('submit', (e)=>{
// 	e.preventDefault();
// 	// metodos que valide inputs
// 	checkInputs();
// });
const longitudMinima = 3;
const longitudMaxima = 45;
formulario.addEventListener("submit", function (event) {
    //  function checkInputs() {
    //     const inputNameValue = inputName.value.trim(); //trim para eliminar cualquier caraterc vacio que esta dentro de un texto
    //     const inputLastNameValue = inputLastName.value.trim();
    //     const inputAddressValue = inputAddress.value.trim();
    let valid = true;
    if (inputName.value === "" || inputName.value.length > longitudMaxima) {
        inputnombreError.textContent = "Este campo es obligatorio (Debe tener menos de 45 caracteres)";
        inputnombreError.style.display = "block";
        valid = false;

    } else {
        inputnombreError.style.display = "none";

    } if (inputLastName.value === "" || inputLastName.value.length > longitudMaxima) {
        inputLastnameError.textContent = "Este campo es obligatorio (Debe tener menos de 45 caracteres)";
        inputLastnameError.style.display = "block";
        valid = false;

    } else {

        inputLastnameError.style.display = "none";

    }

    if (inputAddress.value === "" || inputAddress.value.length > longitudMaxima) {
        inputAddressError.textContent = "Este campo es obligatorio (Debe tener menos de 45 caracteres)";
        inputAddressError.style.display = "block";
        valid = false;

    } else {

        inputAddressError.style.display = "none";
    }
    if (birthday.value === "") {
        inputbirthdayError.textContent = "Este campo es obligatorio";
        inputbirthdayError.style.display = "block";
        valid = false;

    } else {
        inputbirthdayError.style.display = "none";

    } if (inputcountry.value === "") {
        inputcountryError.textContent = "Este campo es obligatorio";
        inputcountryError.style.display = "block";
        valid = false;

    } else {
        inputcountryError.style.display = "none";

    } if (inputDepartment.value === "") {
        inputDepartmentError.textContent = "Este campo es obligatorio";
        inputDepartmentError.style.display = "block";
        valid = false;

    } else {
        inputDepartmentError.style.display = "none";

    } if (inputMunicipality.value === "") {
        inputMunicipalityError.textContent = "Este campo es obligatorio";
        inputMunicipalityError.style.display = "block";
        valid = false;

    } else {
        inputMunicipalityError.style.display = "none";

    } if (inputSex.value === "") {
        inputSexError.textContent = "Este campo es obligatorio";
        inputSexError.style.display = "block";
        valid = false;

    } else {
        inputSexError.style.display = "none";
    }if (correo1.value === "" || correo2.value === ""  ) {
        inputEmailError.textContent = "Los campos de Correo estan vacios";
            inputEmailError.style.display = "block";
            valid = false;
            // event.preventDefault();
        } else {
    
            // inputEmailError.style.display = "none";
    
        }if (pass1.value === "" || pass2.value === ""  ) {
            inputPassError.textContent = " Los campos de Contraseña estan vacios ";
            inputPassError.style.display = "block";
                    valid = false;
                    // event.preventDefault();
                } else {
            
                    // inputEmailError.style.display = "none";
            
                
         } if (!valid) {
        event.preventDefault();
    }



    


    

})
