<?php
require_once('resources/initiator.php');
if ($_SESSION['type_user'] != 235) {
    header("Location: home.php");
}
?>


<link rel="stylesheet" type="text/css" href="../slick/slick.css" />
<link rel="stylesheet" type="text/css" href="../slick/slick-theme.css" />
<link rel="stylesheet" href="../css/edit-user-master.css">

<?php
require_once('resources/template-crud.php')
?>

<div class="col-sm-12 col-md-10 col-lg-10 col-xl-10 pt-2">
  <div class="card-header p-3">
    <div class="container">
      <div class="d-flex flex-wrap justify-content-center">
        <!-- Texto de editar perfil -->
        <h1>EDITAR USUARIOS MASTER</h1>
      </div>
    </div>
  </div>
  <div class="container-crud">
    <form id="miFormulario" method="POST" class="sc p-4 mb-5">
      <div class="row">
        <div class="col-md-6">
          <div class="container d-flex flex-column align-items-center">
            <div class="Edit_name col-8">
              <label for="EditName" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="EditName" aria-describedby="emailHelp" autocomplete="given-name">
              <div id="nombreError" class="error"></div>
            </div>

            <div class="birth_date col-8">
              <label for="EditDateOfBirth" class="form-label">Fecha Nacimiento</label>
              <input type="date" class="form-control" id="EditDateOfBirth" name="dateOfBirth" autocomplete="bday">
              <div id="birthError" class="error"></div>
            </div>

            <div class="City col-8">
              <label for="EditCity" class="form-label">Ciudad</label>
              <select class="form-select" id="EditCity" aria-label="Default select example" autocomplete="address-level2">
                <option selected></option>
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
              <div id="cityError" class="error"></div>
            </div>

            <div class="email col-8">
              <label for="email" class="form-label">Correo electrónico</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" autocomplete="email">
              <div id="emailError" class="error"></div>
            </div>

            <div class="state col-8">
              <label for="EditState" class="form-label">Estado</label>
              <select class="form-select" aria-label="Default select example" id="EditState" autocomplete="address-level1">
                <option selected></option>
                <option value="1">Activo</option>
                <option value="2">Inactivo</option>
              </select>
              <div id="stateError" class="error"></div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="container d-flex flex-column align-items-center">
            <!-- formulario parte derecha -->
            <div class="EditLastname col-8">
              <label for="EditLastname" class="form-label">Apellido</label>
              <input type="text" class="form-control" id="EditLastname" autocomplete="family-name">
              <div id="lastnameError" class="error"></div>
            </div>

            <div class="address col-8">
              <label for="EditAddress" class="form-label">Dirección</label>
              <input type="text" class="form-control" id="EditAddress" aria-describedby="emailHelp" autocomplete="address-line1">
              <div id="addressError" class="error"></div>
            </div>

            <div class="TypeUser col-8">
              <label for="EditTypeUser" class="form-label">Tipo de usuario</label>
              <select class="form-select" id="EditTypeUser" autocomplete="user-type">
                <option selected></option>
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
              <div id="TypeUserError" class="error"></div>
            </div>

            <div class="Rol col-8">
              <label for="EditRol" class="form-label">Rol</label>
              <select class="form-select" id="EditRol" autocomplete="role">
                <option selected></option>
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
              <div id="RolError" class="error"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="justify-content-center d-flex mt-4" style="padding: 10px;">
        <button type="submit" id="validarBtn" class="btn btn  border rounded-pill me-4 mt-3">Registrar</button>
        <button type="button" id="cancelarBtn" class="btn btn  border rounded-pill  mt-3">Cancelar</button>
      </div>
    </form>
  </div>
</div>


<?php
require_once('resources/footer.php')
?>

<!-- <script src="../js/sliders.js"></script>
<script src="../js/fetch.js"></script> -->
<script src="../js/edit-user-master.js"></script>

</body>

</html>