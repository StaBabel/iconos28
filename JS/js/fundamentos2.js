//IMPORTACION LIBRERIAS o MODULOS
//DECLACION CONSTANTES
//DECLARACION VARIABLES y OBJETOS
var boton = document.getElementById("boton");
var boton2 = document.getElementById("boton2");
var numero = document.getElementById("numero");
var hola = document.getElementById("hola");

var fecha = new Date();
var hora = fecha.getHours();
var dia = fecha.getDay();

var bisiesto = document.getElementById("bisiesto");

var btnReloj = document.getElementById("reloj");
var detenerReloj = document.getElementById("detener-reloj");
var muestroHora = document.getElementById("muestro-hora");

var btnAlarma = document.getElementById("alarma");
var detenerAlarma = document.getElementById("detener-alarma");

//DECLARACION DE FUNCIONES
function eventoClick(evento)
{
	//alert("Has presionado el botón");
	console.log(evento);
	alert("Has presionado el botón en el evento '"+evento.type+"' con el objeto de atributo id '"+evento.target.id+"'.");
	evento.target.style.borderRadius = "1em";
	evento.target.style.fontSize = "2em";

	boton2.removeEventListener("click",eventoClick);
	boton2.addEventListener("dblclick",otroEventoClick);
}

function otroEventoClick(evento)
{
	//alert("Has presionado el botón");
	console.log(evento);
	alert("Has presionado el botón en el evento '"+evento.type+"' con el objeto de atributo id '"+evento.target.id+"'.");
	evento.target.style.background = "black";
	evento.target.style.color = "white";
}

function parImpar()
{
	var numero =prompt("Ingresa un número:");

	//isNaN - is Not a Number true si el valor es alfanumérico, false si es númerico
	if(isNaN(numero))
	{
		alert("No me engañes, '"+numero+"' eso no es un número");
	}
	else
	{
		var modulo = numero%2;
		//var tipo = (modulo==1)?"Impar":"Par";
		var tipo = (modulo==0)?"Par":"Impar";
		alert("El número "+numero+" es "+tipo);
	}
}

function saluda()
{
	/*
	Algoritmo para saludar:
		1)El Día tiene 24 horas que van de la 0 a la 23
		2)Decimos Deja dormir de las 0 a las 5
		3)Decimos Buenos días de las 6 a las 11
		4)Decimos Buenos tardes de las 12 a las 18
		5)Decimos Buenos noches de las 19 a las 23
	*/

	var hojaCSS = document.createElement("link");
	hojaCSS.rel = "stylesheet";

	//alert(hora);
	//if(hora <= 5)
	if(hora < 6)
	{
		alert("Vete a Dormir !!!");
		hojaCSS.href = "activos/duermete.css";
	}
	else if(hora >= 6 && hora <= 11)
	{
		alert("Buenos Días");
		hojaCSS.href = "activos/dia.css";
	}
	else if(hora >= 12 && hora <=18)
	{
		alert("Buenas Tardes");
		hojaCSS.href = "activos/tarde.css";
	}
	else
	{
		alert("Buenas Noches");
		hojaCSS.href = "activos/noche.css";
	}

	document.head.appendChild(hojaCSS);

	//alert(dia);
	/* 
	DLMMiJVS
	0123 456
	*/

	switch(dia)
	{
		case 0:
			alert("Domingo");
			break;
		case 6:
			alert("Sábado");
			break;
		case 5:
			alert("Viernes");
			break;
		default:
			alert("Esperando a que llegue el fin de semana =(");
			break;
	}
}

function anioBisiesto()
{
	var anio = prompt("Ingresa un año");

	if(isNaN(anio))
	{
		alert("No me engañes, eso no es un año");
	}
	else
	{
		if((anio%4 == 0 && anio%100 != 0) || anio%400 == 0)
		{
			alert("El año "+anio+" es bisiesto");
		}
		else
		{
			alert("El año "+anio+" NO es bisiesto");
		}
	}
}

function reloj()
{
	var fechaReloj = new Date();
	var hrReloj = fechaReloj.getHours();
	var minReloj = fechaReloj.getMinutes();
	var segReloj = fechaReloj.getSeconds();
	var ampm = (hrReloj >= 12)?"pm":"am";

	if(hrReloj >= 12)
	{
		//hrReloj = hrReloj - 12;
		hrReloj -= 12;
	}

	if(hrReloj <= 9)
	{
		hrReloj = "0" + hrReloj
	}

	if(minReloj<=9)
	{
		minReloj = "0" + minReloj;
	}

	if(segReloj<=9)
	{
		segReloj = "0" + segReloj;
	}

	muestroHora.innerHTML = "<p>"+hrReloj+":"+minReloj+":"+segReloj+ampm+"</p>";
}

function alarma()
{
	var audio = document.createElement("audio");
	audio.src = "activos/alarma.mp3";
	return audio.play();
}

//EVENTOS y EJECUCIONES INMEDIATAS
//Manejador de eventos semánticos
window.onload = function(){
	boton.onclick = eventoClick;
	boton.onclick = otroEventoClick;

	boton2.addEventListener("click",eventoClick);
	numero.addEventListener("click",parImpar);
	hola.addEventListener("click",saluda);
	bisiesto.addEventListener("click",anioBisiesto);

	btnReloj.addEventListener("click",function(){
		iniciarReloj = setInterval(reloj,1000);
	});

	detenerReloj.addEventListener("click",function(){
		clearInterval(iniciarReloj);
	});

	btnAlarma.addEventListener("click",function()
	{
		iniciarAlarma = setTimeout(alarma,3000);
	});

	detenerAlarma.addEventListener("click",function()
	{
		clearTimeout(iniciarAlarma);
	});
};