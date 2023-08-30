<?php
require_once('resources/initiator.php')
?>

<link rel="stylesheet" href="../css/style-shopping-cart.css">

<?php
require_once('resources/header-1.php')
?>



<section class="my-5">
    <div class="container">
        <div class="row">
            <!-- Cart -->
            <div class="col-lg-9">
                <div class="card-title card mb-1 p-1">
                    <div class="container-titles d-flex">
                        <h4 class="card-title m-2">Tu carrito de compras</h4>
                        <h6 class="card-title-2">(<span></span>)Productos</h6>
                    </div>
                </div>
                <div class="card border border-dark-subtle shadow-0">
                    <div class="m-4">
                        <!-- Product row -->
                        <div class="row gy-3 mb-4">
                            <div class="col-lg-5">
                                <div class="me-lg-5">
                                    <!-- Product image and details -->
                                    <div class="d-flex">
                                        <img src="../img/Product.jpg" class="img-product border rounded me-3" />
                                        <div class="">
                                            <a href="#" class="product-link">Zapatillas Nike Air force</a>
                                            <p class="text-muted">Blanco, Zapatillas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Quantity and price column -->
                            <div class="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                                <div class="">
                                    <input type="number" max="50" min="1" class="input-calculo form-control me-4"></input>
                                </div>
                                <div class="">
                                    <text class="h6">$1156.00</text> <br />
                                    <small class="text-muted text-nowrap"> $460.00 / por artículo </small>
                                </div>
                            </div>
                            <!-- Delete button column -->
                            <div class="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                                <div class="float-md-end">
                                    <a href="#" class="btn btn-danger border icon-hover-danger"><i class="fa-solid fa-trash"></i> Eliminar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Cart -->
            <!-- Summary -->
            <div class="col-lg-3">
                <div class="card shadow-0 border border-dark-subtle">
                    <div class="card-body">
                        <!-- Summary details -->
                        <div class="d-flex justify-content-between">
                            <p class="mb-2">Subtotal total:</p>
                            <p class="mb-2">$329.00</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="mb-2">Descuento:</p>
                            <p class="mb-2">-$60.00</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="mb-2">Impuesto:</p>
                            <p class="mb-2">$14.00</p>
                        </div>
                        <hr />
                        <div class="d-flex justify-content-between">
                            <p class="mb-2">Precio total:</p>
                            <p class="mb-2 fw-bold">$283.00</p>
                        </div>
                        <!-- Buttons for purchase -->
                        <div class="mt-3">
                            <a id="showAlertBtn-payment" href="#" class="btn btn-1 w-100 shadow-0 mb-2"><i class="fa-solid fa-bag-shopping"></i> Realizar compra</a>
                            <a href="#" class="btn btn-2 btn-light w-100 mt-2 text-dark">Volver a la tienda</a>
                        </div>
                        <!-- Payment methods -->
                        <div class="mt-5 d-grid gap-4">
                            <h5 class="mb-2 d-grid justify-content-center">MÉTODOS DE PAGO</h5>
                            <div class="mt-3">
                                <img src="../img/pagos.png" class="img-fluid" alt="...">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Summary -->
        </div>
    </div>
</section>

<?php
require_once('resources/footer.php')
?>