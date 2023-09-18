const formulario = document.getElementById("paramForm");
const EditName = document.getElementById("EditName");
const nombreError = document.getElementById("nombreError");
const EditParamForeign = document.getElementById("EditParamForeign");
const foreignError = document.getElementById("foreignError");

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

    if (EditParamForeign.value.trim() === "") {
        foreignError.textContent = "Este campo es obligatorio";
        foreignError.style.display = "block";
        valid = false;
    } else {
        foreignError.style.display = "none";
    }

    if (!valid) {
        event.preventDefault(); // Previene la recarga de la página en caso de error
    }else{
        Swal.fire({
                    
            icon: 'success',
            title: 'Parametro actualizado!',
            showConfirmButton: false,
            timer: 1900
        }).then(() => {
            // window.location.href = "crud-params.php"; // Redireccionar
        });
    }
});