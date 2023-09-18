<?php
require_once('resources/initiator.php')
?>
<link rel="stylesheet" href="../css/index.css" />
<link rel="stylesheet" href="../css/styleCategorias.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<?php
require_once('resources/header-1.php')
?>

<div class="collection">
    <div class="autoplayes-up slider2mar" data-slick='{"slidesToShow": 1, "slidesToScroll": 1}'>
        <img class="img-slider-up" src="../img/ban5.png" alt="">
        <img class="img-slider-up" src="../img/ban6.png" alt="">
        <img class="img-slider-up" src="../img/ban4.png" alt="">
        <img class="img-slider-up" src="../img/ban3.jpg" alt="">
        <img class="img-slider-up" src="../img/ban2.png" alt="">
        <img class="img-slider-up" src="../img/ban1.png" alt="">
    </div>
</div>

<div class="container-fluid">
    <div class="row">
        <!-- Menú Acordeón (Lado Izquierdo) -->
        <div class="col-sm-12 col-md-4 col-lg-3 col-xl-3">
            <div class="accordion mt-4" id="accordionPanelsStayOpenExample">
                <h2 class="text-center texto mt-5 ">Mujeres</h2>

                <!-- Estructura Acordeon -->
                <!-- Acordeon Header Card -->
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <span class="fw-bold text-center titulo">CATEGORIAS</span>
                        </button>
                    </h2>
                    <!-- Fin Header Card -->
                    <!-- Body Card -->
                    <div id="panelsStayOpen-collapseOne" class="container accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            <!-- Check Box Internos -->
                            <div class="container d-flex justify-content-center align-items-center">
                                <div class="text-center">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck1">
                                        <label class="form-check-label fw-bold" for="flexCheck1">
                                            VESTIDOS
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck2">
                                        <label class="form-check-label fw-bold" for="flexCheck2">
                                            TRAJES
                                        </label>
                                    </div>
                                    <!-- Agrega más div.form-check para más casillas de verificación -->
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck3">
                                        <label class="form-check-label fw-bold" for="flexCheck3">
                                            JEANS
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck4">
                                        <label class="form-check-label fw-bold" for="flexCheck4">
                                            FALDAS
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck12">
                                        <label class="form-check-label fw-bold" for="flexCheck12">
                                            BLUSAS
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck13">
                                        <label class="form-check-label fw-bold" for="flexCheck13">
                                            CHAQUETAS
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <!-- End Check Box -->
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <span class="fw-bold titulo">TALLAS</span>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            <!-- Check Box Internos -->
                            <div class="container d-flex justify-content-center align-items-center">
                                <div class="text-center">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck5">
                                        <label class="form-check-label fw-bold" for="flexCheck5">
                                            S
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck6">
                                        <label class="form-check-label fw-bold" for="flexCheck6">
                                            M
                                        </label>
                                    </div>
                                    <!-- Agrega más div.form-check para más casillas de verificación -->
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck7">
                                        <label class="form-check-label fw-bold" for="flexCheck7">
                                            L
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck8">
                                        <label class="form-check-label fw-bold" for="flexCheck8">
                                            XL
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck12">
                                        <label class="form-check-label fw-bold" for="flexCheck12">
                                            XXL
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck13">
                                        <label class="form-check-label fw-bold" for="flexCheck13">
                                            XXXL
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <span class="fw-bold titulo">COLORES</span>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            <!-- Check Box Internos -->
                            <div class="container d-flex justify-content-center align-items-center">
                                <div class="text-center">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck9">
                                        <label class="form-check-label fw-bold" for="flexCheck9">
                                            Rojo
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck10">
                                        <label class="form-check-label fw-bold" for="flexCheck10">
                                            Azul
                                        </label>
                                    </div>
                                    <!-- Agrega más div.form-check para más casillas de verificación -->
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck11">
                                        <label class="form-check-label fw-bold" for="flexCheck11">
                                            Verde
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck12">
                                        <label class="form-check-label fw-bold" for="flexCheck12">
                                            Amarillo
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheck13">
                                        <label class="form-check-label fw-bold" for="flexCheck13">
                                            Rosa
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="mt-2 btn btn-danger fw-bold btn-lg form-control" type="submit"  id="filtradosheck" href="#">BUSCAR</a>
            </div>
        </div>

        <!-- Contenedor de Productos (Lado Derecho) -->
        <div class="col-sm-12 col-md-9 col-lg-9 col-xl-9 mt-4 contenedorderecha ">
            <br>
            <h2 class="text-center texto-titulo mt-4">PRODUCTOS</h2>
            <div class="row ">
                <ul class="d-flex lista-product" id="product-list">
                    




                
                </ul>
            </div>
        </div>
    </div>
</div>

<?php
require_once('resources/footer.php')
?>
<script src="../js/sliders.js"></script>
<script src="../js/fetch.js"></script>
<script src="../js/busqueda.js"></script>
<script src="../js/categorias.js"></script>
</body>

</html>
