<?php require "vistas.php"; ?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8"/>
	<title>Aplicación CRUD Super Héroes</title>
	<meta name="description" content="Aplicación CRUD (Create-Read-Update-Delete) con filosofía MVC desarrollada en PHP, MySQL y AJAX" />
	<link rel="stylesheet" href="css/super-heroes.css" />
</head>
<body>
	<?php 
	session_start();

	if( !isset($_SESSION["session_ok"]) )
	{
		$_SESSION["session_ok"] = false;
	}

	if($_SESSION["session_ok"])
	{
		$nombre = $_SESSION["nombre"];
		$msg = "<h1>Hola $nombre estás conectado</h1>";
		$msg .= "<a href='salir.php'>Salir</a>";
		printf($msg);
	?>
		<header id="cabecera">
			<h1>Super Héroes</h1>
			<div><img src="img/super-heroes.png" alt="Super Héroes" /></div>
		<?php 
		if($_SESSION["rol"]=="A") {
			printf('<a id="insertar" href="#">Insertar</a>');
		}
		 ?>
		</header>
		<section id="contenido">
			<!-- <p>Aquí contenido</p> -->
			<div id="respuesta"></div>
			<div id="precarga"></div>
			<?php mostrarHeroes(); ?>
		</section>
	<?php 
	}
	else
	{
		//error_reporting(E_ALL ^ E_NOTICE);
		formAutenticacion();
		if( !isset($_GET["error"]) )
		{
			$_GET["error"] = false;
		}
		
		if($_GET["error"])
		{
			printf('<div class="error">El usuario y/o password no son validos</div>');
		}
	}
	?>
	<script src="js/despachador.js"></script>
</body>
</html>