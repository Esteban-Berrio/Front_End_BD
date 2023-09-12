<?php
require_once('resources/initiator.php')
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
<script src="../js/login.js"></script>

<?php
require_once('resources/footer.php')
?>