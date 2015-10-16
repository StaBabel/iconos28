<?php
//http://php.net/manual/es/
//phpinfo();
require_once "config.php";

function conexionMySQL()
{	
	$conexion = new mysqli(SERVER,USER,PASS,DB);

	if($conexion->connect_error)
	{
		/*
		$error = "<div class='error'>";
			$error .= "Error de Conexión N°<b>".$conexion->connect_errno."</b> Mensaje del error: <mark>".$conexion->connect_error."</mark>";
		$error .= "</div>";

		die($error)		
		*/
		
		$error .= "<div class='error'>Error de Conexión N°<b>%d</b> Mensaje del error: <mark>%s</mark></div>";
		printf($error,$conexion->connect_errno,$conexion->connect_error);
	}
	else
	{
		//$formato = "<div class='mensaje'>Conexión exitosa: <b>".$conexion->host_info."</b></div>";
		//echo $formato;

		/*
		http://php.net/manual/es/function.printf.php
		Formatos de las funciones printf
			http://php.net/manual/es/function.sprintf.php
		*/

		//$formato = "<div class='mensaje'>Conexión exitosa: <b>%s</b></div>";
		//printf($formato,$conexion->host_info);
	}

	$conexion->query("SET CHARACTER SET UTF8");

	return $conexion;
}

//conexionMySQL();
?>