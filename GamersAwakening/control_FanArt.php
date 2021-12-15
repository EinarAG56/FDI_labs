<?php
include './modelo_usuario.php';
$path = './data/fanArt.json';
$registros = read_JSON($path);
$user = $_POST["id"];

$data = [
    "id" => $_POST["id"],
    "fecha" =>$_POST["fecha"],
    "user" =>$_POST["user"],
    "nombre" =>$_POST["nombre"],
    "sinopsis" =>$_POST["sinopsis"],
    "img" =>$_POST["img"]
];

if(isset($registros[$user])){
    header("Location: ./consoleFA.php?error=1");
}else{
    $registros[$user] = $data;

    if(add_Tolist($registros, $path)){
        //Redirigir al catálogo
        header("Location: ./comunidad.html");
        //echo "success";
    }
    else{
        header("Location: ./consoleFA.php?error=1");
        //echo "success";
    }
}

?>