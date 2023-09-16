<?php
require_once('resources/initiator.php');
if ($_SESSION['type_user'] != 235) {
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
            <h1>COMENTARIOS</h1>
            </div>
        <div class="content d-flex pt-4 gap-3">

    
        </div>
        <div class="container pt-4">

            <table id="tablar" class="table display responsive wrap table-hover">
                <thead class="text-center">

                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Producto ID</th>
                        <th scope="col">Usuario ID</th>
                        <th scope="col">Comentario</th>
                        <th scope="col">Puntuación</th>
                        <th scope="col">Estado</th>
                        <th class="text-center" scope="col">Acciones</th>
                    </tr></thead>
                <tbody id="body-user-mater-crud">

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

<script src="../js/fetch.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.5.0/js/dataTables.responsive.min.js"></script>
<script src="../js/fetchs/crud-ratings.js"></script>

</body>

</html>