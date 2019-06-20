<?php
 
$nombre= filter_input(INPUT_POST, "nombre");
$apellido= filter_input(INPUT_POST, "apellido");
$asunto= filter_input(INPUT_POST, "asunto");
$mensaje= filter_input(INPUT_POST, "mensaje");
 
$resultado=["Nombre: "=>$nombre,"Apellido: "=>$apellido,"Asunto: "=>$asunto,"Mensaje: "=>$mensaje];
 
echo json_encode($resultado);

?>

