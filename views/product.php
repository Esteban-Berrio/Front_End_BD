<?php
require_once('resources/initiator.php')
?>

<link rel="stylesheet" type="text/css" href="../slick/slick.css" />
<link rel="stylesheet" type="text/css" href="../slick/slick-theme.css" />
<link rel="stylesheet" href="../css/style-product.css">


<?php
require_once('resources/header-1.php')
?>



<section class="my-5">
    <div class="container">
        <div class="row mb-4">
            <!-- Cart -->
            <div class="col-lg-5 ">

                <div class="card border border-dark-subtle shadow-0">
                    <div class="m-4 ">
                        <div class=" space-slider2marc">

                            <div class="single-item  slider3mar mt-5" data-slick='{"slidesToShow": 1, "slidesToScroll": 1}'>

                                <div class="card-slider-mar" href="#">
                                    <div class="d-flex justify-content-center">
                                        <img class="img-slider-cat" src="../img/carru3.jpg" alt="">
                                    </div>
                                </div>
                                <div class="card-slider-mar" href="#">
                                    <div class="d-flex justify-content-center">
                                        <img class="img-slider-cat" src="../img/carru3.jpg" alt="">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-lg-1"></div>

            <div class="col-lg-5">
                <div class="card shadow-0 border border-dark-subtle">
                    <div class="card-body m-4">
                        <p class="nombre-producto">Zapatillas Nike Air force</p>
                        <div class="d-flex justify-content-between">
                            <p class="detalles-producto">Precio</p>
                            <p class="precio-product">$ 150.000</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="detalles-producto">Calificacion</p>
                            <div class="calificaciones-product"></div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="d-flex">
                                <p class="detalles-producto ">Talla</p>
                                <button class="btn-tallas-product"></button>
                            </div>
                            <select class="form-select " id="EditSize" name="param_size">
                                <option selected></option>
                                <option value="1">Talla 1</option>
                                <option value="2">Talla 2</option>
                                <option value="2">Talla 3</option>
                            </select>

                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="detalles-producto">Color</p>
                            <select class="form-select " id="EditSize" name="param_size">
                                <option selected></option>
                                <option value="1">Talla 1</option>
                                <option value="2">Talla 2</option>
                                <option value="2">Talla 3</option>
                            </select>

                        </div>


                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-11 mb-4">
            <div class="card shadow-0 border border-dark-subtle">
                <div class="card-body">

                    <p class="titulos-targeta">Descripcion</pcla>
                    <p class="m-4">zapatillas nike air force one ,deportivos,tenis,dama,cosidos,comodos son cómodas, ligeras e imparables.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-11 mb-4">
            <div class="card shadow-0 border border-dark-subtle">
                <div class="card-body">
                    <p class="titulos-targeta">Comentarios</p>
                    <div class=" d-flex m-4 targeta-comentario">
                        <div class="conter-foto-user">
                            <img class="foto-user-coment" alt="foto usuario" src="../img/perfil.png">

                        </div>
                        <div class="card card-coment">
                            <p class="nombre-user-coment">Nombre usuario</p>
                            <p class="m-2">comentario del usuario aaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaadsffffffffffffffffffffffffffdddadf</p>
                        </div>
                    </div>
                    <div class="d-flex m-4 targeta-comentario">
                        <div class="conter-foto-user">
                            <img class="foto-user-coment" alt="foto usuario" src="../img/perfil.png">

                        </div>
                        <div class="card card-coment">
                            <p class="nombre-user-coment">Nombre usuario</p>
                            <p class="m-2">comentario del usuario aaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaadsffffffffffffffffffffffffffdddadf</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<?php
require_once('resources/footer.php')
?>
<script src="../js/sliders.js"></script>
<script src="../js/fetch.js"></script>

</body>

</html>