<?php
require_once('resources/initiator.php');

if (!isset($_SESSION['type_user'])) {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            $jsonString = file_get_contents('php://input');
            $jsonData = json_decode($jsonString, true);
            $user = $jsonData['user'];
            $_SESSION['id'] = $user['id'];
            $_SESSION['first_name'] = $user['first_name'];
            $_SESSION['last_name'] = $user['last_name'];
            $_SESSION['birthday'] = $user['birthday'];
            $_SESSION['address'] = $user['address'];
            $_SESSION['email'] = $user['email'];
            $_SESSION['image'] = $user['image'];
            $_SESSION['param_city'] = $user['param_city'];
            $_SESSION['param_gender'] = $user['param_gender'];
            $_SESSION['param_rol'] = $user['param_rol'];
            $_SESSION['param_state'] = $user['param_state'];
            $_SESSION['type_user'] = $user['type_user'];
        } else {}
    }else{
        if($_SESSION['type_user']!=70000000000){
            header("Location: home.php");
        }else{
            header("Location: index.php");
        }
    }
?>

<link rel="stylesheet" href="../css/login.css">

<?php
require_once('resources/header-basico.php')

?>

<div class="container1">
    <div class="row justify-content-center mt-3 mb-3">

        <form id="miFormulario" class="formulario" method="POST">
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

                <input class="form-control" id="inputPassword" type="password" name="password">
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