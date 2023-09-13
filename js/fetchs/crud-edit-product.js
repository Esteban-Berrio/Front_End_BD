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
let provider = document.getElementById("Provider");
let namee = document.getElementById("Name");
let description = document.getElementById("Description");
let stock = document.getElementById("Stock");
let price = document.getElementById("Price");
let discount = document.getElementById("Discount");
let tax = document.getElementById("Tax");
let size = document.getElementById("Size");
let gender = document.getElementById("Gender");
let subcategory = document.getElementById("Subcategory");
let mark = document.getElementById("Mark");
let color = document.getElementById("Color");
let state = document.getElementById("State");

let providers;
const valores = window.location.search;
const urlData = new URLSearchParams(valores);
var id = urlData.get('id');


fetchDataFromAPI(urlProvider, apiKey)
    .then(data => {
        providers = data.data;
        // console.log(providers)
        for(let provider of providers) {
            let option = document.createElement('option');
            option.value = provider.id;
            option.textContent = provider.legal_name; // Puedes usar legal_name o commercial_name, según lo que desees mostrar
            providerSelect.appendChild(option);
        }
    })

// Obtén los datos de los parámetros
let paramsData;

fetchDataFromAPI(urlParams, apiKey)
    .then(data => {
        

        
        paramsData = data.data;

        // Función para llenar un select
        function fillSelect(selectElement, paramtype_id) {
            const paramsOfType = paramsData.filter(param => param.paramtype_id === paramtype_id);

            paramsOfType.forEach(param => {
                let option = document.createElement('option');
                option.value = param.id;
                option.textContent = param.name;
                selectElement.appendChild(option);
            });
        }

        // Llena los selects con los datos correspondientes
        fillSelect(color, 8);
        fillSelect(state, 9);
        fillSelect(size, 6);
        fillSelect(gender, 7);
        fillSelect(subcategory, 13);
        fillSelect(mark, 4);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    fetchDataFromAPI(urlProducts, apiKey, id)
    .then(data => {
        productData = data.data;
        // console.log(productData);
        reference.value = productData[0].reference;
        namee.value = productData[0].name;
        description.value = productData[0].description;
        stock.value = productData[0].stock;
        price.value = productData[0].price;
        discount.value = productData[0].discount;
        tax.value = productData[0].tax;
        provider.value = productData[0].provider_id;
        size.value = productData[0].param_size;
        gender.value = productData[0].param_gender;
        subcategory.value = productData[0].param_subcategory;
        mark.value = productData[0].param_mark;
        color.value = productData[0].param_color;
        state.value = productData[0].param_state;
    })

    let form = document.getElementById("productForm")

    form.addEventListener("submit", (e) => {
       e.preventDefault()
        let selectedFile = document.getElementById("foto").files[0];
        let filename = selectedFile.name;
        let dataForm = new FormData(form);
        let data = {
            provider_id: document.getElementById("Provider").value,
            reference: document.getElementById("Reference").value,
            name: document.getElementById("Name").value,
            description: document.getElementById("Description").value,
            stock: document.getElementById("Stock").value,
            price: document.getElementById("Price").value,
            discount: document.getElementById("Discount").value,
            tax: document.getElementById("Tax").value,
            images: filename,
            param_size: size.value,
            param_gender:gender.value,
            param_subcategory: subcategory.value,
            param_mark: mark.value,
            param_color: color.value,
            param_state: state.value,        
        }
        console.log(data);
        console.log(urlProducts);
        updateDataToAPI(urlProducts, id, apiKey, data)
            .then(responseData => {
                // Aquí puedes manejar la respuesta del servidor si es necesario
                console.log('Respuesta del servidor:', responseData);
            })
            .catch(error => {
                // Aquí puedes manejar errores de la solicitud
                console.error('Error al enviar datos:', error);
            });
        })

