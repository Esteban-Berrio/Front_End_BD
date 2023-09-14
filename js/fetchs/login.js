var form = document.getElementById("miFormulario");
var urlLogin = "http://localhost/api/public/api/login";
var apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";

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
                position: 'top-end',
                icon: 'error',
                title: 'Usuario no autorizado/Credenciales erroneas',
                showConfirmButton: false,
                timer: 1500
            });
            throw new Error('Usuario no autorizado/Credenciales erroneas');
        }
        return response.json();
    }).then((responseData) => {
        let user = responseData.user;
        console.log(user);

        // Ahora, después de obtener el usuario, puedes enviarlo al servidor PHP
        var jsonData = { user: user };

        // Convierte el objeto JSON en una cadena JSON
        var jsonString = JSON.stringify(jsonData);

        // Envia la cadena JSON al servidor PHP a través de una solicitud AJAX (ejemplo usando Fetch API)
        fetch('login.php', {
            method: 'POST',
            body: jsonString
        })
            .then(response => {
                // Manejar la respuesta del servidor si es necesario
                console.log('Datos JSON enviados al servidor');
                console.log(data)

            })
            .catch(error => {
                console.error('Error:', error);
            });

    }).catch((error) => {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Usuario no autorizado/Credenciales erroneas',
            showConfirmButton: false,
            timer: 1500
        });
    });
});
