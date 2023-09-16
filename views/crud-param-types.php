<?php
require_once('resources/initiator.php');
if ($_SESSION['param_rol'] != 3403) {
    header("Location: home.php");
}
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
            <h1>TIPO DE PARAMETROS</h1>
        </div>
        <div class="content d-flex pt-4 gap-3">
            <!-- New Button and Select -->
            <a class="btn-new btn" href="#" >Nuevo</a>
        </div>
        <div class="container-fluid pt-4">
            <!-- Table for Invoice Details -->
            <table id="tabletpr" class="table display responsive wrap table-hover">
                <thead class="text-center">
                    <!-- Table Headers -->
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Rango max</th>
                        <th scope="col">Rango min</th>
                        
                    </tr>
                </thead>
                <tbody>
                    
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
<script src="../js/fetchs/crud-param-type.js"></script>

</body>

</html>