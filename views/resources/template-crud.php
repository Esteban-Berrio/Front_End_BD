<link rel="icon" type="image/ico" href="../img/iconoBD2.ico">
<link rel="stylesheet" href="../CSS/styles-extend-crud.css">
<title>Admin Black Diamond</title>
</head>

<body>
    <?php

    if (!isset($_SESSION['param_rol'])) {
        header("Location: login.php");
    } else {
        if ($_SESSION['type_user'] == 236) {
            header("Location: index.php");
            exit;
        }
    }
    ?>

    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg  header-admin">
        <div class="container-fluid">
            <!-- Brand Logo -->
            <a class="navbar-brand" href="home.php"><img src="../img/Logo2.png" alt="logo"></a>
            <!-- Mobile Navigation Toggle Button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Navigation Links and Logout Button -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <!-- Navigation Links -->
                    <li class="nav-item">
                        <a class="nav-burger link nav-link" href="crud-ratings.php">Comentarios</a>
                    </li>

                    <?php

                    if ($_SESSION['param_rol'] != 3403 && $_SESSION['param_rol'] != 3404) {
                        echo '<li class="nav-item">
                        <a class="nav-burger link nav-link" href="crud-product-ver.php">Productos</a>
                    </li>';
                    } else {
                        echo '<li class="nav-item">
                        <a class="nav-burger link nav-link" href="crud-product.php">Productos</a>
                    </li>';
                    }

                    ?>


                    <?php
                    if ($_SESSION['param_rol'] == 3403) {
                        echo '<li class="nav-item">
                                    <a class="nav-burger link nav-link" href="crud-users-master.php"> Usuarios</a>
                            </li>
                            
                            <li class="nav-item">
                            <a class="nav-burger link nav-link" href="crud-order.php">Factura</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-burger link nav-link" href="crud-params.php">Parámetros</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-burger link nav-link" href="crud-param-types.php">Tipos de Parámetros</a>
                        </li>
                        ';
                    } elseif ($_SESSION['param_rol'] == 3404) {
                        echo '<li class="nav-item">
                                <a class="nav-burger link nav-link" href="crud-users.php">Usuarios</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-burger link nav-link" href="crud-order.php">Factura</a>
                            </li>

                            ';
                    }

                    ?>



                    <li class="nav-item">
                        <a class="nav-burger link nav-link" href="crud-images.php">Imagenes</a>
                    </li>

                    <?php
                    if ($_SESSION['param_rol'] == 3403 || $_SESSION['param_rol'] == 3405) {
                        echo '<li class="nav-item">
                                <a class="nav-burger link nav-link" href="grafica.php">Graficos</a>
                            </li>';
                    }
                    ?>

                </ul>
                <!-- Logout and Question Button -->
                <div class="navbar-nav ms-auto">
                    <a class="nav-link" href="log-out.php"><button type="button" class="btn-logout btn logout-crud">Cerrar Sesión</button></a>
                    <a class="nav-link mt-2" href="#"><i class="fa-solid fa-question-circle fa-xl" style="color: #000000;"></i></a>
                </div>
            </div>
        </div>
    </nav>
    <!-- Main Content Container -->
    <div class="container-fluid">
        <div class="row fondo-home">
            <!-- Left Sidebar (Navigation Menu) -->
            <div class="aside-container col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <ul class="aside-item nav flex-column pt-3 l-left2">
                    <!-- Navigation Links -->
                    <li class="nav-item">
                        <a class="nav-aside link nav-link" href="crud-ratings.php">Comentarios</a>
                    </li>

                    <?php
                    
                    if ($_SESSION['param_rol'] != 3403 && $_SESSION['param_rol'] != 3404) {
                        echo '<li class="nav-item">
                                <a class="nav-aside link nav-link" href="crud-product-ver.php">Productos</a>
                            </li>';
                    } else {
                        echo '<li class="nav-item">
                                <a class="nav-aside link nav-link" href="crud-product.php">Productos</a>
                            </li>';
                    }
                    ?>






                    <?php

                    if ($_SESSION['param_rol'] == 3403) {
                        
                        echo '<li class="nav-item">
                                <a class="nav-aside link nav-link" href="crud-users-master.php"> Usuarios</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-aside link nav-link" href="crud-order.php">Factura</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-aside link nav-link" href="crud-params.php">Parámetros</a>
                            </li>

                            <li class="nav-item">
                            <a class="nav-aside link nav-link" href="crud-param-types.php">Tipos de Parámetros</a>
                            </li>';
                    } elseif ($_SESSION['param_rol'] == 3404) { 
                        
                        echo '<li class="nav-item">
                                <a class="nav-aside link nav-link" href="crud-order.php">Factura</a>
                            </li>
                        
                            <li class="nav-item">
                                <a class="nav-aside link nav-link" href="crud-users.php"> Usuarios</a>
                            </li>

                        ';
                    }

                    ?>


                    <li class="nav-item">
                        <a class="nav-aside link nav-link" href="crud-images.php">Imagenes</a>
                    </li>

                    <?php
                    if ($_SESSION['param_rol'] == 3403 || $_SESSION['param_rol'] == 3405) {
                        echo '<li class="nav-item">
                            <a class="nav-aside link nav-link" href="grafica.php">Graficos</a>
                        </li>';
                    }
                    ?>
                </ul>
            </div>