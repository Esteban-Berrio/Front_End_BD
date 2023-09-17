

let apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
let urlParams = "http://localhost/api/public/api/params/";
let urlUsers = "http://localhost/api/public/api/users/";

// Define los elementos select
let Name = document.getElementById("EditName");
let Birthday = document.getElementById("EditDateOfBirth");
let City = document.getElementById("EditCity");
let email = document.getElementById("email");
let State = document.getElementById("EditState");
let Lastname = document.getElementById("EditLastname");
let Address = document.getElementById("EditAddress");
let TypeUser = document.getElementById("EditTypeUser");
let Rol = document.getElementById("EditRol");
let Gender = document.getElementById("EditGender");




const valores = window.location.search;
const urlData = new URLSearchParams(valores);
var id = urlData.get('id');

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
        fillSelect(City, 14);
        fillSelect(State, 9);
        fillSelect(TypeUser, 3);
        fillSelect(Rol, 15);
        fillSelect(Gender, 7);

    })
    .then(() => {
        return fetchDataFromAPI(urlUsers, apiKey, id)
    })
    .then(data => {
        let userData = data.data[0];
        Name.value = userData.first_name;
        Birthday.value = userData.birthday;
        City.value = userData.param_city;
        email.value = userData.email;
        State.value = userData.param_state;
        Lastname.value = userData.last_name;
        Address.value = userData.address;
        TypeUser.value = userData.type_user;
        Rol.value = userData.param_rol;
        Gender.value = userData.param_gender;

    });

let form = document.getElementById("miFormulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let dataForm = new FormData(form);
    let data = {
        first_name: document.getElementById("EditName").value,
        birthday: document.getElementById("EditDateOfBirth").value,
        email: document.getElementById("email").value,
        last_name: document.getElementById("EditLastname").value,
        address: document.getElementById("EditAddress").value,
        param_city: City.value,
        param_state: State.value,
        type_user: TypeUser.value,
        param_rol: Rol.value,
        param_gender: Gender.value,


    };

    updateDataToAPI(urlUsers, id, apiKey, data)
    .then(responseData => {
        console.log('Respuesta del servidor:', responseData);

        
    })
    .catch(error => {
        console.error('Error al enviar datos:', error);
    });

});
