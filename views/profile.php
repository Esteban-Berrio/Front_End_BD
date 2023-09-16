
<?php
require_once('resources/initiator.php');
    if (!isset($_SESSION['type_user'] )) {
        
    }elseif( $_SESSION['type_user'] != 236 ){
        header("Location: home.php");
    }
?>

<link rel="stylesheet" href="../css/profile.css">

<?php
require_once('resources/header-1.php')
?>


<body>
    <div class="container">
        <!-- div contenedor borde naranja -->
        <div class="d-flex flex-wrap justify-content-center border border-3 border-warning mt-3 mb-3 rounded-4">
            
        
            <div class="first row justify-content-center mt-3 mb-3">

                <div class="containerimg" >
                    <img src="../img/perfil.png" id="imgperfil" alt="Foto Perfil">
                </div>
            
                <!-- <div class="row justify-content-center mt-3 mb-3"> -->
                <div class="name mt-3 text-center fw-bold fs-3 ">
                    Nombre Apellido
                </div>

                <div class="email mt-2 text-center fs-5 p-1">
                    correo@gmail.com
                </div>
            </div>
            
            <div class="col-md-4 mt-4 mb-3">
                <div class="mb-3">
                    <div class="fw-bold text-center fs-5 p-2">Género</div>
                    <div class="text-center text-body-secondary fw-bold p-2 fs-5">Masculino</div>
                </div>
            </div>

            <!-- Segunda columna -->
            <div class="col-md-4 mt-4 mb-3" >
                <div class="mb-3">
                    <div class="fw-bold text-center fs-5 p-2">Ciudad</div>
                    <div class="text-center text-body-secondary fw-bold p-2 fs-5">Cali</div>
                </div>
            </div>

            <!-- Tercera columna -->
            <div class="col-md-4 mt-4 mb-3">
                <div class="mb-3">
                    <div class="fw-bold text-center fs-5 p-2">Dirección de Envío</div>
                    <div class="text-center text-body-secondary fw-bold p-2 fs-5">Cra. 25N #1-1</div>
                </div>
            </div>

            <div class="col-md-4 mt-4 mb-3">
                <div class="mb-3">
                    <div class="fw-bold text-center fs-5 p-2">País</div>
                    <div class="text-center text-body-secondary fw-bold p-2 fs-5">Colombia</div>
                </div>
            </div>

            <!-- Segunda columna -->
            <div class="col-md-4 mt-4 mb-3" >
                <div class="mb-3">
                    <div class="fw-bold text-center fs-5 p-2">Departamento</div>
                    <div class="text-center text-body-secondary fw-bold p-2 fs-5">Valle del Cauca</div>
                </div>
            </div>

            <!-- Tercera columna -->
            <div class="col-md-4 mt-4 mb-3">
                <div class="mb-3">
                    <div class="fw-bold text-center fs-5 p-2">Fecha de Nacimiento</div>
                    <div class="text-center text-body-secondary fw-bold p-2 fs-5">25/07/2000</div>
                </div>
            </div>
        </div>
        <div class="row mb-3 text-center">
            <div class="col-md-4 p-2">
                <a href="shopping-cart.php" class="btn btn-lg fw-bold border rounded-pill" id="buttons">Ver Compras</a>
            </div>
            <div class="col-md-4 p-2">
                <a href="edit-user.php" class="btn btn-lg fw-bold border rounded-pill" id="buttons">Editar Perfil</a>
            </div>
            <div class="col-md-4 p-2">
                <a href="#" class="btn btn-lg fw-bold border rounded-pill" id="buttons">Cambiar Contraseña</a>
            </div>
        </div>
    </div>
</body>


<?php
require_once('resources/footer.php')
?>