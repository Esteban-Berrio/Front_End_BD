const formulario = document.getElementById("paramForm");
const EditName = document.getElementById("EditName");
const nombreError = document.getElementById("nombreError");
const EditState = document.getElementById("EditState");
const stateError = document.getElementById("stateError");

const longitudMinima = 3;
const longitudMaxima = 45;

formulario.addEventListener("submit", function (event) {
    let valid = true;

    if (EditName.value.trim() === "") {
        nombreError.textContent = "Este campo es obligatorio";
        nombreError.style.display = "block";
        valid = false;
    } else {
        nombreError.style.display = "none";
    }

    if (EditState.value.trim() === "") {
        stateError.textContent = "Este campo es obligatorio";
        stateError.style.display = "block";
        valid = false;
    } else {
        stateError.style.display = "none";
    }

    if (!valid) {
        event.preventDefault(); // Previene la recarga de la página en caso de error
    }
});