let apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
let urlParams = "http://localhost/api/public/api/params/";
let urlProvider = "http://localhost/api/public/api/providers/";
let urlUsers = "http://localhost/api/public/api/users";
// let providerSelect = document.getElementById("Provider");
// Define los elementos select
let city = document.getElementById("inputCity");
let gender = document.getElementById("inputGender");
let state = document.getElementById("inputState");
let typeUser = document.getElementById("inputTypeUser");
let Rol = document.getElementById("inputRole");
// let subcategory = document.getElementById("Subcategory");
// let mark = document.getElementById("Mark");
let providers;






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
        fillSelect(city, 14);
        fillSelect(state, 9);
        fillSelect(typeUser, 3);
        fillSelect(Rol, 15);
        fillSelect(gender, 7);
        // fillSelect(subcategory, 13);
        // fillSelect(mark, 4);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    let form = document.getElementById("miformulario")
    // form.setAttribute('action', `crud-users.php`);

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        
        // let selectedFile = document.getElementById("foto").files[0];
        // let filename = selectedFile.name;
        // let dataForm = new FormData(form);
        let data = {
            first_name: document.getElementById("inputName").value,
            birthday: document.getElementById("dateOfBirth").value,
            city: document.getElementById("inputCity").value,
            email: document.getElementById("inputEmail").value,
            param_state: document.getElementById("inputState").value,
            last_name: document.getElementById("inputLastName").value,
            address: document.getElementById("inputAddress").value,
            type_user: document.getElementById("inputTypeUser").value,
            // param_gender: document.getElementById("gender").value,

            password: document.getElementById("inputPassword").value,
            param_rol: document.getElementById("inputRole").value,
            // images: filename,
            
            
            param_city: city.value,
            param_gender:gender.value,
            type_user: typeUser.value,
            param_rol: Rol.value,
            param_state: state.value,        
        }
        console.log(data);
        console.log(urlUsers);
        sendDataToAPI(urlUsers, apiKey, data)
            .then(responseData => {
                // Aquí puedes manejar la respuesta del servidor si es necesario
                console.log('Respuesta del servidor:', responseData);
                
            })
            .catch(error => {
                // Aquí puedes manejar errores de la solicitud
                console.error('Error al enviar datos:', error);
            });
    })
    

