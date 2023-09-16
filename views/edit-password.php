<?php
require_once('resources/initiator.php');
?>

<link rel="stylesheet" href="../css/edit-password.css">

<?php
require_once('resources/header-1.php')
?>

<div class="container my-5 mb-5 border border-2 border-warning rounded-4">
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="card-header justify-content-center">
                <div class="card-title text-center pt-4">
                    <h1 class=""><strong>EDITAR MI CONTRASEÑA</strong></h1>
                </div>

                <div class="container-fluid mb-3">
                    <form id="paramForm" method="POST" class="br container p-4 mb-5">
                        <div class="row">
                            <div class="container d-flex flex-column align-items-center">
                                <div class="col-6 pt-2 mb-4 relative-password">
                                    <label for="currentPassword" class="form-label">Contraseña Actual</label>
                                    <div class="input-container">
                                        <input type="password" class="form-control" id="currentPassword" name="currentPassword">
                                        <i class="fa-solid fa-eye" id="eye1" onclick="togglePassword('currentPassword', 'eye1')"></i>
                                    </div>
                                    <div class="error" id="currentPassword-error"></div>
                                </div>
                            </div>

                            <div class="container d-flex flex-column align-items-center">
                                <div class="col-6 pt-5 mb-4 relative-password">
                                    <label for="newPassword" class="form-label">Nueva Contraseña</label>
                                    <div class="input-container">
                                        <input type="password" class="form-control" id="newPassword" name="newPassword">
                                        <i class="fa-solid fa-eye" id="eye2" onclick="togglePassword('newPassword', 'eye2')"></i>
                                    </div>
                                    <div class="error" id="newPassword-error"></div>
                                </div>
                            </div>

                            <div class="container d-flex flex-column align-items-center">
                                <div class="col-6 pt-5 mb-4 relative-password">
                                    <label for="verifyPassword" class="form-label">Verificar Contraseña</label>
                                    <div class="input-container">
                                        <input type="password" class="form-control" id="verifyPassword" name="verifyPassword">
                                        <i class="fa-solid fa-eye" id="eye3" onclick="togglePassword('verifyPassword', 'eye3')"></i>
                                    </div>
                                    <div class="error" id="verifyPassword-error"></div>
                                </div>
                            </div>

                            <div class="container d-flex justify-content-center mt-2">
                                <button type="submit" class="btn botones-crud">Guardar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
require_once('resources/footer.php')
?>

<script src="../js/edit-password.js"></script>

</body>

</html>