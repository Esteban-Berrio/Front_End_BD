<link rel="stylesheet" href="../css/profile.css">
<?php
require_once('resources/initiator.php')
?>
<?php
require_once('resources/header-1.php')
?>


<body>
    <div class="container mb-4">
        <!-- div contenedor borde naranja -->
        <div class="d-flex flex-wrap justify-content-center border border-3 border-warning mt-3 mb-3 rounded-4">
            
        
            <div class="first row justify-content-center mt-3 mb-3">

                <div class="containerimg" >
                    
                </div>
            
                <!-- <div class="row justify-content-center mt-3 mb-3"> -->
                <div id="namee" class="name mt-3 text-center fw-bold fs-3 ">
                    
                </div>

                <div id="email" class="email mt-2 text-center fs-5 p-1">
                    
                </div>
            </div>
            
            <div class="col-md-4 mt-4 mb-3">
                <div class="mb-3">
                    <div class="fw-bold text-center fs-5 p-2">Género</div>
                    <div id="gender" class="text-center text-body-secondary fw-bold p-2 fs-5"></div>
                </div>
            </div>

            <!-- Segunda columna -->
            <div class="col-md-4 mt-4 mb-3" >
                <div class="mb-3">
                    <div class="fw-bold text-center fs-5 p-2">Ciudad</div>
                    <div id="city" class="text-center text-body-secondary fw-bold p-2 fs-5"></div>
                </div>
            </div>

            <!-- Tercera columna -->
            <div class="col-md-4 mt-4 mb-3">
                <div class="mb-3">
                    <div class="fw-bold text-center fs-5 p-2">Dirección de Envío</div>
                    <div id="address" class="text-center text-body-secondary fw-bold p-2 fs-5"></div>
                </div>
            </div>

            <div class="col-md-4 mt-4 mb-3">
                <div class="mb-3">
                    <div class="fw-bold text-center fs-5 p-2">Tipo Usuario</div>
                    <div id="country" class="text-center text-body-secondary fw-bold p-2 fs-5"></div>
                </div>
            </div>

            <!-- Segunda columna -->
            <div class="col-md-4 mt-4 mb-3" >
                <div class="mb-3">
                    <div class="fw-bold text-center fs-5 p-2">Rol:</div>
                    <div id="rol" class="text-center text-body-secondary fw-bold p-2 fs-5"></div>
                </div>
            </div>

            <!-- Tercera columna -->
            <div class="col-md-4 mt-4 mb-3">
                <div class="mb-3">
                    <div class="fw-bold text-center fs-5 p-2">Fecha de Nacimiento</div>
                    <div id="birthday" class="text-center text-body-secondary fw-bold p-2 fs-5"></div>
                </div>
            </div>
        </div>
        <div class="row mb-3 text-center ">
            <div class="col-md-3 p-2">
                <a href="shopping-cart.php" class="btn btn-lg fw-bold border rounded-pill" id="buttons">Ver Compras</a>
            </div>
            <div class="col-md-3 p-2">
                <a id="editProfileLink" class="btn btn-lg fw-bold border rounded-pill" id="buttons">Editar Perfil</a>
            </div>
            <div class="col-md-3 p-2">
                <a href="#" class="btn btn-lg fw-bold border rounded-pill" id="buttons">Cambiar Contraseña</a>
            </div>
            <div class="col-md-3 p-2">
                <a href="log-out.php" class="btn btn-lg fw-bold border rounded-pill" id="buttons">Cerrar Sesión</a>
            </div>
        </div>
    </div>
    <script src="../js/fetch.js"></script>
    <script src="../js/fetchs/profile.js"></script>
</body>


<?php
require_once('resources/footer.php')
?>