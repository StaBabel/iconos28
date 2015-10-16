//Constante
var READY_STATE_COMPLETE = 4;
var OK = 200;

//Variables
var ajax = null;
var btnInsertar = document.querySelector("#insertar");
var precarga = document.querySelector("#precarga");
var respuesta = document.querySelector("#respuesta");
var btnsEliminar = document.querySelectorAll(".eliminar");
var btnsEditar = document.querySelectorAll(".editar");

//Funciones
function objetoAjax()
{
	if(window.XMLHttpRequest)
	{
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject)
	{
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}

function ejecutarAJAX(datos)
{
	ajax = objetoAjax();
	ajax.onreadystatechange=enviarDatos;
	ajax.open("POST","controlador.php");
	/*
	http://es.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions
	http://sites.utoronto.ca/webdocs/HTMLdocs/Book/Book-3ed/appb/mimetype.html
	*/
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send(datos);
}

function enviarDatos()
{
	precarga.style.display = "block";
	precarga.innerHTML = "<img src='img/loader.gif' />";

	/*
	http://es.wikipedia.org/wiki/Anexo:Códigos_de_estado_HTTP
	http://librosweb.es/ajax/capitulo_7/metodos_y_propiedades_del_objeto_xmlhttprequest.html
	*/
	if(ajax.readyState == READY_STATE_COMPLETE)
	{
		if(ajax.status == OK)
		{
			//console.log(ajax);
			//alert("wiii");
			//alert(ajax.responseText);
			precarga.innerHTML = null;
			precarga.style.display = "none";
			respuesta.style.display = "block";
			respuesta.innerHTML = ajax.responseText;

			if(ajax.responseText.indexOf("data-recargar")>-1)
			{
				setTimeout(window.location.reload(),3000);
			}

			if(ajax.responseText.indexOf("data-insertar")>-1)
			{
				//document.querySelector("#alta-heroe").addEventListener("submit",insertarHeroe);
				document.querySelector("#alta-heroe").addEventListener("submit",insertarActualizarHeroe);
			}

			if(ajax.responseText.indexOf("data-editar")>-1)
			{
				document.querySelector("#editar-heroe").addEventListener("submit",insertarActualizarHeroe);
			}
		}
		else
		{
			//console.log(ajax);
			//alert("nooo");
			alert("El servidor NO contestó\nError "+ajax.status+": "+ajax.statusText);
		}	

	}
}

function altaHeroe(evento)
{
	evento.preventDefault();
	var datos = "transaccion=alta";
	ejecutarAJAX(datos);
}

//function insertarHeroe(evento)
function insertarActualizarHeroe(evento)
{
	evento.preventDefault();
	//alert("Procesa Formulario");
	//console.log(evento);
	//console.log(evento.target);
	//console.log(evento.target[0]);
	//console.log(evento.target.length);

	var nombre = new Array();
	var valor = new Array();
	var hijosForm = evento.target;
	var datos = "";

	for(var i=1; i<hijosForm.length; i++)
	{
		nombre[i] = hijosForm[i].name;
		valor[i] = hijosForm[i].value;

		datos += nombre[i]+"="+valor[i]+"&";
		//console.log(datos);
	}

	ejecutarAJAX(datos);
}

function eliminarHeroe(evento)
{
	evento.preventDefault();
	
	//alert(evento.target.dataset.id);
	var idHeroe = evento.target.dataset.id;
	var eliminar = confirm("¿Estás seguro de eliminar el Super Héroe con el id: "+idHeroe);

	if(eliminar)
	{
		var datos = "idHeroe="+idHeroe+"&transaccion=eliminar";
		ejecutarAJAX(datos);
	}
}

function editarHeroe(evento)
{
	evento.preventDefault();
	//alert(evento.target.dataset.id);

	var idHeroe = evento.target.dataset.id;
	var datos = "idHeroe="+idHeroe+"&transaccion=editar";

	ejecutarAJAX(datos);
}

function alCargarElDocumento()
{
	btnInsertar.addEventListener("click",altaHeroe);
	
	for (var i = 0; i < btnsEliminar.length; i++) {
		btnsEliminar[i].addEventListener("click",eliminarHeroe);
	};

	for (var i = 0; i < btnsEditar.length; i++) {
		btnsEditar[i].addEventListener("click",editarHeroe);
	};
}

//Eventos
window.addEventListener("load",alCargarElDocumento);