<?php
require_once('resources/initiator.php');
if ($_SESSION['param_rol'] != 3403 ) {
    header("Location: home.php");
}
?>


<link rel="stylesheet" type="text/css" href="../slick/slick.css" />
<link rel="stylesheet" type="text/css" href="../slick/slick-theme.css" />
<link rel="stylesheet" href="../css/register-master.css">


<?php
require_once('resources/template-crud.php')
?>



      <div class="col-sm-12 col-md-10 col-lg-10 col-xl-10 pt-2">
  <div class="card-header p-3">
    <div class="container">
      <div class="d-flex flex-wrap justify-content-center">
        <!-- Texto de editar perfil -->
        <h1>REGISTRO NUEVO USUARIO</h1>
    </div>


</div>

<!-- comienza contenedor y formulario de editar perfil -->
<div class="container-crud">
<form id="miformulario" method="POST" class="sc p-4 mb-5">   
     <div class="row">

        <div class="col-md-6">
            <div class="container d-flex flex-column align-items-center">
                <div class="Last_name col-8">
                    <label for="inputName" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="inputName">
                    <div id="nameError" class="error"></div>
                </div>

                <div class="DateofBirth col-8">
                    <label for="dateOfBirth" class="form-label">Fecha de Nacimiento</label>
                    <input type="date" class="form-control" id="dateOfBirth" name="dateOfBirth">
                    <div id="birthError" class="error"></div>
                </div>

                <div class="department col-8">
                    <label for="inputCity" class="form-label">Ciudad</label>
                    <select class="form-select  " aria-label="Default select example" id="inputCity">
                        <option selected></option>
                        <option value="1">Cali</option>
                        <option value="2">Tumaco</option>
                        <option value="3">Palmira</option>

                    </select>
                    <div id="cityError" class="error"></div>
                </div>

                <div class="address col-8">
                    <label for="inputEmail" class="form-label">Correo Electronico</label>
                    <input type="email" class="form-control" id="inputEmail">
                    <div id="emailError" class="error"></div>
                </div>

                <div class="municipality col-8">
                    <label for="inputState" class="form-label">Estado</label>
                    <select class="form-select " aria-label="Default select example" id="inputState">
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="2">Three</option>


                    </select>
                    <div id="stateError" class="error"></div>
                </div>


            </div>
        </div>


        <div class="col-md-6">
            <!-- formulario parte derecha  -->
            <div class="container d-flex flex-column align-items-center">

                <!-- <div class="container d-flex flex-column align-items-center"> -->
                <div class="Last_name col-8">
                    <label for="inputLastName" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="inputLastName">
                    <div id="lastNameError" class="error"></div>
                </div>

                <div class="Email col-8">
                    <label for="inputAddress" class="form-label">Direccion</label>
                    <input type="text" class="form-control" id="inputAddress" name="inputAddress">
                    <div class="error" id="addressError"></div>
                </div>
                <div class="municipality col-8">
                    <label for="inputTypeUser" class="form-label">Tipo de usuario</label>
                    <select class="form-select " aria-label="Default select example" id="inputTypeUser">
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="2">Three</option>

                    </select>
                    <div id="TypeUserError" class="error"></div>
                </div>


                <div id="msg"></div>

                <!-- Mensajes de Verificación -->
                <div id="error" class="alert alert-danger ocultar" role="alert">
                    EL correo electronico no coinciden!
                </div>


                <!--  colocar el icono en el input para ver contraseña  -->


                <div class="password col-8">
                    <label for="inputPassword" class="form-label">Contraseña</label>
                    <div class="input-wrapper">
                        <input type="password" class="form-control" id="inputPassword">
                        <i class="fa-solid fa-eye" id="eye"></i>
                        <div id="passwordError" class="error"></div>
                    </div>
                </div>


                <div class="veriPassword col-8">
                    <label for="inputPassword2" class="form-label">Verificar Contraseña</label>
                    <div class="input-wrapper">
                        <input type="password" class="form-control" id="inputPassword2">
                        <i class="fa-solid fa-eye" id="eye2"></i>
                       
                    </div>
                </div>
                <div id="passwordError2" class="error"></div>
                <div class="municipality col-8">
                    <label for="inputRole" class="form-label">Rol</label>
                    <select class="form-select " aria-label="Default select example" id="inputRole">
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="2">Three</option>

                    </select>
                    <div id="rolError" class="error"></div>
                </div>

               

                <!-- Mensajes de Verificación -->
 

                <!-- </div> -->



               
            </div>
            
        </div>
        <div class="d-flex justify-content-center align-items-center  ">

<button type="submit" id="enviar"  class="btn btn  border rounded-pill me-4 mt-3">Registrar</button>
<button type="submit"id="cancelar"  class="btn btn  border rounded-pill mt-3">Cancelar</button>
</div>
</div>
</div>

</div>
    </div>
    </div>

    <!-- <div class="d-flex"> -->
 
<!-- </div> -->


</div>


</form>

<!-- <div class="Buttons">

                    <div class="d-grid d-flex " >
                       
                        <button type="submit" class="btn mt-5" id="enviar"> Registrar </button>
                    

                        <button type="button" class="btn mt-5" id="cancelar"> Cancelar </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</form> -->

<!-- <br class="mt-5">
<br class="mt-5">
<br class="mt-5">
<br class="mt-5">
<br class="mt-5">

<br class="mt-5"> -->

<script src="../js/register-master.js"></script>

<!-- <script src="../js/sliders.js"></script>
<script src="../js/fetch.js"></script> -->
<!-- <script src="../js/edit-product.js"></script> -->




<?php
require_once('resources/footer.php')
?>


