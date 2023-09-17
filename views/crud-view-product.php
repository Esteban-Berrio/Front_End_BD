<?php
require_once('resources/initiator.php');

if ($_SESSION['param_rol'] != 3403 && $_SESSION['param_rol'] != 3404) {
    header("Location: .php");
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

    <form  id="productForm"   method="POST"  enctype="multipart/form-data m-4 ">

            <div class="row p-4 m-4 mb-5">
                <div class="col-md-6">
                    <div class="container d-flex flex-column align-items-center  ">

                        <div class=" image-container">
                           

                               

                                    <div class="card-slider-mar  " >
                                        <div class="d-flex justify-content-center">
                                            <img id="fotoProduct" class=" cargando-img img-slider-cat" src="" alt="">
                                        </div>
                                        
                          

                                
                            </div>

                        </div>

                        <br>
                        <!-- Botón de agregar imágenes abajo -->

                        
                        

                        <br>

                        <div class="col-8">
                            <label for="Reference" class="form-label" maxlength="44"> Referencia</label>
                            <div class="error-message" id="reference-error" disabled ></div>
                            <input type="text" class="form-control" id="Reference" name="reference" value="0" >

                        </div>

                        <div class="col-8">
                            <label for="Provider" class="form-label">Proveedores</label>
                            <input class="form-select" id="Provider" name="Provider_id" disabled></input>
                            <div class="error-message" id="provider-error"></div>

                        </div>

                        <div class="col-8">
                            <label for="Name" class="form-label" maxlength="44">Nombre del Producto</label>
                            <input type="text" class="form-control" id="Name" name="name" disabled >
                            <div class="error-message" id="name-error"></div>
                        </div>

                        <div class="col-8">
                            <label for="Description" class="form-label " maxlength="44"> Descripción</label>
                            <input disabled type="text" class="form-control descripcion-product" id="Description" name="description">
                            <div class="error-message" id="description-error"></div>
                        </div>

                    </div>
                </div>





                <div class="col-md-6">
                    <div class="container d-flex flex-column align-items-center">

                        <!-- formulario parte derecha -->


                        <div class="col-8">
                            <label for="Stock" class="form-label"> Existencias </label>
                            <input type="text" class="form-control" id="Stock" disabled name="stock">
                            <div class="error-message" id="stock-error"></div>
                        </div>

                        <div class="col-8">
                            <label for="Price" class="form-label"> Precio</label>
                            <input type="text" class="form-control" id="Price" disabled name="price">
                            <div class="error-message" id="price-error"></div>
                        </div>



                        <div class="col-8">
                            <label for="Discount" class="form-label"> Descuento</label>
                            <input type="text" class="form-control" id="Discount" disabled name="discount">
                            <div class="error-message" id="discount-error"></div>
                        </div>

                        <div class="col-8">
                            <label for="Tax" class="form-label"> Impuesto</label>
                            <input type="text" class="form-control" id="Tax" disabled name="tax">
                            <div class="error-message" id="tax-error"></div>
                        </div>

                        <div class="col-8">
                            <label for="Size" class="form-label">Talla</label>
                            <input class="form-select " id="Size" name="param_size" disabled>

                            <div class="error-message" id="size-error"></div>
                        </div>


                        <div class="col-8">
                            <label for="Gender" class="form-label">Genero</label>
                            <input class="form-select " id="Gender" name="param_gender" disabled >


                       
                            <div class="error-message" id="gender-error"></div>

                        </div>

                        <div class="col-8">
                            <label for="Subcategory" class="form-label">Subcategoria</label>
                            <input class="form-select" id="Subcategory" name="param_subcategory">

                            <input input class="error-message" id="subcategory-error"></disabledinput>

                        </div>

                        <div class="col-8">
                            <label for="Mark" class="form-label">Marca</label>
                            <input disabled class="form-select" id="Mark" name="param_mark">

                            <div class="error-message" id="mark-error"></div>

                        </div>

                        <div class="col-8">
                            <label for="Color" class="form-label">Color</label>
                            <input disabled class="form-select" id="Color" name="param_color">


                    
                            <div class="error-message" id="color-error"></div>

                        </div>

                        <div class="col-8">
                            <label for="State" class="form-label">Estado</label>
                            <input class="form-select" id="State" name="param_state">

                            <div class="error-message" id="state-error"></div>

                        </div>




                        <div class="container d-flex flex-column align-items-center mt-4">
                            <button type="submit" class="btn botones-crud" id="guardarButton">Volver</button>
                            <button onclick="redireccionar()">Ir a la página de destino</button>


function redireccionar() {
  // Cambia la URL a la que deseas redireccionar
  window.location.href = "https://www.ejemplo.com/pagina-de-destino.html";
}

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
<script src="../js/fetchs/crud-views-product.js"></script>


</body>

</html>