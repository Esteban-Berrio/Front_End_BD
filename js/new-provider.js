var apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
let urlParams = "http://localhost/api/public/api/params/";
let urlProvider = "http://localhost/api/public/api/providers";


const LegalName = document.getElementById("legalName");
const CommercialName = document.getElementById("commercialName");
const Email = document.getElementById("email");
const Phone = document.getElementById("phone");
const Address = document.getElementById("address");
const citySelect = document.getElementById("city");

const NameContact = document.getElementById("nameContact");
const bankSelect = document.getElementById("bank");
const accountTypeSelect = document.getElementById("accountType");
const accountNumberr = document.getElementById("accountNumber");
const stateSelect = document.getElementById("state");


let form = document.getElementById("providerForm");

fetchDataFromAPI(urlParams, apiKey)
        .then(data => {
            if(data && data.data){
        params = data.data;
        // console.log(providers)
        for(let param of params) {
            if (param.paramtype_id === 9) {
                let option = document.createElement('option');
                option.value = param.id;
                option.textContent = param.name; // Puedes usar legal_name o commercial_name, según lo que desees mostrar
                stateSelect.appendChild(option);
            }
            if (param.paramtype_id === 11) {
            let optionBank = document.createElement('option');
            optionBank.value = param.id;
            optionBank.textContent = param.name;
            bankSelect.appendChild(optionBank);
            }

            if (param.paramtype_id === 12) {
            let optionAccountType = document.createElement('option');
            optionAccountType.value = param.id;
            optionAccountType.textContent = param.name;
            accountTypeSelect.appendChild(optionAccountType);
            }

            

            if (param.paramtype_id === 14) {
            let optionCity = document.createElement('option');
            optionCity.value = param.id;
            optionCity.textContent = param.name;
            citySelect.appendChild(optionCity);
            }

        }
    }else {
        console.warn('No se obtuvieron datos de parámetros desde la API.');
    }

})
    

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let data = {
            
            legal_name: LegalName.value,
            commercial_name: CommercialName.value,
            email: Email.value,
            phone: Phone.value,
            address: Address.value,
            param_city: citySelect.value,
            name_contact: NameContact.value,
            param_bank: bankSelect.value,
            param_account: accountTypeSelect.value,
            account: accountNumberr.value,
            param_state: stateSelect.value
        }

        console.log(data);
        sendDataToAPI(urlProvider, apiKey, data)
            .then(responseData => {
                console.log('Respuesta del servidor:', responseData);
            })
            .catch(error => {
                console.log('Error:', error);
            })
    })

