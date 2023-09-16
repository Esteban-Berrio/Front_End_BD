document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('miformulario').addEventListener('submit', function (event) {
  const contra1 = document.getElementById("inputPassword");
  const contra2 = document.getElementById("inputPassword2");
  const contra2Error = document.getElementById("passwordError2");
  let valid = true;

  // if (contra1.value !== contra2.value) {

  //   contra2Error.textContent = "La contraseña no coinciden";
  //   contra2Error.style.display = "block";
  //   valid = false;
  //   event.preventDefault();
  // } else {
  //   contra2Error.style.display = "none";
  // }

  
  });
  const formu = document.getElementById("miformulario");
  const ojo = document.getElementById("eye");
  const ojo2 = document.getElementById("eye2");
  const nombre = document.getElementById("inputName");
  const nombreError = document.getElementById("nameError");
  const cumple = document.getElementById("dateOfBirth");
  const cumpleError = document.getElementById("birthError");
  const ciudad = document.getElementById("inputCity")
  const ciudadError = document.getElementById("cityError");
  const correo = document.getElementById("inputEmail");
  const correoError = document.getElementById("emailError");
  const estado = document.getElementById("inputState");
  const estadoError = document.getElementById("stateError");
  const apellido = document.getElementById("inputLastName");
  const apellidoError = document.getElementById("lastNameError");
  const direccion = document.getElementById("inputAddress");
  const direccionError = document.getElementById("addressError");
  const tipo = document.getElementById("inputTypeUser");
  const tipoError = document.getElementById("TypeUserError");
  const contra1 = document.getElementById("inputPassword");
  const contra2 = document.getElementById("inputPassword2");
  const contra2Error = document.getElementById("passwordError2");
  const rol = document.getElementById("inputRole");
  const rolError = document.getElementById("rolError")
  const gender = document.getElementById("inputGender");
  const genderError = document.getElementById("genderError")

  
  const lMaxima = 45;
  formu.addEventListener('submit', function (event) {
    // let regexDireccion = /^A-Za-z0-9\s#\-,.ÁÉÍÓÚáéíóúÑñ+$/;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){5,15}$/;

    let valid = true;

    if (nombre.value === "" || nombre.value.length > lMaxima) {
      nombreError.textContent = "Este campo es obligatorio(Y el maximo de caracteres es de 45)";
      nombreError.style.display = "block";
      valid = false;
    } else {
      nombreError.style.display = "none";
    } if (cumple.value === "") {
      cumpleError.textContent = "Este campo es obligatorio";
      cumpleError.style.display = "block";
      valid = false;

    } else {
      cumpleError.style.display = "none";
    }

    if (ciudad.value === "") {
      ciudadError.textContent = "Este campo es obligatorio";
      ciudadError.style.display = "block";
      valid = false;

    } else {

      ciudadError.style.display = "none";

    } if (correo.value === "" || correo.value.length > lMaxima) {
      correoError.textContent = "Este campo es obligatorio(Y el maximo de caracteres es de 45)";
      correoError.style.display = "block";
      valid = false;
    } else {
      correoError.style.display = "none";
    }
    if (!regexEmail.test(correo.value)) {
      correoError.textContent = "Correo electrónico no válido";
      correoError.style.display = "block";
      valid = false;
    } else {
      correoError.style.display = "none";
    }

    if (estado.value === "") {
      estadoError.textContent = "Este campo es obligatorio";
      estadoError.style.display = "block";
      valid = false;

    } else {

      estadoError.style.display = "none";

    } if (apellido.value === "" || apellido.value.length > lMaxima) {
      apellidoError.textContent = "Este campo es obligatorio(Y el maximo de caracteres es de 45)";
      apellidoError.style.display = "block";
      valid = false;

    } else {

      apellidoError.style.display = "none";

    } if (direccion.value === "" || direccion.value.length > lMaxima) {
      direccionError.textContent = "Este campo es obligatorio(Y el maximo de caracteres es de 45)";
      direccionError.style.display = "block";
      valid = false;
    } else {
      direccionError.style.display = "none";
    

    }
    if (tipo.value === "") {
      tipoError.textContent = "Este campo es obligatorio";
      tipoError.style.display = "block";
      valid = false;

    } else {
      tipoError.style.display = "none";
    }
    if (contra1.value === "" || contra2.value === ""  && contra1.value !== contra2.value ) {
      contra2Error.textContent = "campos vacios o no coinciden ";
      contra2Error.style.display = "block";
              valid = false;
              // event.preventDefault();
          } 
          else{
            contra2Error.style.display = "none";
          }
          


  
    if (rol.value === "") {
      rolError.textContent = "Este campo es obligatorio";
      rolError.style.display = "block";
      valid = false;

    } else {
      rolError.style.display = "none";

    }

    
    if (inputGender.value === "") {
      genderError.textContent = "Este campo es obligatorio";
      genderError.style.display = "block";
      valid = false;

    } else {
      genderError.style.display = "none";

    }
    if (!valid) {
      event.preventDefault(); // Previene la recarga de la página en caso de error

    }else{
      Swal.fire({
                    
        icon: 'success',
        title: 'Usuario Registrado!',
        showConfirmButton: false,
        timer: 1900
    }).then(() => {
      
        window.location.href = "crud-users-master.php"; // Redireccionar
    });

    }



  });




  

  ojo.addEventListener('click', function () {
    if (contra1.type == "password") {
      contra1.type = "text"
    } else {
      contra1.type = "password";
    }
  })

  ojo2.addEventListener('click', function () {
    if (contra2.type == "password") {
      contra2.type = "text"
    } else {
      contra2.type = "password";
    }
  })

});