var btnCalificacion = document.querySelector("#calificacion");
var btnAdivina = document.querySelector("#adivina");
var btnEscribe = document.querySelector("#escribe");

function obtenerCalificacion()
{ 
	alert("calif");
}

function adivinarNumero()
{ 
	alert("adivina");
}

function cadenaTexto()
{ 
	alert("cadena");
}


function cargaDocumento()
{
	btnCalificacion.addEventListener("click",obtenerCalificacion);
	btnAdivina.addEventListener("click",adivinarNumero);
	btnEscribe.addEventListener("click",cadenaTexto);
}

window.addEventListener("load",cargaDocumento);