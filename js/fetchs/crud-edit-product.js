const file = document.getElementById('foto');
const foto = document.getElementById('agregar-img-produc');
file.addEventListener('change', e => {
    if (e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            foto.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0])
    }
});

let apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
let urlParams = "http://localhost/api/public/api/params/";
let urlProvider = "http://localhost/api/public/api/providers/";
let urlProducts = "http://localhost/api/public/api/products/";
let providerSelect = document.getElementById("Provider");
// Define los elementos select
let reference = document.getElementById("Reference");
let namee = document.getElementById("Name");
let description = document.getElementById("Description");
let stock = document.getElementById("Stock");
let price = document.getElementById("Price");
let discount = document.getElementById("Discount");
let tax = document.getElementById("Tax");
let provider=document.getElementById("Provider");
let size = document.getElementById("Size");
let gender = document.getElementById("Gender");
let subcategory = document.getElementById("Subcategory");
let mark = document.getElementById("Mark");
let color = document.getElementById("Color");
let state = document.getElementById("State");

const valores = window.location.search;
const urlData = new URLSearchParams(valores);
var id = urlData.get('id');

// Función para llenar un select
function fillSelect(selectElement, data, paramtype_id) {
    const paramsOfType = data.filter(param => param.paramtype_id === paramtype_id);

    paramsOfType.forEach(param => {
        let option = document.createElement('option');
        option.value = param.id;
        option.textContent = param.name;
        selectElement.appendChild(option);
    });
}

// Obtén los datos de los parámetros
let paramsData;
let providersData;
let productData;

fetchDataFromAPI(urlProvider, apiKey)
    .then(data => {
        providersData = data.data;
        // Llena los select de proveedores con los datos correspondientes
        providersData.forEach(provider => {
            let option = document.createElement('option');
            option.value = provider.id;
            option.textContent = provider.legal_name;
            providerSelect.appendChild(option);
        });
    })
    .then(() => {
        // Después de obtener los proveedores, obtén los datos de los parámetros
        return fetchDataFromAPI(urlParams, apiKey);
    })
    .then(data => {
        paramsData = data.data;
        // Llena los selects con los datos correspondientes
        fillSelect(color, paramsData, 8);
        fillSelect(state, paramsData, 9);
        fillSelect(size, paramsData, 6);
        fillSelect(gender, paramsData, 7);
        fillSelect(subcategory, paramsData, 13);
        fillSelect(mark, paramsData, 4);
    })
    .then(() => {
        // Después de obtener los datos de los parámetros, obtén los datos del producto
        return fetchDataFromAPI(urlProducts, apiKey, id);
    })
    .then(data => {
        productData = data.data[0];
        reference.value = productData.reference;
        namee.value = productData.name;
        description.value = productData.description;
        stock.value = productData.stock;
        price.value = productData.price;
        discount.value = productData.discount;
        tax.value = productData.tax;
        provider.value = productData.provider_id;
        size.value = productData.param_size;
        gender.value = productData.param_gender;
        subcategory.value = productData.param_subcategory;
        mark.value = productData.param_mark;
        color.value = productData.param_color;
        state.value = productData.param_state;
    })
    .catch(error => {
        console.error('Error:', error);
    });

let form = document.getElementById("productForm");
form.setAttribute('action', `crud-product.php`);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let selectedFile = document.getElementById("foto").files[0];
    let filename = selectedFile.name;
    let data = {
        provider_id: provider.value,
        reference: reference.value,
        name: namee.value,
        description: description.value,
        stock: stock.value,
        price: price.value,
        discount: discount.value,
        tax: tax.value,
        images: filename,
        param_size: size.value,
        param_gender: gender.value,
        param_subcategory: subcategory.value,
        param_mark: mark.value,
        param_color: color.value,
        param_state: state.value,
    };

    console.log(data);
    console.log(urlProducts);
    // Llama a la función para enviar datos a la API aquí
    updateDataToAPI(urlProducts, id, apiKey, data)
        .then(responseData => {
            // Aquí puedes manejar la respuesta del servidor si es necesario
            console.log('Respuesta del servidor:', responseData);
        })
        .catch(error => {
            // Aquí puedes manejar errores de la solicitud
            console.error('Error al enviar datos:', error);
        });
});
