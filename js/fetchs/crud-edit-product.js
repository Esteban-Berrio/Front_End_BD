

let apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
let urlParams = "http://localhost/api/public/api/params/";
let urlProvider = "http://localhost/api/public/api/providers/";
let urlProducts = "http://localhost/api/public/api/products/";
let providerSelect = document.getElementById("Provider");

let fotoProduct =document.getElementById("fotoProduct");
let reference = document.getElementById("Reference");
let namee = document.getElementById("Name");
let description = document.getElementById("Description");
let stock = document.getElementById("Stock");
let price = document.getElementById("Price");
let discount = document.getElementById("Discount");
let tax = document.getElementById("Tax");
let provider = document.getElementById("Provider");
console
let size = document.getElementById("Size");
let gender = document.getElementById("Gender");
let subcategory = document.getElementById("Subcategory");
let mark = document.getElementById("Mark");
let color = document.getElementById("Color");
let state = document.getElementById("State");

const valores = window.location.search;
const urlData = new URLSearchParams(valores);
var id = urlData.get('id');


function fillSelect(selectElement, data, paramtype_id) {
    const paramsOfType = data.filter(param => param.paramtype_id === paramtype_id);

    paramsOfType.forEach(param => {
        let option = document.createElement('option');
        option.value = param.id;
        option.textContent = param.name;
        selectElement.appendChild(option);
    });
}

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

let paramsData;
let providersData;
let productData;

fetchDataFromAPI(urlProvider, apiKey)
    .then(data => {
        providersData = data.data;

        providersData.forEach(provider => {
            let option = document.createElement('option');
            option.value = provider.id;
            option.textContent = provider.legal_name;
            providerSelect.appendChild(option);
        });
    })
    .then(() => {

        return fetchDataFromAPI(urlParams, apiKey);
    })
    .then(data => {
        paramsData = data.data;

        fillSelect(color, paramsData, 8);
        fillSelect(state, paramsData, 9);
        fillSelect(size, paramsData, 6);
        fillSelect(gender, paramsData, 7);
        fillSelect(subcategory, paramsData, 13);
        fillSelect(mark, paramsData, 4);
    })
    .then(() => {

        return fetchDataFromAPI(urlProducts, apiKey, id);
    })
    .then(data => {
        productData = data.data[0];
        console.log(data);
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
        fotoProduct.src = ("../img/productos/"+productData.reference+".png");

    })
    .catch(error => {
        console.error('Error:', error);
    });
let formu = document.getElementById("productForm");





function aquiestoy() {
    
    const fileInput = document.getElementById('foto');
    const imageFile = fileInput.files[0];
    const imageNameInput = document.getElementById('Reference');
    const imageName = imageNameInput.value.trim();

    if (imageFile && imageName) {
        const fileExtension = imageFile.name.split('.').pop().toLowerCase();

        // Verificar la extensión del archivo (por ejemplo, jpg o png)
        if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png') {
            const reader = new FileReader();

            reader.onload = function () {
                const base64Image = reader.result.split(',')[1];

                // Crear un objeto con el nombre y la imagen codificada en base64
                const imageData = { name: imageName, image: base64Image };

                // Enviar la imagen al servidor PHP
                fetch('http://localhost/front-end-2/img/productos/guardar_imagen.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(imageData),
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data.message);
                    fileInput.value = ''; // Limpiar el campo de entrada de archivos
                    imageNameInput.value = ''; // Limpiar el campo de nombre
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            };

            reader.readAsDataURL(imageFile);
        } else {
            console.error('Extensión de archivo no válida');
        }
    } 
    // else {
    //     console.error('Selecciona una imagen y proporciona un nombre');
    // }
};





formu.addEventListener("submit", async (e) => {
    e.preventDefault();
    aquiestoy();
    let selectedFile = document.getElementById("foto").files[0];
    let formData = new FormData(formu);

    formData.append('provider_id', provider.value);
    formData.append('reference', reference.value);
    formData.append('name', namee.value);
    formData.append('description', description.value);
    formData.append('stock', stock.value);
    formData.append('price', price.value);
    formData.append('discount', discount.value);
    formData.append('tax', tax.value);
    formData.append('images',("../img/productos/"+reference.value+".png"));
    formData.append('param_size', size.value);
    formData.append('param_gender', gender.value);
    formData.append('param_subcategory', subcategory.value);
    formData.append('param_mark', mark.value);
    formData.append('param_color', color.value);
    formData.append('param_state', state.value);





    let data = {
        provider_id: provider.value,
        reference: reference.value,
        name: namee.value,
        description: description.value,
        stock: stock.value,
        price: price.value,
        discount: discount.value,
        tax: tax.value,
        images:"../img/productos/"+reference.value+".png",
        param_size: size.value,
        param_gender: gender.value,
        param_subcategory: subcategory.value,
        param_mark: mark.value,
        param_color: color.value,
        param_state: state.value,
    };





    updateDataToAPI(urlProducts, id, apiKey, data)

        .then(responseData => {
            console.log('Respuesta del servidor:', responseData);
            location.reload();
        }).catch((error) => {
            console.error('Error:', error);

        });


}); 