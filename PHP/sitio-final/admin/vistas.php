<?php 
require_once "conexion.php";

function catalogoEditoriales()
{
	$editoriales = Array();
	$sql = "SELECT * FROM editorial";
	$mysql = conexionMySQL();
	
	if($resultado = $mysql->query($sql))
	{
		while($fila = $resultado->fetch_assoc())
		{
			$editoriales[$fila["id_editorial"]]=$fila["editorial"];
		}
		$resultado->free();
	}
	$mysql->close();

	//print_r($editoriales);
	return $editoriales;
}
//catalogoEditoriales();

/*
Pasos Para conectarme a MySQL con PHP
1)Objeto de Conexión: $mysql = conexionMySQL();
2)Consulta SQL: $sql = "SELECT * FROM  heroes ORDER BY id_heroe DESC";
3)Ejecutar la consulta: $resultado = $mysql->query($sql)
4)Mostrar Resultados: $fila = $resultado->fetch_assoc()
*/
function mostrarHeroes()
{
	$editorial = catalogoEditoriales();
	
	$mysql = conexionMySQL();
	$sql = "SELECT * FROM heroes ORDER BY id_heroe DESC";

	if($resultado = $mysql->query($sql))
	{
		//echo "WIIII";
		//Compruebo que el query me regrese registros
		$totalRegistros = mysqli_num_rows($resultado);
		
		if($totalRegistros==0)
		{
			$respuesta = "<div class='error'>No existe registros de Super Héroes. La Base de Datos esta vacía.</div>";	
		}
		else
		{
			/* INICIA PAGINACIÓN */
				//Limitar mi consulta SQL
				$regXPag = 3;
				$pagina = false;

				//Examinar la página a mostrar y el inicio del registro a mostrar
				if(isset($_GET["p"]))
				{
					$pagina = $_GET["p"];
				}

				if(!$pagina)
				{
					$inicio = 0;
					$pagina = 1;
				}
				else
				{
					$inicio = ($pagina - 1) * $regXPag;
				}

				//calculó el total de páginas
				$totalPaginas = ceil($totalRegistros/$regXPag);

				$sql .= " LIMIT ".$inicio.",".$regXPag;

				//echo $sql."<br />".$totalPaginas;

				$resultado = $mysql->query($sql);

				//despliegue de  la paginación
				$paginacion = "<div class='paginacion'>";
					$paginacion .= "<p>";
						$paginacion .= "Número de resultados: <b>$totalRegistros</b>. ";
						$paginacion .= "Mostrando <b>$regXPag</b> resultados por página. ";
						$paginacion .= "Página <b>$pagina</b> de <b>$totalPaginas</b>.";
					$paginacion .= "</p>";

					if($totalPaginas>1)
					{
						$paginacion .= "<p>";
							$paginacion .= ($pagina!=1)?"<a href='?p=".($pagina-1)."'>&laquo</a>":"";
							
							for($i=1;$i<=$totalPaginas;$i++)
							{
								//si muestro el índice de la página actual, no coloco enlace
								$actual = "<span class='actual'>$pagina</span>";
								//si el índice no corresponde con la página mostrada actualmente, coloco el enlace para ir a esa página
								$enlace = "<a href='?p=$i'>$i</a>";
								$paginacion .= ($pagina == $i)?$actual:$enlace;
							}
							
							$paginacion .= ($pagina!=$totalPaginas)?"<a href='?p=".($pagina+1)."'>&raquo</a>":"";
						$paginacion .= "</p>";
					}
				$paginacion .= "</div>";
			/* TERMINA PAGINACIÓN */
			
			$tabla = "<table id='tabla-heroes' class='tabla'>";
			$tabla .= "<thead>";
				$tabla .= "<tr>";
					$tabla .= "<th>Id Héroe</th>";
					$tabla .= "<th>Nombre</th>";
					$tabla .= "<th>Imagen</th>";
					$tabla .= "<th>Descripción</th>";
					$tabla .= "<th>Editorial</th>";
					$tabla .="<th></th>";
					$tabla .= "<th></th>";
				$tabla .= "</tr>";
			$tabla .= "</thead>";
			$tabla .= "<tbody>";
			while($fila = $resultado->fetch_assoc())
			{
				$tabla .= "<tr>";
					$tabla .= "<td>".$fila["id_heroe"]."</td>";
					$tabla .= "<td><h2>".$fila["nombre"]."</h2></td>";
					$tabla .= "<td><img src='img/".$fila["imagen"]."' /></td>";
					$tabla .= "<td><p>".$fila["descripcion"]."</p></td>";
					$tabla .= "<td><h3>".$editorial[$fila["editorial"]]."</h3></td>";
					if($_SESSION["rol"]=="A")
					{
						$tabla .="<td><a href='#' class='editar' data-id='".$fila["id_heroe"]."'>Editar</a></td>";
						$tabla .= "<td><a href='#' class='eliminar' data-id='".$fila["id_heroe"]."'>Eliminar</a></td>";
					}
					else
					{
						$tabla .= "<td></td><td></td>";
					}
				$tabla .= "</tr>";
			}
			$resultado->free();
			$tabla .= "</tbody>";
			$tabla .= "</table>";
			
			//Explicar que el echo no soporta imprimir funciones cuando ponga mostrarTipo
			$respuesta = $tabla.$paginacion;
		}
	}
	else
	{
		//echo "NOOOOO";
		$respuesta = "<div class='error'>Error: No se ejecuto la consulta a la Base de Datos</div>";
	}

	$mysql->close();

	return printf($respuesta);
}

function formAutenticacion()
{
	$form = '<form class="formulario" method="post" action="validar-sesion.php">';
		$form .= "<div>";
			$form .= "<label for='usuario'>Usuario:</label>";
			$form .= "<input type='text' id='usuario' name='usuario_txt' required />";
		$form .= "</div>";
		$form .= "<div>";
			$form .= "<label for='password'>Password:</label>";
			$form .= "<input type='password' id='password' name='password_txt' required />";
		$form .= "</div>";
		$form .= "<div>";
			$form .= "<input type='submit' id='entrar-btn' name='entrar_btn' value='Entrar' />";
		$form .= "</div>";
	$form .= '</form>';
	printf($form);
}
?>