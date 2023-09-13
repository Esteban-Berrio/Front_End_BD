<?php
require_once('resources/initiator.php')
?>

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

            <h1>PRODUCTOS</h1>
        </div>
        <div class="content d-flex pt-4 gap-3">

            <a class="btn-new btn" href="new-product.php">Nuevo</a>
        </div>
        <div class="container pt-4">

            <table id="tablam" class="table display responsive wrap table-hover">
                <thead class="text-center">

                    <tr>
                    <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Proveedor</th>
                        <th scope="col">Referencia</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Descuento</th>
                        <th scope="col">Talla</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Color</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                
                <tbody id="table-body">

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
<script src="../js/fetchs/crud-product.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.5.0/js/dataTables.responsive.min.js"></script>

</body>

</html>