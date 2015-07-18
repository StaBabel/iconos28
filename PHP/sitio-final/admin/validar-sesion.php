<?php 
//echo 'Hola';
$usuario = $_POST["usuario_txt"];
$password = $_POST["password_txt"];

//próxima sesión validar datos en BD
//código duro
if($usuario == "jonmircha"  && $password == "qwerty")
{
	//Creo la sesión
	session_start();
	$_SESSION["nombre"] = $usuario;
	$_SESSION["session_ok"] = true;

	header("Location: index.php");
}
else
{
	//Mando mesaje de error a la vista
	header("Location: index.php?error=true");
}