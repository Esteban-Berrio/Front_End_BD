const formulario = document.getElementById("miFormulario");
const nombreInput = document.getElementById("EditName");
const emailInput = document.getElementById("email");
const nombreError = document.getElementById("nombreError");
const emailError = document.getElementById("emailError");
const birthday = document.getElementById("EditDateOfBirth");
const birthdayError = document.getElementById("birthError");
const lastname = document.getElementById("EditLastname");
const lastnameError = document.getElementById("lastnameError");
const city = document.getElementById("EditCity");
const cityError = document.getElementById("cityError");
const EditAddress = document.getElementById("EditAddress");
const addressError = document.getElementById("addressError");
const EditTypeUser = document.getElementById("EditTypeUser");
const TypeUserError = document.getElementById("TypeUserError");
const EditRol = document.getElementById("EditRol");
const RolError = document.getElementById("RolError");


const longitudMinima = 3;
const longitudMaxima = 45;

// var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
formulario.addEventListener("submit", function (event) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let valid = true;

    if (nombreInput.value === "" || nombreInput.value.length > longitudMaxima) {
        nombreError.textContent = "Este campo es obligatorio(Y el maximo de caracteres es de 45)";
        nombreError.style.display = "block";
        valid = false;

    } else {
        nombreError.style.display = "none";

    } if (lastname.value === "" || lastname.value.length > longitudMaxima) {
        lastnameError.textContent = "Este campo es obligatorio(Y el maximo de caracteres es de 45)";
        lastnameError.style.display = "block";
        valid = false;

    } else {

        lastnameError.style.display = "none";

    } if (city.value === "") {
        cityError.textContent = "Este campo es obligatorio";
        cityError.style.display = "block";
        valid = false;

    } else {

        cityError.style.display = "none";

    } if (EditState.value === "") {
        stateError.textContent = "Este campo es obligatorio";
        stateError.style.display = "block";
        valid = false;

    } else {

        stateError.style.display = "none";

    } if (birthday.value === "") {
        birthdayError.textContent = "Este campo es obligatorio";
        birthdayError.style.display = "block";
        valid = false;

    } else {
        birthdayError.style.display = "none";
    }

    if (emailInput.value === "" || lastname.value.length > longitudMaxima) {
        emailError.textContent = "Este campo es obligatorio(Y el maximo de caracteres es de 45)";
        emailError.style.display = "block";
        valid = false;
    } else {
        emailError.style.display = "none";
    }
    if (!regexEmail.test(emailInput.value)) {
        emailError.textContent = "Correo electrónico no válido";
        emailError.style.display = "block";
        valid = false;
      } else {
        emailError.style.display = "none";
      }
    if (EditAddress.value === "" || lastname.value.length > longitudMaxima) {
        addressError.textContent = "Este campo es obligatorio(Y el maximo de caracteres es de 45)";
        addressError.style.display = "block";
        valid = false;
    } else {
        addressError.style.display = "none";
    }
    // if (EditAddress.value === "") {
    //     addressError.textContent = "Este campo es obligatorio";
    //     addressError.style.display = "block";
    //     valid = false;
    // } else {
    //     addressError.style.display = "none";
    // }
    if (EditTypeUser.value === "") {
        TypeUserError.textContent = "Este campo es obligatorio";
        TypeUserError.style.display = "block";
        valid = false;

    } else {
        TypeUserError.style.display = "none";

    } if (EditRol.value === "") {
        RolError.textContent = "Este campo es obligatorio";
        RolError.style.display = "block";
        valid = false;

    } else {
        RolError.style.display = "none";

    }
    console.log(valid)
    if (!valid) {
        event.preventDefault(); // Previene la recarga de la página en caso de error
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Usuario actualizado!',
            showConfirmButton: false,
            timer: 1900
        }).then((result) => {
            // Verificar si el usuario cerró la alerta
            if (result.dismiss === Swal.DismissReason.timer) {
                // Realizar la redirección aquí
                window.location.href = "crud-users-master.php"; 
            }
        });
    }
});

// se puede usar para que cuando ingrese el dato automaticamente se deshabilite el error

// nombreInput.addEventListener("input", function () {
//     if (nombreInput.value !== "") {
//         nombreError.style.display = "none"; // Oculta el mensaje de error si el campo se llena
//     } if (emailInput.value !== "") {
//         emailError.style.display = "none"; // Oculta el mensaje de error si el campo se llena
//     }
// });