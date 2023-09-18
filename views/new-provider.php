<?php
require_once('resources/initiator.php');
?>

<link rel="stylesheet" href="../css/new-provider.css">

<?php
require_once('resources/template-crud.php')
?>

<div class="col-sm-12 col-md-10 col-lg-10 col-xl-10 pt-2">
    <div class="card-header p-3">
        <div class="container">
            <div class="d-flex flex-wrap justify-content-center">
                <!-- Texto de editar perfil -->
                <h1>NUEVO PROVEEDOR</h1>
            </div>
        </div>
    </div>
    <div class="container-crud">
        <form id="providerForm" method="POST" class="br container p-4 mb-5">
            <div class="row">
                <div class="col-md-6">
                    <div class="container d-flex flex-column align-items-center">
                        <!-- Campos de la izquierda -->
                        <div class="col-8 mb-3">
                            <label for="legalName" class="form-label">Nombre Legal</label>
                            <input type="text" class="form-control" id="legalName" name="legal_name">
                            <div class="error" id="legalName-error"></div>
                        </div>

                        <!-- Agrega aquí los campos adicionales de la izquierda -->
                        <div class="col-8 mb-3">
                            <label for="commercialName" class="form-label">Nombre Comercial</label>
                            <input type="text" class="form-control" id="commercialName" name="commercial_name">
                            <div class="error" id="commercialName-error"></div>
                        </div>

                        <div class="col-8 mb-3">
                            <label for="email" class="form-label">Correo Electrónico</label>
                            <input type="text" class="form-control" id="email" name="email">
                            <div class="error" id="email-error"></div>
                        </div>

                        <div class="col-8 mb-3">
                            <label for="phone" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" id="phone" name="phone">
                            <div class="error" id="phone-error"></div>
                        </div>

                        <div class="col-8 mb-3">
                            <label for="address" class="form-label">Dirección</label>
                            <input type="text" class="form-control" id="address" name="address">
                            <div class="error" id="address-error"></div>
                        </div>

                        <div class="col-8 mb-3">
                            <label for="city" class="form-label">Ciudad</label>
                            <select class="form-select" id="city" name="param_city"></select>
                            <div class="error" id="city-error"></div>
                        </div>

                    </div>
                </div>

                <div class="col-md-6">
                    <div class="container d-flex flex-column align-items-center">
                        <!-- Campos de la derecha -->

                        <div class="col-8 mb-3">
                            <label for="nameContact" class="form-label">Nombre de Contacto</label>
                            <input type="text" class="form-control" id="nameContact" name="name_contact">
                            <div class="error" id="nameContact-error"></div>
                        </div>
                        
                        <div class="col-8 mb-3">
                            <label for="bank" class="form-label">Banco</label>
                            <select class="form-select" id="bank" name="param_bank"></select>
                            <div class="error" id="bank-error"></div>
                        </div>

                        <!-- Agrega aquí los campos adicionales de la derecha -->
                        <div class="col-8 mb-3">
                            <label for="accountType" class="form-label">Tipo de Cuenta</label>
                            <select class="form-select" id="accountType" name="param_account"></select>
                            <div class="error" id="accountType-error"></div>
                        </div>

                        <div class="col-8 mb-3">
                            <label for="accountNumber" class="form-label">Número de Cuenta</label>
                            <input type="text" class="form-control" id="accountNumber" name="account">
                            <div class="error" id="accountNumber-error"></div>
                        </div>

                        <div class="col-8 mb-3">
                            <label for="state" class="form-label">Estado</label>
                            <select class="form-select" id="state" name="param_state"></select>
                            <div class="error" id="state-error"></div>
                        </div>

                        <!-- Botón de guardar -->
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

<script src="../js/fetch.js"></script>
<script src="../js/new-provider.js"></script>
</body>

</html>
