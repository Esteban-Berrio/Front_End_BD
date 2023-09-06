<?php
require_once('resources/initiator.php')
?>


<link rel="stylesheet" type="text/css" href="../slick/slick.css" />
<link rel="stylesheet" type="text/css" href="../slick/slick-theme.css" />
<link rel="stylesheet" href="../css/index.css" />

<?php
require_once('resources/header-1.php')
?>


<div class="collection">
    <div class="autoplayes-up  slider2mar" data-slick='{"slidesToShow": 1, "slidesToScroll": 1}'>
        <img class="img-slider-up" src="../img/ban5.png" alt="">
        <img class="img-slider-up" src="../img/ban6.png" alt="">
        <img class="img-slider-up" src="../img/ban4.png" alt="">
        <img class="img-slider-up" src="../img/ban3.jpg" alt="">
        <img class="img-slider-up" src="../img/ban2.png" alt="">
        <img class="img-slider-up" src="../img/ban1.png" alt="">
    </div>
</div>

<div class="conten-index">



    <div class="category-title">
        <h6>CATEGORIAS</h6>
    </div>


    <div class="space-slider2marc">

        <div class="autoplay  slider3mar none-box-s" data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>

            <a class="card-slider-mar" href="#">
                <img class="img-slider-cat" src="../img/mujeres/abrigos.png" alt="">
            </a>
            <a class="card-slider-mar" href="#">
                <img class="img-slider-cat" src="../img/mujeres/blusas.png" alt="">
            </a>
            <a class="card-slider-mar" href="#">
                <img class="img-slider-cat" src="../img/mujeres/chaquetas.png" alt="">
            </a>
            <a class="card-slider-mar" href="#">
                <img class="img-slider-cat" src="../img/mujeres/faldas.png" alt="">
            </a>
            <a class="card-slider-mar" href="#">
                <img class="img-slider-cat" src="../img/mujeres/jeans.png" alt="">
            </a>
            <a class="card-slider-mar" href="#">
                <img class="img-slider-cat" src="../img/mujeres/traje.png" alt="">
            </a>
            <a class="card-slider-mar" href="#">
                <img class="img-slider-cat" src="../img/hombres/camisas.png" alt="">
            </a>
            <a class="card-slider-mar" href="#">
                <img class="img-slider-cat" src="../img/hombres/chaquetas.png" alt="">
            </a>
            <a class="card-slider-mar" href="#">
                <img class="img-slider-cat" src="../img/hombres/conjuntos.png" alt="">
            </a>
            <a class="card-slider-mar" href="#">
                <img class="img-slider-cat" src="../img/hombres/pantalones.png" alt="">
            </a>
            <a class="card-slider-mar" href="#">
                <img class="img-slider-cat" src="../img/hombres/sueteres.png" alt="">
            </a>
            <a class="card-slider-mar" href="#">
                <img class="img-slider-cat" src="../img/hombres/trajes.png" alt="">
            </a>
        </div>
    </div>




    <div class="bestSeller">
        <div class="container justify-content-center align-content-between">
            <div class="row">
                <!-- Lado izquierdo -->
                <div class="col-md-4 cont-img-best">
                    <img class="imgbestIndex" src="../img/bestsale1.png" alt="Imagen 1" class="img-fluid img-padding ">
                </div>
                <!-- En medio -->
                <div class="col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <p id="bestSellerP1">LO MÁS</p>
                    <p id="bestSellerP2">VENDIDO</p>
                    <a class="btn btn-primary">VER</a>
                </div>
                <!-- Lado derecho -->
                <div class="col-md-4 cont-img-best">
                    <img class="imgbestIndex" src="../img/bestsale2.png" alt="Imagen 2" class="img-fluid img-padding">
                </div>
            </div>
        </div>
    </div>
    <div class="category-title">
        <h6>MARCAS</h6>
    </div>
    <div class="space-slider2marc">

        <div class="autoplay  slider3mar" data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>

            <a class="card-slider-mar" href="#">
                <img class="img-slider-cat" src="../img/marcas/adidas.png" alt="">
            </a>
            <a class="card-slider-mar" href="#">
                <img class="img-slider-cat" src="../img/marcas/fila.png" alt="">
            </a>
            <a class="card-slider-mar" href="#">
                <img class="img-slider-cat" src="../img/marcas/chevignon.png" alt="">
            </a>
            <a class="card-slider-mar" href="#">
                <img class="img-slider-cat" src="../img/marcas/new-balance.png" alt="">
            </a>
            <a class="card-slider-mar" href="">
                <img class="img-slider-cat" src="../img/marcas/lacoste.png" alt="">
            </a>
            <a class="card-slider-mar" href="">
                <img class="img-slider-cat" src="../img/marcas/puma.png" alt="">
            </a>
            <a class="card-slider-mar" href="">
                <img class="img-slider-cat" src="../img/marcas/under.png" alt="">
            </a>
            <a class="card-slider-mar" href="">
                <img class="img-slider-cat" src="../img/marcas/vans.png" alt="">
            </a>
        </div>
    </div>
</div>
<?php
require_once('resources/footer.php')
?>

<script src="../js/sliders.js"></script>
<script src="../js/fetch.js"></script>
<script src="../js/index.js"></script>
</body>

</html>