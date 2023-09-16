

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
        return fetchDataFromAPI(urlUsers, apiKey, id);
    })
    .then(data => {
        let productData = data.data[0];
        Name.value = productData.first_name;
        Birthday.value = productData.birthday;
        City.value = productData.param_city;
        email.value = productData.email;
        State.value = productData.param_state;
        Lastname.value = productData.last_name;
        Address.value = productData.address;
        TypeUser.value = productData.type_user;
        Rol.value = productData.param_rol;
        Gender.value = productData.param_gender;

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

        Swal.fire({
            icon: 'success',
            title: 'Usuario actualizado!',
            showConfirmButton: false,
            timer: 1900
        }).then((result) => {
            // Verificar si el usuario cerró la alerta
            if (result.dismiss === Swal.DismissReason.timer) {
                // Realizar la redirección aquí
                window.location.href = "crud-users-master.php"; 
            }
        });
    })
    .catch(error => {
        console.error('Error al enviar datos:', error);
    });

});
