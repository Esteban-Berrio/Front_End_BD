
const formulario = document.getElementById("productForm");
const Reference = document.getElementById("Reference");
const referenceError = document.getElementById("reference-error");
const Provider = document.getElementById("Provider");
const ProviderError = document.getElementById("state-error");
const nameError = document.getElementById("name-error");
const Name = document.getElementById("Name");
const Description = document.getElementById("Description");
const descriptionError = document.getElementById("description-error");


const img = document.getElementById("foto");
const imgError = document.getElementById("img-error");

const Stock = document.getElementById("Stock");
const stockError = document.getElementById("stock-error");

const Price = document.getElementById("Price");
const priceError = document.getElementById("price-error");
const Discount = document.getElementById("Discount");
const discountError = document.getElementById("discount-error");
const Tax = document.getElementById("Tax");
const TaxError = document.getElementById("tax-error");

const Size = document.getElementById("Size");
const sizeError = document.getElementById("size-error");


const longitudMinima = 3;
const longitudMaxima = 45;


formulario.addEventListener("submit", function (event) {
    
    // let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let valid = true;
    var regex = /^[0-9-%]+$/;


    if (Reference.value === "" ) {
        referenceError.textContent = "Este campo es obligatorio";
        referenceError.style.display = "block";
        valid = false;

    } else {
        referenceError.style.display = "none";
    }

    if (Provider.value === "" ) {
        ProviderError.textContent = "Este campo es obligatorio";
        ProviderError.style.display = "block";
        valid = false;

    } else {
        ProviderError.style.display = "none";
    }
    if (Name.value === "" ) {
        nameError.textContent = "Este campo es obligatorio";
        nameError.style.display = "block";
        valid = false;

    } else {
        nameError.style.display = "none";
    }

    if (Description.value === "" ) {
        descriptionError.textContent = "Este campo es obligatorio";
        descriptionError.style.display = "block";
        valid = false;

    } else {
        descriptionError.style.display = "none";
    }


    if (Stock.value === "", !regex.test(Stock.value) ) {
        stockError.textContent = "Este campo es obligatorio";
        stockError.style.display = "block";
        valid = false;

    } else {
        stockError.style.display = "none";
    }

    if (Price.value === "", !regex.test(Price.value) ) {
        priceError.textContent = "Este campo es obligatorio";
        priceError.style.display = "block";
        valid = false;

    } else {
        priceError.style.display = "none";
    }

    if (Discount.value === "", !regex.test(Discount.value) ) {
        discountError.textContent = "Este campo es obligatorio";
        discountError.style.display = "block";
        valid = false;

    } else {
        discountError.style.display = "none";
    }


    if (Tax.value === "" ) {
        TaxError.textContent = "Este campo es obligatorio";
        TaxError.style.display = "block";
        valid = false;

    } else {
        TaxError.style.display = "none";
    }

    
    if (Size.value === "" ) {
        sizeError.textContent = "Este campo es obligatorio";
        sizeError.style.display = "block";
        valid = false;

    } else {
        sizeError.style.display = "none";
    }

    if (img.value === "" ) {
        imgError.textContent = "Este campo es obligatorio";
        imgError.style.display = "block";
        valid = false;

    } else {
        imgError.style.display = "none";
    }
    // } if (lastname.value === "" || lastname.value.length > longitudMaxima) {
    //     lastnameError.textContent = "Este campo es obligatorio(Y el maximo de caracteres es de 45)";
    //     lastnameError.style.display = "block";
    //     valid = false;

    // } else {
    //     lastnameError.style.display = "none";

    // }
    
    // if (!valid) {
    //     event.preventDefault(); // Previene la recarga de la página en caso de error
    // }else{
    //     Swal.fire({
                    
    //         icon: 'success',
    //         title: 'Producto creado!',
    //         showConfirmButton: false,
    //         timer: 1900
    //     }).then(() => {
    //         window.location.href = "crud-product.php"; // Redireccionar
    //     });
    // }




// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('productForm'); 

//     form.addEventListener('submit', function (event) {
//         let isValid = true; 

//         const img = document.getElementById('foto');
//         const error = document.getElementById('img-error');
//         const referenceInput = document.getElementById('Reference');
//         const nameInput = document.getElementById('Name');
//         const descriptionInput = document.getElementById('Description');
//         const stockInput = document.getElementById('Stock');
//         const priceInput = document.getElementById('Price');
//         const discountInput = document.getElementById('Discount');
//         const taxInput = document.getElementById('Tax');



//         if (!validarCampo(img=" ",'img-error')) {
//             isValid = false;}
//         if (!validarCampo(referenceInput, 3, 45, 'reference-error')) {
//             isValid = false;
//         }
//         if (!validarCampo(nameInput, 3, 45, 'name-error')) {
//             isValid = false;
//         }
//         if (!validarCampo(descriptionInput, 5, 45, 'description-error')) {
//             isValid = false;
//         }
//         if (!validarNumeroStock(stockInput, 'stock-error')) { 
//             isValid = false;
//         }
//         if (!validarNumeroPositivo(priceInput, 'price-error')) {
//             isValid = false;
//         }
//         if (!validarNumeroPositivo(discountInput, 'discount-error')) {
//             isValid = false;
//         }
//         if (!validarNumeroPositivo(taxInput, 'tax-error')) {
//             isValid = false;
//         }

//         // Validar campos select
//         const sizeSelect = document.getElementById('Size');
//         const genderSelect = document.getElementById('Gender');
//         const subcategorySelect = document.getElementById('Subcategory');
//         const markSelect = document.getElementById('Mark');
//         const colorSelect = document.getElementById('Color');
//         const stateSelect = document.getElementById('State');

 
        
        
        
        
//         if (!validarSelect(sizeSelect, 'size-error')) {
//             isValid = false;
//         }
//         if (!validarSelect(genderSelect, 'gender-error')) {
//             isValid = false;
//         }
//         if (!validarSelect(subcategorySelect, 'subcategory-error')) {
//             isValid = false;
//         }
//         if (!validarSelect(markSelect, 'mark-error')) {
//             isValid = false;
//         }
//         if (!validarSelect(colorSelect, 'color-error')) {
//             isValid = false;
//         }
//         if (!validarSelect(stateSelect, 'state-error')) {
//             isValid = false;
//         }

//         if (!isValid) {
//             event.preventDefault(); // Evitar el envío del formulario si no es válido
//         }
//     });

//     function validarCampo(input, minLength, maxLength, errorId) {
//         const value = input.value.trim();
//         const errorMessage = `Debe tener entre ${minLength} y ${maxLength} caracteres.`;
//         if (value.length < minLength || value.length > maxLength) {
//             mostrarError(errorId, errorMessage);
//             return false;
//         } else {
//             ocultarError(errorId);
//             return true;
//         }
//     }

//     function validarNumeroStock(input, errorId) {
//         const value = input.value.trim();
//         if (!/^[+]?\d+$/.test(value) || value.length > 11) { 
//             mostrarError(errorId, 'Ingrese un número positivo válido con un máximo de 11 dígitos');
//             return false;
//         } else {
//             ocultarError(errorId);
//             return true;
//         }
//     }

//     function validarNumeroPositivo(input, errorId) {
//         const value = input.value.trim();
//         if (!/^[+]?\d+([.]\d+)?$/.test(value)) {
//             mostrarError(errorId, 'Ingrese un número positivo válido');
//             return false;
//         } else {
//             ocultarError(errorId);
//             return true;
//         }
//     }

//     function validarSelect(select, errorId) {
//         const value = select.value;
//         if (!value || value === '0') {
//             mostrarError(errorId, 'Seleccione una opción válida');
//             return false;
//         } else {
//             ocultarError(errorId);
//             return true;
//         }
//     }

//     function mostrarError(errorId, mensaje) {
//         const errorElement = document.getElementById(errorId);
//         if (errorElement) {
//             errorElement.textContent = mensaje;
//             errorElement.style.color = 'red'; // color rojo
//         }
//     }

//     function ocultarError(errorId) {
//         const errorElement = document.getElementById(errorId);
//         if (errorElement) {
//             errorElement.textContent = '';
//         }
//     }
// });
});