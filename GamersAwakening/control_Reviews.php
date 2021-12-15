<?php
include './modelo_usuario.php';
$path = './data/reviews.json';
$registros = read_JSON($path);
$user = $_POST["id"];

$data = [
    "id" => $_POST["id"],
    "fecha" =>$_POST["fecha"],
    "week" =>$_POST["week"],
    "user" =>$_POST["user"],
    "plataforma" =>$_POST["plataforma"],
    "nombre" =>$_POST["nombre"],
    "sinopsis" =>$_POST["sinopsis"],
    "review" =>$_POST["review"],
    "img" =>$_POST["img"],
    "rating" =>$_POST["rating"]
];

if(isset($registros[$user])){
    header("Location: ./console.php?error=1");
}else{
    $registros[$user] = $data;

    if(add_Tolist($registros, $path)){
        //Redirigir al catálogo
        header("Location: ./index.html");
        //echo "success";
    }
    else{
        header("Location: ./console.php?error=1");
        //echo "success";
    }
}

?>