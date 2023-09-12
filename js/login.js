document.addEventListener('DOMContentLoaded', function() {
    const formu = document.getElementById("miFormulario");
    const correo = document.getElementById("inputEmail");
    const correoError = document.getElementById("emailError");
    const password = document.getElementById("inputPassword");
    const passwordError = document.getElementById("passwordError");
    


const lMaxima = 45;
formu.addEventListener('submit', function (event) {
    let valid = true;

    if (correo.value === "" || correo.value.length > lMaxima) {
        correoError.textContent = "Este campo es obligatorio (Y el máximo de caracteres es de 45)";
        correoError.style.display = "block";
        valid = false;
    } else {
        correoError.style.display = "none";
    }

    if (password.value === "") {
        passwordError.textContent = "Este campo es obligatorio";
        passwordError.style.display = "block";
        valid = false;
    } else {
        passwordError.style.display = "none";
    }
    
    if (!valid) {
        event.preventDefault();
    }
});
});