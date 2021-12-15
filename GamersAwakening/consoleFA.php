<?php
    require_once "./modelo_usuario.php";
    error_reporting(E_ALL ^ E_NOTICE);

?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <title>Consola</title>
</head>
<body>
<header>
    <div class="head-img">
        <div class="div-logo">
            <img class="logo" src="img/logo.jpeg" alt="logo"/>
        </div>
        <div class="banner"><p>   </p></div>
    </div>
    <br>
    <div class="nav">
        <nav class="nav-button">
            <ul class="form-inline float-end" >
                <li class="btn btn-sm btn-outline-secondary" style="border-bottom: 1px solid white;">
                    <a class="nav-link" href="">Noticias</a>
                </li>
                <li class="btn btn-sm btn-outline-secondary" style="border-bottom: 1px solid white;">
                    <a class="nav-link" href="comunidad.html">Comunidad</a>
                </li>
                <li class="btn btn-sm btn-outline-secondary" style="border-bottom: 1px solid white;">
                    <a class="nav-link" href="index.html">Reviews</a>
                </li>
            </ul>
        </nav>

        <?php
        include_once 'navConsole.html'
        ?>
    </div>
</header>
<main>
    <center>
    <form class="form" method="POST" action="./control_FanArt.php">
        <h3>Nuevo Fan Art</h3>
        <hr>
        <label for="id">ID:</label>
        <input type="text" class="form-control" name="id" id="id" value="<?php echo uniqid(); ?>" readonly>
        <label for="fecha">Fecha:</label>
        <input type="date" class="form-control" name="fecha" id="fecha"><br>
        <label for="user">Usuario:</label>
        <input type="text" id="user" name="user"><br>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre"><br>
        <label for="sinopsis">Descripción:</label>
        <textarea name="sinopsis" id="sinopsis" cols="30" rows="5"></textarea><br>
        <label for="img">Imagen:</label>
        <input type="url" id="img" name="img" placeholder="url"><br>
        <center>
            <input class="btn btn-primary" type="submit" value="Submit">
            <input class="btn btn-secondary" type="reset" value="Reset">
        </center>
    </form>
    </center>
</main>
<footer class="text-center text-white" style="background-color: #f1f1f1;">
    <!-- Grid container -->
    <div class="container pt-4">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-facebook-f"></i
        ></a>
  
        <!-- Twitter -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-twitter"></i
        ></a>
  
        <!-- Google -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-google"></i
        ></a>
  
        <!-- Instagram -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-instagram"></i
        ></a>
  
        <!-- Linkedin -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-linkedin"></i
        ></a>
        <!-- Github -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-github"></i
        ></a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->
  
    <!-- Copyright -->
    <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2021 Copyright:
      <a class="text-dark" href="">Gamer's Awakening</a>
    </div>
    <!-- Copyright -->
  </footer>
</body>
</html>
