<?php 
require "conexion.php";

//echo 'Hola';
$usuario = $_POST["usuario_txt"];
$password = $_POST["password_txt"];

$mysql = conexionMySQL();
$sql = "SELECT * FROM usuarios WHERE user = '$usuario' AND pass = '$password'";
$resultado = $mysql->query($sql);
$fila = $resultado->fetch_assoc();
$num_reg = mysqli_num_rows($resultado);

if($num_reg == 1)
{
	//Creo la sesión
	session_start();
	$_SESSION["nombre"] = $fila["user"];
	$_SESSION["rol"] = $fila["rol"];
	$_SESSION["session_ok"] = true;

	header("Location: index.php");
}
else
{
	//Mando mesaje de error a la vista
	header("Location: index.php?error=true");
}