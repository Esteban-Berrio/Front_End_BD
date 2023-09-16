<?php
require_once('resources/initiator.php');
?>

<link rel="stylesheet" href="../css/views-shopping.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer">
<link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap5.min.css">
<link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.5.0/css/responsive.dataTables.min.css">
<?php
require_once('resources/header-1.php')
?>

<div class="container my-5 mb-5 border border-2 border-warning rounded-4">
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="card-header justify-content-center">
                <div class="card-title text-center pt-4 mb-4">
                    <h1 class=""><strong>MIS COMPRAS</strong></h1>
                </div>
                <div class="container-fluid pt-4 mb-5">
                    <table id="tablao" class="table display responsive wrap table-hover">
                        <thead class="text-center">
                        <input type="hidden" id="miid" name="miid" value=" <?php  echo ($_SESSION['id']) ?> ">

                            <tr>
                                <th scope="col">Fecha de compra</th>
                                <th scope="col">Código de referencia</th>
                                <th scope="col">Método de pago</th>
                                <th scope="col">Total</th>
                                <th scope="col">Ver detalle</th>
                            </tr>
                        </thead>
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
<script src="../js/fetchs/views-shopping.js"></script>

</body>

</html>