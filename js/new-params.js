const formulario = document.getElementById("paramForm");
const ParamTypeID = document.getElementById("ParamTypeID");
const paramName = document.getElementById("ParamName");
const paramState = document.getElementById("ParamState");
const paramTypeIDError = document.getElementById("paramTypeID-error");
const paramNameError = document.getElementById("paramName-error");
const paramStateError = document.getElementById("paramState-error");

const longitudMinima = 3;
const longitudMaxima = 45;

formulario.addEventListener("submit", function (event) {
    let valid = true;

    if (ParamTypeID.value.trim() === "") {
        paramTypeIDError.textContent = "Este campo es obligatorio";
        paramTypeIDError.style.display = "block";
        valid = false;
    } else {
        paramTypeIDError.style.display = "none";
    }

    if (paramName.value.trim() === "") {
        paramNameError.textContent = "Este campo es obligatorio";
        paramNameError.style.display = "block";
        valid = false;
    } else {
        paramNameError.style.display = "none";
    }

    if (paramState.value.trim() === "") {
        paramStateError.textContent = "Este campo es obligatorio";
        paramStateError.style.display = "block";
        valid = false;
    } else {
        paramStateError.style.display = "none";
    }

    if (!valid) {
        event.preventDefault(); // Previene la recarga de la página en caso de error
    }
});
