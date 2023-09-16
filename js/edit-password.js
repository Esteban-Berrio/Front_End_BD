// Función para mostrar u ocultar la contraseña
function togglePassword(inputId, eyeId) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = document.getElementById(eyeId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

// Validaciones de formulario
const formulario = document.getElementById("paramForm");
const currentPassword = document.getElementById("currentPassword");
const newPassword = document.getElementById("newPassword");
const verifyPassword = document.getElementById("verifyPassword");
const currentPasswordError = document.getElementById("currentPassword-error");
const newPasswordError = document.getElementById("newPassword-error");
const verifyPasswordError = document.getElementById("verifyPassword-error");

const longitudMinima = 3;
const longitudMaxima = 45;

formulario.addEventListener("submit", function (event) {
    let valid = true;

    if (currentPassword.value === "") {
        currentPasswordError.textContent = "Este campo es obligatorio";
        currentPasswordError.style.display = "block";
        valid = false;
    } else {
        currentPasswordError.style.display = "none";
    }

    if (newPassword.value === "") {
        newPasswordError.textContent = "Este campo es obligatorio";
        newPasswordError.style.display = "block";
        valid = false;
    } else if (newPassword.value.length < longitudMinima || newPassword.value.length > longitudMaxima) {
        newPasswordError.textContent = "La contraseña debe tener entre 3 y 45 caracteres";
        newPasswordError.style.display = "block";
        valid = false;
    } else {
        newPasswordError.style.display = "none";
    }

    if (verifyPassword.value === "") {
        verifyPasswordError.textContent = "Este campo es obligatorio";
        verifyPasswordError.style.display = "block";
        valid = false;
    } else if (verifyPassword.value !== newPassword.value) {
        verifyPasswordError.textContent = "Las contraseñas no coinciden";
        verifyPasswordError.style.display = "block";
        valid = false;
    } else {
        verifyPasswordError.style.display = "none";
    }

    if (!valid) {
        event.preventDefault();
    }
});
