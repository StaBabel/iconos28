<?php 
//http://php.net/manual/es/
/*
$nombre = "Jonathan";
$Nombre = 'Ulises';

echo "<p>hola $nombre $Nombre</p>";
echo '<p>hola ' . $nombre . '</p>';
*/

//phpinfo();

//include("config.php");
//include_once("config.php");
//require "confg.php";
require_once "config.php";

function conexionMySQL()
{
	$conexion = new mysqli(SERVER,USER,PASS,DB);

	if($conexion->connect_error)
	{
		echo "Error de Conexión N°" . $conexion->connect_errno;
	}
	else
	{
		echo "Conexión Exitosa desde " . $conexion->host_info;
	}
}

conexionMySQL();