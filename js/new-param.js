var apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
var paramsUrl = "http://localhost/api/public/api/params";
var typeparamsUrl = "http://localhost/api/public/api/paramTypes";


let namee = document.getElementById("ParamName");
let paramtypeSelect = document.getElementById("ParamTypeID");
let paramForeignSelect = document.getElementById("ParamForeign");
let paramStateSelect = document.getElementById("ParamState");
let state = document.getElementById("ParamState");
let form = document.getElementById("paramForm");
const paramTypeIDError = document.getElementById("paramTypeID-error");
const paramForeignError = document.getElementById("paramForeign-error");
const paramNameError = document.getElementById("paramName-error");
const paramStateError = document.getElementById("paramState-error");

fetchDataFromAPI(typeparamsUrl, apiKey)
    .then(data => {
        paramtypes = data.data;
        // console.log(providers)
        for(let paramtype of paramtypes) {
            let option = document.createElement('option');
            option.value = paramtype.id;
            option.textContent = paramtype.name; // Puedes usar legal_name o commercial_name, según lo que desees mostrar
            paramtypeSelect.appendChild(option);
            
        }
    })
    
    fetchDataFromAPI(paramsUrl, apiKey)
        .then(data => {
            if(data && data.data){
        params = data.data;
        // console.log(providers)
        for(let param of params) {
            if (param.paramtype_id === 9) {
                let option = document.createElement('option');
                option.value = param.id;
                option.textContent = param.name; // Puedes usar legal_name o commercial_name, según lo que desees mostrar
                paramStateSelect.appendChild(option);
            }
            
            let option = document.createElement('option');
            option.value = param.id;
            option.textContent = param.name; // Puedes usar legal_name o commercial_name, según lo que desees mostrar
            paramForeignSelect.appendChild(option);
            
        }
    }else {
        console.warn('No se obtuvieron datos de parámetros desde la API.');
    }
    })    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let valid = true;
        
        if (paramtypeSelect.value.trim() === "") {
            paramTypeIDError.textContent = "Este campo es obligatorio";
            paramTypeIDError.style.display = "block";
            valid = false;
        } else {
            paramTypeIDError.style.display = "none";
        }
    
        if (namee.value.trim() === "") {
            paramNameError.textContent = "Este campo es obligatorio";
            paramNameError.style.display = "block";
            valid = false;
        } else {
            paramNameError.style.display = "none";
        }
    
        if (paramStateSelect.value.trim() === "") {
            paramStateError.textContent = "Este campo es obligatorio";
            paramStateError.style.display = "block";
            valid = false;
        } else {
            paramStateError.style.display = "none";
        }
    
        if (!valid) {
            e.preventDefault(); // Previene la recarga de la página en caso de error
        }else{
            let data = {
                paramTypeId: paramtypeSelect.value,
                name: namee.value,
                param_foreign: paramForeignSelect.value,
                param_state: paramStateSelect.value
            }
    
            sendDataToAPI(paramsUrl, apiKey, data)
            .then(responseData => {
                // Aquí puedes manejar la respuesta del servidor si es necesario
                console.log('Respuesta del servidor:', responseData);
                if (responseData.type === 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Parámetro creado!',
                        showConfirmButton: false,
                        timer: 1900
                    }).then(() => {
                        window.location.href = "crud-params.php"; // Redireccionar solo si la respuesta es exitosa
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: responseData.error.message // Muestra el mensaje de error del servidor
                    });
                }
            })
            .catch(error => {
                // Aquí puedes manejar errores de la solicitud
                console.error('Error al enviar datos:', error);
            });
        }

        
        }

        
    )



