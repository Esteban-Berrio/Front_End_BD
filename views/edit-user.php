<?php
require_once('resources/initiator.php');
if ($_SESSION['type_user'] != 7000000000) { 
    header("Location: home.php");
}
?>
<link rel="stylesheet" href="../css/edit-user.css">
<?php
require_once('resources/header-2.php')
?>

<br>

<div class="container">
  <div class="d-flex flex-wrap justify-content-center">
    <!-- Texto de editar perfil -->
    <h1>EDITAR PERFIL</h1>
  </div>


</div>

<!-- comienza contenedor y formulario de editar perfil -->
<form method="post" id="miFormulario"class=" sc container border border-warning  p-4 mb-5" enctype="multipart/form-data">
  <div class="row">

    <div class="col-md-6">
      <div class="container d-flex flex-column align-items-center">


        <!-- div logo pato -->
        <div class="Logo2">
          <div class="contenedorImagen">

            <img src="../img/person-circle.svg" alt="avatar" id="img" />

            <input type="file" name="foto" id="foto" accept="image/*" />

            <div class="container d-flex flex-column align-items-center ">
              <label class="mt-3" type="button" id="Editphoto" for="foto">Cambiar foto</label>

            </div>

          </div>
        </div>
        <br>

        <div class="Edit_name col-8">
          <label for="EditName" class="form-label">Editar nombre</label>
          <input type="text" class="form-control " id="EditName" aria-describedby="emailHelp" >
          <div id="nombreError" class="error"></div>
        </div>

        <div class="Edit_lastname col-8">
          <label for="EditLastName" class="form-label">Editar apellidos</label>
          <input type="text" class="form-control" id="EditLastName" aria-describedby="emailHelp" >
          <div id="lastnameError" class="error"></div>
        </div>

        <div class="sex col-8">
          <label for="EditSex" class="form-label">Genero</label>
          <select class="form-select " aria-label="Default select example" id="gender" >
            <option selected></option>
            <option value="1">Masculino</option>
            <option value="2">Femenino</option>
            <option value="2">Otros</option>

          </select>
          <div id="genderError" class="error"></div>
        </div>

        <!-- <div class="birth_date col-8">
          <label for="EditDateOfBirth" class="form-label">Fecha Nacimiento</label>
          <input type="date" class="form-control" id="EditDateOfBirth" name="dateOfBirth">
        </div> -->

      </div>
    </div>

    <div class="col-md-6">
      <div class="container d-flex flex-column align-items-center">

        <!-- formulario parte derecha -->

        <div class="birth_date col-8 mt-4">
          <label for="EditDateOfBirth" class="form-label">Fecha Nacimiento</label>
          <input type="date" class="form-control" id="EditDateOfBirth" name="dateOfBirth" >
                    <div id="birthdayerror" class="error"></div>

        </div>



        <div class="country col-8">
          <label for="EditCountry" class="form-label">Pais</label>
          <select class="form-select " id="EditCountry" aria-label="Default select example" >
            <option selected></option>
            <option value="1">Colombia</option>
            <!-- <option value="2">Two</option> -->
            
          </select>
          <div id="countryError" class="error"></div>
        </div>
        <div class="department col-8">
          <label for="EditDepartament" class="form-label">Departamento</label>
          <select class="form-select  " id="EditDepartament" aria-label="Default select example" >
            <option selected></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            
          </select>
                    <div id="departmentError" class="error"></div>

        </div>
        <div class="municipality col-8">
          <label for="EditMunicipality" class="form-label">Municipio</label>
          <select class="form-select " id="EditMunicipality" aria-label="Default select example" >
            <option selected></option>
            <option value="1">One</option>
            <option value="2">Two</option>

          </select>
          <div id="municipError" class="error"></div>
         
          </div>
          <div class="address col-8">
            <label for="EditAddress" class="form-label">Direccion</label>
            <input type="text" class="form-control" id="EditAddress" aria-describedby="emailHelp" >
            <div id="addressError" class="error"></div>
           
          </div>

          <div class="container d-flex flex-column align-items-center mt-4" style="padding: 10px;">
            <button type="submit" id="validarBtn" class="btn ">Guardar</button>
          </div>
        
      </div>
    </div>
  </div>

</form>
<script src="../js/edit-user.js"></script>
<?php
require_once('resources/footer.php')
?>