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
<!-- onsubmit="validarEmail(); return false" -->
<form action="" method="POST" id="formulario">
    <div class="con1 container border border-warning p-4">
        <div class="row justify-content-center">
            <div class="col-md-6">

                <div class="container d-flex flex-column align-items-center">

                    <div class="formulario__grupo col-8 " >
                    <label for="inputName" class="form-label">Primer Nombre</label>
                        <input type="text" class="form-control" id="inputName" name="inputName">
                        <div id="inputnombreError" class="error"></div>
                    </div>



                    <div class="formulario__grupo col-8">
                        <label for="inputLastName" class="form-label">Primer Apellido</label>
                        <input type="text" class="form-control" id="inputLastName" name="inputLastName">
                        <div id="inputLastnameError" class="error"></div>
                    </div>





                    <div class="formulario__grupo col-8" id="grupo_date">
                        <label for="dateOfBirth" class="form-label">Fecha de Nacimiento</label>
                        <input type="date" class="form-control" id="dateOfBirth" name="dateOfBirth">
                            <div id="inputbirthdayError" class="error"></div>
                    </div>



                    <div class="formulario__grupo col-8" id="grupo_country">
                        <label for="inputcountry" class="form-label">Pais</label>
                        <select class="form-select " aria-label="Default select example" id="inputcountry" name="">
                            <option selected></option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="2">Three</option>
                            
                        </select>
                        <div id="inputcountryError" class="error"></div>
                    </div>
                    <div class="formulario__grupo col-8" id="grupo_department">
                        <label for="inputDepartment" class="form-label">Departamento</label>
                        <select class="form-select  " aria-label="Default select example" id="inputDepartment">
                            <option selected></option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="2">Three</option>
                            
                        </select>
                         <div id="inputDepartmentError" class="error"></div>
                    </div>
                    <div class="formulario__grupo col-8" id="grupo_municipality">
                        <label for="inputMunicipality" class="form-label">Ciudades/Municipios</label>
                        <select class="form-select " aria-label="Default select example" id="inputMunicipality">
                            <option selected></option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="2">Three</option>
                            
                        </select>
                        <div id="inputMunicipalityError" class="error"></div>
                    </div>
                    
                    <div class="formulario__grupo col-8" id="grupo_address">
                        <label for="inputAddress" class="form-label">Dirección</label>
                        <input type="text" class="form-control" id="inputAddress" name="inputAddress">
                        <div id="inputAddressError" class="error"></div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <!-- formulario parte derecha  -->
                <div class="container d-flex flex-column align-items-center">

                    <div class="formulario__grupo col-8" id="grupo_sex">
                        <label for="inputSex" class="form-label">Genero</label>
                        <select class="form-select " aria-label="Default select example" id="inputSex">
                            <option selected></option>
                            <option value="1">Masculino</option>
                            <option value="2">Femenino</option>
                            <option value="2">Otros</option>

                        </select>
                        <div id="inputSexError" class="error"></div>
                    </div>
                    
                    <div class="formulario__grupo col-8" id="grupo_email">
                        <label for="inputEmail" class="form-label">Correo</label>
                        <input type="email" class="form-control" id="inputEmail" name="inputEmail">
                        <!-- <small>Error message</small> -->
                        <!-- <div id="inputEmailError" class="error"></div> -->
                    </div>
                    
                    <div class="formulario__grupo col-8" id="grupo_vemail">
                        <label for="inputEmailVerification" class="form-label">Verificar Correo:</label>
                        <input type="email" class="form-control" id="inputEmailVerification" name="inputEmailVerification">
                        <!-- <div id="inputpassError" class="error"></div> -->
                        <div id="inputEmailError" class="error"></div>
                        <!-- <p id="inputEmailError" style="display: none; color: red;"></p> -->
                    </div>


                    <!-- Mensajes de Verificación -->
                    <!-- <div id="msg" class="mt-2">
                        <div id="error" class="alert alert-danger ocultar" role="alert">
                          
                        </div>
                    </div> -->



                    <!--  colocar el icono en el input para ver contraseña  -->




                    <div class="formulario__grupo col-8" id="grupo_password">
                        <label for="inputPassword" class="form-label">Contraseña</label>
                        <div class="input-wrapper">

                            <input type="password" class="form-control" id="inputPassword" name="inputPassword">
                            <i class="fa-solid fa-eye"  id="eye"></i>
                        </div>
                        <div id="inputEmailError" class="error"></div>
                    </div>


                    <div class="formulario__grupo col-8" id="grupo_password2">
                        <label for="inputPassword2" class="form-label">Verificar Contraseña</label>
                        
                        <div class="input-wrapper">

                            <input type="password" class="form-control " id="inputPassword2" name="inputPassword2">
                            <i class="fa-solid fa-eye " id="eye2"></i>
                            <!-- <div id="inputPassError" class="error"></div> -->

                        </div>
                        <div id="inputPassError" class="error"></div>
                        
                    </div>
                   

                    <div id="msg"></div>

                    <!-- Mensajes de Verificación -->
                    <div id="error_password" class="alert alert-danger ocultar" role="alert">
                        La contraseña no coinciden!
                    </div>

                    <div class="mb-3 form-check mt-3">
    
                        <input type="checkbox" class="form-check-input chck " id="terminos" name="terminos_c">
                        <div class="form-check-label ">
                            Aceptar <a id="abrirVentana" href="terms.php" target="_blank">términos y condiciones</a>
                        </div>
                    </div>

                </div>


                <div class="container d-flex flex-column align-items-center ">
                    <!-- boton crear cuenta -->
                    <button type="submit" class="btn mt-3" id="enviar"> Crear Cuenta </button>

                </div>

            </div>
        </div>
    </div>
    </div>
</form>

<script src="../js/register.js"></script>






<?php
require_once('resources/footer.php')
?>