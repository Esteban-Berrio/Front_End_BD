<?php
require_once('resources/initiator.php')
?>

<link rel="stylesheet" href="../css/login.css">

<?php
require_once('resources/header-basico.php')
?>

<div class="container1">
    <div class="row justify-content-center mt-3">

        <form class="formulario" action="check" method="post">
            <div class="title text-center">
                Bienvenido
            </div>
            <div>
                <img class="avatar" src="../img/perfil.png" alt="">
            </div>

            <div class="col-md-7 mx-auto mb-5 d-grid gap-2">

                <label class="word" name="email">Correo</label>

                <input class="form-control" type="email" name="email">
            </div>
            <div class="col-md-7 mx-auto mb-5 d-grid gap-2">

                <label class="word" name="password">Contraseña</label>

                <input class="form-control" type="password" name="password">

            </div>

            <div class="col-md-5 mx-auto mb-4 text-center">
                <button type="button" class="btn btn-light">Iniciar Sesión</button>
            </div>
            <div class="col-md-4 mx-auto mb-4 text-center">
                <a class="link_register" href="register.php">Registrarse</a>
            </div>
        </form>
    </div>
</div>

<?php
require_once('resources/footer.php')
?>