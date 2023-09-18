var apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
var urlParams = "http://localhost/api/public/api/params/";
let namee = document.getElementById("EditName");
let paramForeignSelect = document.getElementById("EditParamForeign");
let form = document.getElementById("paramForm");

const valores = window.location.search;
const urlData = new URLSearchParams(valores);
var id = urlData.get('id');

fetchDataFromAPI(urlParams, apiKey)
    .then(data => {
        let params = data.data;

        params.forEach(param => {
            let option = document.createElement('option');
            option.value = param.id;
            option.textContent = param.name;
            paramForeignSelect.appendChild(option);
        });

        
    }).then(() => {
        return fetchDataFromAPI(urlParams, apiKey, id);
    }).then(data => {

        let paraams = data.data[0];
        console.log(paraams);
        namee.value = paraams.name;
        paramForeignSelect.value = paraams.param_foreign;
        
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let data = {
            id: id,
            name: namee.value,
            param_foreign: paramForeignSelect.value,
        };
        console.log(data);
        updateDataToAPI(urlParams, id, apiKey, data)
            .then(responseData => {
                console.log('Respuesta del servidor:', responseData);
            })
            .catch(error => {
                console.log('Error:', error);
            })
    })


