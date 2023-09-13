document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('productForm'); 

    form.addEventListener('submit', function (event) {
        let isValid = true; 

        
        const referenceInput = document.getElementById('Reference');
        const nameInput = document.getElementById('Name');
        const descriptionInput = document.getElementById('Description');
        const stockInput = document.getElementById('Stock');
        const priceInput = document.getElementById('Price');
        const discountInput = document.getElementById('Discount');
        const taxInput = document.getElementById('Tax');

        if (!validarCampo(referenceInput, 3, 45, 'reference-error')) {
            isValid = false;
        }
        if (!validarCampo(nameInput, 3, 45, 'name-error')) {
            isValid = false;
        }
        if (!validarCampo(descriptionInput, 5, 45, 'description-error')) {
            isValid = false;
        }
        if (!validarNumeroStock(stockInput, 'stock-error')) { 
            isValid = false;
        }
        if (!validarNumeroPositivo(priceInput, 'price-error')) {
            isValid = false;
        }
        if (!validarNumeroPositivo(discountInput, 'discount-error')) {
            isValid = false;
        }
        if (!validarNumeroPositivo(taxInput, 'tax-error')) {
            isValid = false;
        }

        // Validar campos select
        const sizeSelect = document.getElementById('Size');
        const genderSelect = document.getElementById('Gender');
        const subcategorySelect = document.getElementById('Subcategory');
        const markSelect = document.getElementById('Mark');
        const colorSelect = document.getElementById('Color');
        const stateSelect = document.getElementById('State');

        if (!validarSelect(sizeSelect, 'size-error')) {
            isValid = false;
        }
        if (!validarSelect(genderSelect, 'gender-error')) {
            isValid = false;
        }
        if (!validarSelect(subcategorySelect, 'subcategory-error')) {
            isValid = false;
        }
        if (!validarSelect(markSelect, 'mark-error')) {
            isValid = false;
        }
        if (!validarSelect(colorSelect, 'color-error')) {
            isValid = false;
        }
        if (!validarSelect(stateSelect, 'state-error')) {
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Evitar el envío del formulario si no es válido
        }
    });

    function validarCampo(input, minLength, maxLength, errorId) {
        const value = input.value.trim();
        const errorMessage = `Debe tener entre ${minLength} y ${maxLength} caracteres.`;
        if (value.length < minLength || value.length > maxLength) {
            mostrarError(errorId, errorMessage);
            return false;
        } else {
            ocultarError(errorId);
            return true;
        }
    }

    function validarNumeroStock(input, errorId) {
        const value = input.value.trim();
        if (!/^[+]?\d+$/.test(value) || value.length > 11) { 
            mostrarError(errorId, 'Ingrese un número positivo válido con un máximo de 11 dígitos');
            return false;
        } else {
            ocultarError(errorId);
            return true;
        }
    }

    function validarNumeroPositivo(input, errorId) {
        const value = input.value.trim();
        if (!/^[+]?\d+([.]\d+)?$/.test(value)) {
            mostrarError(errorId, 'Ingrese un número positivo válido');
            return false;
        } else {
            ocultarError(errorId);
            return true;
        }
    }

    function validarSelect(select, errorId) {
        const value = select.value;
        if (!value || value === '0') {
            mostrarError(errorId, 'Seleccione una opción válida');
            return false;
        } else {
            ocultarError(errorId);
            return true;
        }
    }

    function mostrarError(errorId, mensaje) {
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = mensaje;
            errorElement.style.color = 'red'; // color rojo
        }
    }

    function ocultarError(errorId) {
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = '';
        }
    }
});
