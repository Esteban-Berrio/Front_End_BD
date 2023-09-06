<?php
require_once('resources/initiator.php')
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

        <form method="post" class=" br container p-4 mb-5">

            <div class="row">
                <div class="col-md-6">
                    <div class="container d-flex flex-column align-items-center  ">

                        <div class=" image-container">
                            <div class=" space-slider2marc">

                                <div class="single-item  slider3mar" data-slick='{"slidesToShow": 1, "slidesToScroll": 1}'>

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
                        <button class="btn btn-success botones-crud" id="agregar-img-produc">Agregar Imagen</button>


                        <br>

                        <div class="col-8">
                            <label for="EditReference" class="form-label"> Referencia</label>
                            <input type="text" class="form-control" id="EditReference" name="reference" required>
                        </div>

                        <div class="col-8">
                            <label for="EditName" class="form-label">Nombre del Producto</label>
                            <input type="text" class="form-control" id="EditName" name="name" required>
                        </div>

                        <div class="col-8">
                            <label for="EditDescription" class="form-label "> Descripción</label>
                            <input type="text" class="form-control descripcion-product" id="EditDescription" name="description" required>
                        </div>

                    </div>
                </div>





                <div class="col-md-6">
                    <div class="container d-flex flex-column align-items-center">

                        <!-- formulario parte derecha -->


                        <div class="col-8">
                            <label for="EditStock" class="form-label"> Existencias</label>
                            <input type="text" class="form-control" id="EditStock" name="stock" oninput="validarNumeroPositivo(this)" required>
                        </div>

                        <div class="col-8">
                            <label for="EditPrice" class="form-label"> Precio</label>
                            <input type="text" class="form-control" id="EditPrice" name="price" oninput="validarNumeroPositivo(this)" required>
                        </div>

                        <div class="col-8">
                            <label for="EditDiscount" class="form-label"> Descuento</label>
                            <input type="text" class="form-control" id="EditDiscount" name="discount" oninput="validarNumeroPositivo(this)">
                        </div>

                        <div class="col-8">
                            <label for="EditTax" class="form-label"> Impuesto</label>
                            <input type="text" class="form-control" id="EditTax" name="tax" oninput="validarNumeroPositivo(this)">
                        </div>

                        <div class="col-8">
                            <label for="EditSize" class="form-label">Talla</label>

                            <select class="form-select " id="EditSize" name="param_size" required>
                                <option selected></option>
                                <option value="1">Talla 1</option>
                                <option value="2">Talla 2</option>
                                <option value="2">Talla 3</option>
                            </select>

                        </div>


                        <div class="col-8">
                            <label for="EditGender" class="form-label">Genero</label>
                            <select class="form-select " id="EditGender" name="param_gender" required>
                                <option selected></option>
                                <option value="1">Masculino</option>
                                <option value="2">Femenino</option>

                            </select>
                        </div>

                        <div class="col-8">
                            <label for="EditSubcategory" class="form-label">Subcategoria</label>
                            <select class="form-select" id="EditSubcategory" name="param_subcategory" required>
                                <option selected></option>
                                <option value="1">---</option>
                                <option value="2">---</option>

                            </select>
                        </div>

                        <div class="col-8">
                            <label for="EditMark" class="form-label">Marca</label>
                            <select class="form-select" id="EditMark" name="param_mark" required>
                                <option selected></option>
                                <option value="1">---</option>
                                <option value="2">---</option>

                            </select>
                        </div>

                        <div class="col-8">
                            <label for="EditColor" class="form-label">Color</label>
                            <select class="form-select" id="EditColor" name="param_color" required>
                                <option selected></option>
                                <option value="1">---</option>
                                <option value="2">---</option>

                            </select>
                        </div>

                        <div class="col-8">
                            <label for="EditState" class="form-label">Estado</label>
                            <select class="form-select" id="EditState" name="param_state" required>
                                <option selected></option>
                                <option value="1">Activo</option>
                                <option value="2">Inactivo</option>

                            </select>
                        </div>




                        <div class="container d-flex flex-column align-items-center mt-4" style="padding: 10px;">
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
<script src="../js/index.js"></script>
</body>

</html>