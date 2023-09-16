<?php
    require_once('resources/initiator.php');

    if ($_SESSION['param_rol'] != 3403) {
        header("Location: home.php");
    }
?>

<link rel="stylesheet" href="../css/edit-params.css">

<?php
require_once('resources/template-crud.php')
?>

<div class="col-sm-12 col-md-10 col-lg-10 col-xl-10 pt-5">
    <div class="card-header p-3">
        <div class="container">
            <div class="d-flex flex-wrap justify-content-center">
                <!-- Texto de editar parámetros -->
                <h1>EDITAR PARÁMETROS</h1>
            </div>
        </div>
    </div>
    <div class="container-crud">
        <!-- comienza contenedor y formulario de editar perfil -->
        <form method="post" id="paramForm" class="sc p-5 mb-5" enctype="multipart/form-data">
            <div class="row">
                <div class="container d-flex justify-content-center">
                    <div class="col-md-4 text-center mb-5">
                        <div class="Edit_name">
                            <label for="EditName" class="form-label">Nombre</label>
                            <input type="text" class="form-control input-lg" id="EditName" name="paramName">
                            <div id="nombreError" class="error"></div>
                        </div>
                    </div>
                </div>
                <div class="container d-flex justify-content-center">
                    <div class="col-md-4 text-center mb-5">
                        <div class="state">
                            <label for="EditState" class="form-label">Estado</label>
                            <select class="form-select select-lg" id="EditState" name="paramState">
                                <!-- Agrega aquí más opciones de estados según sea necesario -->
                            </select>
                            <div id="stateError" class="error"></div>
                        </div>
                    </div>
                </div>
                <div class="container d-flex justify-content-center mt-4">
                    <button type="submit" id="validarBtn" class=" btn-new btn ">Guardar</button>
                </div>
            </div>
        </form>
    </div>
</div>

<?php
require_once('resources/footer.php')
?>

<script src="../js/fetch.js"></script>
<script src="../js/edit-params.js"></script>
</body>

</html>