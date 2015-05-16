//Constante
var READY_STATE_COMPLETE = 4;
var OK = 200;

//Variables
var ajax = null;
var precarga = document.querySelector("#precarga");
var respuesta = document.querySelector("#respuesta");
var enlacesMenu = document.querySelectorAll(".menu");

function objetoAJAX()
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

function cambiarContenido()
{
	precarga.innerHTML = "<img src='activos/loader.gif' />";

	//console.log(ajax);
	/*
		http://es.wikipedia.org/wiki/Anexo:Códigos_de_estado_HTTP
		http://librosweb.es/ajax/capitulo_7/metodos_y_propiedades_del_objeto_xmlhttprequest.html
	*/
	if(ajax.readyState == READY_STATE_COMPLETE  && ajax.status == OK)
	{
		precarga.innerHTML = null;
		respuesta.innerHTML = ajax.responseText;
	}
	else
	{
		precarga.innerHTML = null;
		respuesta.innerHTML = "<p>El servidor NO respondió. Error "+ajax.status+": <mark>"+ajax.statusText+"</mark></p>";
	}
}

function ejecutarAJAX(evento)
{
	evento.preventDefault();
	//alert("funciona");

	ajax = objetoAJAX();
	ajax.onreadystatechange = cambiarContenido;
	//ajax.addEventListener("readystatechange",cambiarContenido);
	//console.log(evento.target);
	//alert(evento.target.href);
	var url = evento.target.href;
	ajax.open("GET",url);
	/*
		http://es.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions
		http://sites.utoronto.ca/webdocs/HTMLdocs/Book/Book-3ed/appb/mimetype.html
	*/
	ajax.setRequestHeader("Content-Type","text/html");
	ajax.send();
}

function cargarDocumento()
{
	for(var n=0; n<enlacesMenu.length; n++)
	{
		enlacesMenu[n].addEventListener("click",ejecutarAJAX);
	}
}

window.addEventListener("load",cargarDocumento);