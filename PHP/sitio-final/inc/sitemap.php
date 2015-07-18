<?php
	if( !isset($_GET['p']) )
	{
		//Cargar el contenido de inicio
		$titulo = 'Inicio';
		$contenido = 'inc/inicio.php';
	}
	else if( $_GET['p']=='acerca' /*|| $_GET['p']=='acerca/'*/ )
	{
		//Cargar el contenido de acerca	
		$titulo = 'Acerca';
		$contenido = 'inc/acerca.php';
	}
	else if( $_GET['p']=='servicios' )
	{
		//Cargar el contenido de servicios	
		$titulo = 'Servicios';
		$contenido = 'inc/servicios.php';
	}
	else if( $_GET['p']=='contacto' )
	{
		//Cargar el contenido de contacto
		$titulo = 'Contacto';
		$contenido = 'inc/contacto.php'	;
	}
	else
	{
		//Cargar Error 404
		$titulo = 'Error 404';
		$contenido = 'inc/404.php';
	}
