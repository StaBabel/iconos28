//DECLARACIÓN DE OBJETOS Y VARIABLES
var down = document.querySelector("#down");
var press = document.querySelector("#press");
var up = document.querySelector("#up");
var leftToRight = 0;
var topToBottom = 0;
var pagina = document.querySelector("#pagina");
var pantalla = document.querySelector("#pantalla");
var subir = document.querySelector("#subir");
var mapa = document.querySelector("#mapa");
var iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2624.9916298517073!2d2.294481!3d48.85837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre+Eiffel!5e0!3m2!1ses-419!2smx!4v1396556438811" width="600" height="600" frameborder="0" style="border:0"></iframe>';

//DECLARACIÓN DE FUNCIONES
function moverObjeto(queTecla)
{
	//console.log(queTecla);

	if(queTecla == 37)
	{
		//caja.style.left = "-100px";
		leftToRight -= 10;
		caja.style.left = leftToRight+"px";
	}
	else if(queTecla == 38)
	{
		//caja.style.top = "-100px";
		topToBottom -= 10;
		caja.style.top = topToBottom+"px";
	}
	else if(queTecla == 39)
	{
		//caja.style.left = "100px";
		leftToRight += 10;
		caja.style.left = leftToRight+"px";
	}
	else if(queTecla == 40)
	{
		//caja.style.top = "100px";
		topToBottom += 10;
		caja.style.top = topToBottom+"px";
	}
	else if(queTecla == 82) //r
	{
		caja.style.borderRadius = "100%";
	}
	else if(queTecla == 67) //c
	{
		caja.style.borderRadius = "0";
	}
}

function teclado(evento)
{
	//console.log("Parámetro",evento);

	evento = window.event;
	//console.log("Objeto",evento);

	if(evento.type=="keydown")
	{
		down.innerHTML = "keydown: "+String.fromCharCode(evento.keyCode)+"-"+evento.keyCode;
	}

	if(evento.type=="keypress")
	{
		press.innerHTML = "keypress: "+String.fromCharCode(evento.keyCode)+"-"+evento.keyCode;
	}

	if(evento.type=="keyup")
	{
		up.innerHTML = "keyup: "+String.fromCharCode(evento.keyCode)+"-"+evento.keyCode;
	}
	
	moverObjeto(evento.keyCode);
}

function raton(evento)
{
	//console.log(evento);
	evento = window.event;

	pagina.innerHTML = "Coordenadas del ratón en la página: X-"+evento.pageX+", Y-"+evento.pageY;
	pantalla.innerHTML = "Coordenadas del ratón en la pantalla: X-"+evento.screenX+", Y-"+evento.screenY;
}

function barrasScroll(evento)
{
	//console.log(evento);
	
	var barraV = document.body.scrollTop;
	var barraH = document.body.scrollLeft;

	//console.log(barraH,barraV);

	if(barraV > 100)
	{
		subir.style.opacity = 1;
	}
	else
	{
		subir.style.opacity = 0;
	}
}

function mediaQueries()
{
	var anchoPantalla = window.innerWidth;
	var altoPantalla = window.innerHeight;
	//console.log(anchoPantalla,altoPantalla);

	if(anchoPantalla>1024)
	{
		mapa.innerHTML = iframe;
	}
	else
	{
		mapa.innerHTML = null;
	}
}

function cargaDocumento()
{
	document.addEventListener("keydown",teclado);
	document.addEventListener("keypress",teclado);
	document.addEventListener("keyup",teclado);

	document.addEventListener("mousemove",raton);
	
	window.addEventListener("scroll",barrasScroll);
	
	subir.addEventListener("click",function(){
		document.body.scrollTop = 0;
		document.body.scrollLeft = 0;
	});
	
	window.addEventListener("resize",mediaQueries);
}

//ASIGNACIÓN DE EVENTOS
window.addEventListener("load",cargaDocumento);