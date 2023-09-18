<?php
require_once('resources/initiator.php');
?>

<link rel="stylesheet" href="../css/new-params.css">


<?php
require_once('resources/template-crud.php')
?>
<div class="col-sm-12 col-md-10 col-lg-10 col-xl-10 pt-2">
    <div class="card-header p-3">
        <div class="container">
            <div class="d-flex flex-wrap justify-content-center">
                <!-- Texto de nuevo parámetro -->
                <h1>NUEVO PARÁMETRO</h1>
            </div>
        </div>
    </div>

    <div class="container-crud">
        <form id="paramForm" method="POST" class="br container p-4 mb-5">
            <div class="row">
                <div class="container d-flex flex-column align-items-center">
                    <div class="col-6 pt-5 mb-4">
                        <label for="ParamTypeID" class="form-label">Tipo Parámetro ID</label>
                        <select class="form-select" id="ParamTypeID" name="paramTypeID">
                            <!-- Agrega opciones según sea necesario -->
                        </select>
                        <div class="error" id="paramTypeID-error"></div>
                    </div>
                </div>
                <div class="container d-flex flex-column align-items-center">
                    <div class="col-6 pt-5 mb-4">
                        <label for="ParamTypeID" class="form-label">Parámetro Perteneciente</label>
                        <select class="form-select" id="ParamForeign" name="paramForeign">
                            <!-- Agrega opciones según sea necesario -->
                            <option value="">Ninguno</option>
                        </select>
                        <div class="error" id="paramForeign-error"></div>
                    </div>
                </div>
                <div class="container d-flex flex-column align-items-center">
                    <div class="col-6 pt-5 mb-4">
                        <label for="ParamName" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="ParamName" name="paramName">
                        <div class="error" id="paramName-error"></div>
                    </div>
                </div>
                <div class="container d-flex flex-column align-items-center">
                    <div class="col-6 pt-5 mb-4">
                        <label for="ParamState" class="form-label">Estado</label>
                        <select class="form-select" id="ParamState" name="paramState">
                            <!-- Agrega opciones según sea necesario -->
                        </select>
                        <div class="error" id="paramState-error"></div>
                    </div>
                </div>
                <div class="container d-flex justify-content-center pt-5 mt-4">
                    <button type="submit" class="btn-new btn ">Guardar</button>
                </div>
            </div>
    </div>
</div>
</form>
</div>
</div>
</div>
</div>

<?php
require_once('resources/footer.php')
?>

<script src="../js/fetch.js"></script>
<script src="../js/fetchs/new-param.js"></script>

</body>

</html>