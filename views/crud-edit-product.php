<?php
require_once('resources/initiator.php');
if ($_SESSION['type_user'] != 235 || $_SESSION['type_user'] != 99999999) {
    header("Location: home.php");
}
?>


<link rel="stylesheet" type="text/css" href="../slick/slick.css" />
<link rel="stylesheet" type="text/css" href="../slick/slick-theme.css" />
<link rel="stylesheet" href="../css/edit-product.css">


<?php
require_once('resources/template-crud.php')
?>

<div class="col-sm-12 col-md-10 col-lg-10 col-xl-10 pt-2">
    <div class="card-header p-3">
        <div class="container">
            <div class="d-flex flex-wrap justify-content-center">
                <!-- Texto de editar perfil -->
                <h1>EDITAR PRODUCTO</h1>
            </div>
        </div>
    </div>
    <div class="container-crud">

        <form id="productForm" method="POST" class="br container p-4 mb-5">

            <div class="row">
                <div class="col-md-6">
                    <div class="container d-flex flex-column align-items-center  ">

                        <div class=" image-container">
                            <div class=" space-slider2marc">

                                <div class="single-item  slider3mar"
                                    data-slick='{"slidesToShow": 1, "slidesToScroll": 1}'>

                                    <div class="card-slider-mar" href="#">
                                        <div class="d-flex justify-content-center">
                                            <img class="img-slider-cat" src="../img/carru3.jpg" alt="">
                                        </div>
                                        <div class="d-flex justify-content-center btn-elim-img">
                                            <a href="" class="btn botones-crud">Eliminar</a>
                                        </div>
                                    </div>

                                    <div class="card-slider-mar" href="#">
                                        <div class="d-flex justify-content-center">
                                            <img class="img-slider-cat" src="../img/carru3.jpg" alt="">
                                        </div>
                                        <div class="d-flex justify-content-center btn-elim-img">
                                            <a href="" class="btn botones-crud">Eliminar</a>
                                        </div>
                                    </div>
                                    <div class="card-slider-mar" href="#">
                                        <div class="d-flex justify-content-center">
                                            <img class="img-slider-cat" src="../img/carru3.jpg" alt="">
                                        </div>
                                        <div class="d-flex justify-content-center btn-elim-img">
                                            <a href="" class="btn botones-crud">Eliminar</a>
                                        </div>
                                    </div>
                                    <div class="card-slider-mar" href="#">
                                        <div class="d-flex justify-content-center">
                                            <img class="img-slider-cat" src="../img/carru3.jpg" alt="">
                                        </div>
                                        <div class="d-flex justify-content-center btn-elim-img">
                                            <a href="" class="btn botones-crud">Eliminar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <br>
                        <!-- Botón de agregar imágenes abajo -->

                        <input type="file" id="foto" accept="image/*">
                        <!-- <button class="btn  botones-crud" id="agregar-img-produc">Agregar Imagen</button> -->
                        <label class="btn botones-crud mt-3" type="button" id="agregar-img-produc" for="foto">Nueva Imagen</label>


                        <br>

                        <div class="col-8">
                            <label for="Reference" class="form-label"> Referencia</label>
                            <input type="text" class="form-control" id="Reference" name="reference">
                            <div class="error-message" id="reference-error"></div>

                        </div>

                        <div class="col-8">
                            <label for="Provider" class="form-label">Proveedores</label>
                            <select class="form-select" id="Provider" name="Provider">
                               

                            </select>
                            <div class="error-message" id="state-error"></div>

                        </div>

                        <div class="col-8">
                            <label for="Name" class="form-label">Nombre del Producto</label>
                            <input type="text" class="form-control" id="Name" name="name">
                            <div class="error-message" id="name-error"></div>
                        </div>

                        <div class="col-8">
                            <label for="Description" class="form-label "> Descripción</label>
                            <input type="text" class="form-control descripcion-product" id="Description"
                                name="description">
                            <div class="error-message" id="description-error"></div>
                        </div>

                    </div>
                </div>





                <div class="col-md-6">
                    <div class="container d-flex flex-column align-items-center">

                        <!-- formulario parte derecha -->


                        <div class="col-8">
                            <label for="Stock" class="form-label"> Existencias</label>
                            <input type="text" class="form-control" id="Stock" name="stock">
                            <div class="error-message" id="stock-error"></div>
                        </div>

                        <div class="col-8">
                            <label for="Price" class="form-label"> Precio</label>
                            <input type="text" class="form-control" id="Price" name="price">
                            <div class="error-message" id="price-error"></div>
                        </div>



                        <div class="col-8">
                            <label for="Discount" class="form-label"> Descuento</label>
                            <input type="text" class="form-control" id="Discount" name="discount">
                            <div class="error-message" id="discount-error"></div>
                        </div>

                        <div class="col-8">
                            <label for="Tax" class="form-label"> Impuesto</label>
                            <input type="text" class="form-control" id="Tax" name="tax">
                            <div class="error-message" id="tax-error"></div>
                        </div>

                        <div class="col-8">
                            <label for="Size" class="form-label">Talla</label>
                            <select class="form-select " id="Size" name="param_size">
                                
                            </select>
                            <div class="error-message" id="size-error"></div>
                        </div>


                        <div class="col-8">
                            <label for="Gender" class="form-label">Genero</label>
                            <select class="form-select " id="Gender" name="param_gender">
                               

                            </select>
                            <div class="error-message" id="gender-error"></div>

                        </div>

                        <div class="col-8">
                            <label for="Subcategory" class="form-label">Subcategoria</label>
                            <select class="form-select" id="Subcategory" name="param_subcategory">
                              

                            </select>
                            <div class="error-message" id="subcategory-error"></div>

                        </div>

                        <div class="col-8">
                            <label for="Mark" class="form-label">Marca</label>
                            <select class="form-select" id="Mark" name="param_mark">
                                

                            </select>
                            <div class="error-message" id="mark-error"></div>

                        </div>

                        <div class="col-8">
                            <label for="Color" class="form-label">Color</label>
                            <select class="form-select" id="Color" name="param_color">
                           

                            </select>
                            <div class="error-message" id="color-error"></div>

                        </div>

                        <div class="col-8">
                            <label for="State" class="form-label">Estado</label>
                            <select class="form-select" id="State" name="param_state">
                               

                            </select>
                            <div class="error-message" id="state-error"></div>

                        </div>




                        <div class="container d-flex flex-column align-items-center mt-4">
                            <button type="submit" class="btn botones-crud">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
</div>
</div>
<?php
require_once('resources/footer.php')
?>

<script src="../js/sliders.js"></script>
<script src="../js/fetch.js"></script>
<script src="../js/fetchs/crud-edit-product.js"></script>
<script src="../js/edit-product.js"></script>
</body>

</html>