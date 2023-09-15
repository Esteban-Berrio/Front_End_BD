var form = document.getElementById("miFormulario");
var urlLogin = "http://localhost/api/public/api/login";
var apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
var user=undefined;
function redireccion() {
    if(user["type_user"]!=700000000){
        window.location.href = "home.php";
    }else{
        window.location.href = "index.php"
    }
}




form.addEventListener('submit', function (e) {
    e.preventDefault();

    var data = {
        email: document.getElementById('inputEmail').value,
        password: document.getElementById('inputPassword').value
    };

    fetch(urlLogin + '?key=' + apiKey, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => {
        if (!response.ok) {
            Swal.fire({
                
                icon: 'error',
                title: 'Usuario no autorizado/Credenciales erroneas',
                showConfirmButton: false,
                timer: 1500
            });
            throw new Error('Usuario no autorizado/Credenciales erroneas');
        }
        return response.json();
    }).then((responseData) => {
        user = responseData.user;

        fetch('login.php', {
            method: 'POST',
            body: JSON.stringify({ user: user }), // Envia el user al servidor
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.text();
            })
            
            .catch(error => {
                console.error('Error en la solicitud AJAX:', error);
            });

    redireccion();

    }).catch((error) => {
        Swal.fire({
            
            icon: 'error',
            title: 'Usuario no autorizado/Credenciales erroneas',
            showConfirmButton: false,
            timer: 1500
        });
    });
    

  
});
