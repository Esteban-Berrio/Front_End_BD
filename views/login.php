<?php
require_once('resources/initiator.php');

// Iniciar la sesión si aún no está iniciada
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recibir la cadena JSON enviada desde JavaScript
    $jsonString = file_get_contents('php://input');

    // Decodificar la cadena JSON en un arreglo asociativo en PHP
    $jsonData = json_decode($jsonString, true);

    // Almacenar los datos en una variable de sesión
    $_SESSION['data'] = $jsonData;

    // Respuesta de éxito
    echo 'Datos JSON almacenados en la variable de sesión correctamente.';
} else {
    // Si se accede al archivo directamente sin una solicitud POST
    echo 'Acceso no autorizado.';
}
?>

<link rel="stylesheet" href="../css/login.css">

<?php
require_once('resources/header-basico.php')



?>

<div class="container1">
    <div class="row justify-content-center mt-3">

        <form id="miFormulario"class="formulario" method="POST">
            <div class="title text-center">
                Bienvenido
            </div>
            <div>
                <img class="avatar" src="../img/perfil.png" alt="">
            </div>

            <div class="col-md-7 mx-auto mb-5 d-grid gap-2">

                <label class="word" name="email">Correo</label>

                <input class="form-control" id="inputEmail" type="email" name="email">
                <div id="emailError" class="error"></div>
            </div>
            <div class="col-md-7 mx-auto mb-5 d-grid gap-2">

                <label class="word" name="password">Contraseña</label>

                <input class="form-control" id="inputPassword"type="password" name="password">
                <div id="passwordError" class="error"></div>

            </div>

            <div class="col-md-5 mx-auto mb-4 text-center">
                <button type="submit" class="btn btn-light">Iniciar Sesión</button>
            </div>
            <div class="col-md-4 mx-auto mb-4 text-center">
                <a class="link_register" href="register.php">Registrarse</a>
            </div>
        </form>
    </div>
</div>
<script src="../js/fetch.js"></script>
<script src="../js/fetchs/login.js"></script>
<script src="../js/login.js"></script>
<?php
require_once('resources/footer.php')
?>