<?php
require_once('resources/initiator.php')
?>
<link rel="stylesheet" href="../css/register.css" />
<?php
require_once('resources/header-basico.php')
?>


<br>
<div class="d-flex flex-wrap justify-content-center mb-3">
    <h3>REGISTRO NUEVO USUARIO</h3>
</div>

<!-- comienza contenedor y formulario de registro de nuevo usuario -->
<div class="con1 container border border-warning p-4">
    <div class="row justify-content-center">
        <div class="col-md-6">

            <div class="container d-flex flex-column align-items-center">

                <div class="Name col-8 ">
                    <label for="inputName" class="form-label">Nombre</label>
                    <input type="text" class="form-control allBorder" id="inputName">
                </div>
                <div class="Last_name col-8">
                    <label for="inputLastName" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="inputLastName">
                </div>

                <div class="DateofBirth col-8">
                    <label for="dateOfBirth" class="form-label">Fecha de Nacimiento</label>
                    <input type="date" class="form-control" id="dateOfBirth" name="dateOfBirth">
                </div>

                <div class="country col-8">
                    <label for="inputcountry" class="form-label">Pais</label>
                    <select class="form-select " aria-label="Default select example" id="inputcountry">
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="2">Three</option>

                    </select>
                </div>
                <div class="department col-8">
                    <label for="inputDepartment" class="form-label">Departamento</label>
                    <select class="form-select  " aria-label="Default select example" id="inputDepartment">
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="2">Three</option>

                    </select>
                </div>
                <div class="municipality col-8">
                    <label for="inputMunicipality" class="form-label">Municipio</label>
                    <select class="form-select " aria-label="Default select example" id="inputMunicipality">
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="2">Three</option>

                    </select>
                </div>

                <div class="address col-8">
                    <label for="inputAddress" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="inputAddress">
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <!-- formulario parte derecha  -->
            <div class="container d-flex flex-column align-items-center">

                <div class="sex col-8">
                    <label for="inputSex" class="form-label">Sexo</label>
                    <select class="form-select " aria-label="Default select example" id="inputMunicipality">
                        <option selected></option>
                        <option value="1">Masculino</option>
                        <option value="2">Femenino</option>
                        <option value="2">Otros</option>

                    </select>
                </div>
                <div class="Email col-8">
                    <label for="inputEmail" class="form-label">Correo</label>
                    <input type="email" class="form-control" id="inputEmail" name="inputEmail">
                </div>
                <div class="VerEmail col-8">
                    <label for="inputEmailVerification" class="form-label">Verificar Correo:</label>
                    <input type="email" class="form-control" id="inputEmailVerification" name="inputEmailVerification">
                </div>
                <div class="password col-8">
                    <label for="inputPassword" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="inputPassword">
                </div>
                <div class="veriPassword col-8">
                    <label for="inputPassword2" class="form-label">Verificar Contraseña</label>
                    <input type="password" class="form-control" id="inputPassword2">
                </div>


                <div class="mb-3 form-check" style="padding: 20px;">
                    <input type="checkbox" class="form-check-input" id="terminos" name="terminos">
                    <label class="form-check-label" for="terminos">
                        Aceptar <a id="abrirVentana" href="terms.php" target="_blank">términos y condiciones</a>
                    </label>
                </div>
                <div class="container d-flex flex-column align-items-center" style="padding: 10px;">
                    <!-- boton crear cuenta -->
                    <button type="button" class="btn"> Crear Cuenta </button>
                </div>

            </div>
        </div>
    </div>
</div>

<?php
require_once('resources/footer.php')
?>