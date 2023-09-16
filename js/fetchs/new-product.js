const file = document.getElementById('foto');
// const foto = document.getElementById('agregar-img-produc');
// file.addEventListener('change', e => {
//   if (e.target.files[0]) {
//     const reader = new FileReader();
//     reader.onload = function (e) {
//       foto.src = e.target.result;
//     }
//     reader.readAsDataURL(e.target.files[0])
//   }
// });

let apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
let urlParams = "http://localhost/api/public/api/params/";
let urlProvider = "http://localhost/api/public/api/providers/";
let urlProducts = "http://localhost/api/public/api/products";
let providerSelect = document.getElementById("Provider");
// Define los elementos select
let color = document.getElementById("Color");
let state = document.getElementById("State");
let size = document.getElementById("Size");
let gender = document.getElementById("Gender");
let subcategory = document.getElementById("Subcategory");
let mark = document.getElementById("Mark");
let providers;




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

    let form = document.getElementById("productForm")
    

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        
        let selectedFile = document.getElementById("foto").files[0];
        let filename = selectedFile.name;
        // let dataForm = new FormData(form);
        let data = {
            provider_id: document.getElementById("Provider").value,
            reference: document.getElementById("Reference").value,
            name: document.getElementById("Name").value,
            description: document.getElementById("Description").value,
            stock: document.getElementById("Stock").value,
            price: document.getElementById("Price").value,
            discount: document.getElementById("Discount").value,
            tax: document.getElementById("Tax").value,
            image: file.value,
            param_size: size.value,
            param_gender:gender.value,
            param_subcategory: subcategory.value,
            param_mark: mark.value,
            param_color: color.value,
            param_state: state.value,        
        }
        console.log(data);
        console.log(urlProducts);
        sendDataToAPI(urlProducts, apiKey, data)
            .then(responseData => {
                // Aquí puedes manejar la respuesta del servidor si es necesario
                console.log('Respuesta del servidor:', responseData);

            })
            .catch(error => {
                // Aquí puedes manejar errores de la solicitud
                console.error('Error al enviar datos:', error);
            });
    })
    

