<?php
if ($_SESSION['param_rol'] != 3403 && $_SESSION['param_rol'] != 3405) {
    header("Location: home.php");
}
?>


<link rel="stylesheet" type="text/css" href="../slick/slick.css" />
<link rel="stylesheet" type="text/css" href="../slick/slick-theme.css" />
<link rel="stylesheet" href="../css/grafica.css">


<?php
require_once('resources/template-crud.php')
?>

<div class="col-sm-12 col-md-10 col-lg-10 col-xl-10 pt-2 ">
    
<button id="botonCambiar" class="btn btn-grafi mb-3" >Cambiar Gráficas</button>

<div class="d-flex flex-column justify-content-center align-items-center vh-90 mb-5">

    <canvas id="graficabar" class="mx-3 "></canvas>
    <canvas id="graficaline" class="mx-3 " style="display: none;"></canvas>


</div>
    


</div>
</div>
</div>
<?php
require_once('resources/footer.php')
?>

<script src="../js/sliders.js"></script>
<script src="../js/fetch.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="../js/graficas.js"></script>
</body>

</html>