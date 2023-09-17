var apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
var apiUrl = "http://localhost/api/public/api/users/";
var userr;

let namee = document.getElementById("namee");
let email = document.getElementById("email");
let gender = document.getElementById("gender");
let city = document.getElementById("city");
let address = document.getElementById("address");
let country = document.getElementById("country");
let rol = document.getElementById("rol");
let birthday = document.getElementById("birthday");

const valores = window.location.search;
const urlData = new URLSearchParams(valores);
var id = urlData.get('id');

fetchDataFromAPI(apiUrl, apiKey, id)
    .then(data => {
       
        userr = data.data[0];

        namee.innerHTML = userr.first_name + " " + userr.last_name;
        email.innerHTML = userr.email;
        gender.innerHTML = userr.param_gender;
        city.innerHTML = userr.param_city;
        address.innerHTML = userr.address;
        country.innerHTML = userr.type_user;
        rol.innerHTML = userr.param_rol;
        birthday.innerHTML = userr.birthday;

        document.getElementById('editProfileLink').href = `edit-user.php?id=${userr.id}`;
    })