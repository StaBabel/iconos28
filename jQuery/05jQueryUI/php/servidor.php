<?php 
	//echo "Los datos han pasado por PHP";
	//echo "Los datos han pasado por PHP, como esta en el servidor no necesito recargar mi navegador, AJAX va y consulta de manera asíncrona";

	$nombre = $_POST["nombre_txt"];
	$email = $_POST["email_txt"];
	$cumple = $_POST["cumple_txt"];
	$asunto = $_POST["asunto_txt"];
	$comentarios = $_POST["comentarios_txa"];

	$respuesta =  "Los datos que enviaste son:<br />";
	$respuesta .= "Nombre: ".$nombre."<br />";
	$respuesta .= "Email: ".$email."<br />";
	$respuesta .= "Cumple: ".$cumple."<br />";
	$respuesta .= "Asunto: ".$asunto."<br />";
	$respuesta .= "Comentarios: ".$comentarios."<br />";

	echo $respuesta;
?>