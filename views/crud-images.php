<?php
require_once('resources/initiator.php')
?>


<link rel="stylesheet" type="text/css" href="../slick/slick.css" />
<link rel="stylesheet" type="text/css" href="../slick/slick-theme.css" />
<link rel="stylesheet" href="../CSS/styles-extend-crud.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer">
<link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap5.min.css">
<link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.5.0/css/responsive.dataTables.min.css">

<?php
require_once('resources/template-crud.php')
?>

<div class="col-sm-12 col-md-10 col-lg-10 col-xl-10 pt-2 con-izq">
    <div class="card-header p-3">
        <div class="card-title">
            <!-- Title -->
            <h1>IMAGENES</h1>
        </div>
        <div class="content d-flex pt-4 gap-3">
            <!-- New Button and Select -->
            <a class="btn-new btn" href="#" >Nuevo</a>
            

            <select class="border-warning-subtle border-2 rounded-4 ms-auto" aria-label="Categorias">
                <option selected disabled>Tipo Imagen</option>
                <option value="1">One</option>
            </select>

        </div>
        <div class="container pt-4">
            <!-- Table for Invoice Details -->
            <table id="table-responsive" class="table display responsive wrap table-hover">
                <thead class="text-center">
                    <!-- Table Headers -->
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Link Imagen</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Placeholder Row (Template for Dynamic Data) -->
                    <tr>
                        <th scope="row"></th>
                        <td id="nombre-crud-product tds">
                            <img src="../img/ban5.png" alt="">
                        </td>
                        <td id="proveedor-crud-product"> 
                            <p> url klasjdlfjadfajksdfasdf</p>
                        </td>
                        <td class="tds">
                            <!-- Edit and Delete Buttons -->
                            <a class="btn-edit btn" href="#" ><i class="f fa-solid fa-pen-to-square"></i></a>
                            <button class="btn-delete btn"><i class="f fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td id="nombre-crud-product tds">
                            <img src="../img/hombres/chaquetas.png" alt="">
                        </td>
                        <td id="proveedor-crud-product"> 
                            <p> url klasjdlfjadfajksdfasdf</p>
                        </td>
                        <td class="tds">
                            <!-- Edit and Delete Buttons -->
                            <a class="btn-edit btn" href="#" ><i class="f fa-solid fa-pen-to-square"></i></a>
                            <button class="btn-delete btn"><i class="f fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
</div>
<?php
require_once('resources/footer.php')
?>

<script src="../js/sliders.js"></script>
<script src="../js/fetch.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.5.0/js/dataTables.responsive.min.js"></script>
<script src="../js/data-table.js"></script>

</body>

</html>