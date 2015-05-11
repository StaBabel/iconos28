//http://www.whatsmyuseragent.com/WhatsAUserAgent
var agente = navigator.userAgent.toLowerCase();
var moviles = /iphone|ipod|ipad|android|blackberry|opera mini|iemobile|mobile/;
var navegador, plataforma;

function detectarDispositivo()
{
	console.log(agente,agente.search(moviles));
	var aDondeVoy;

	if(agente.search(moviles) > -1)
	{
		aDondeVoy = "activos/mobile.html";
	}
	else
	{
		aDondeVoy = "activos/desktop.html";
	}

	window.location.href = aDondeVoy;
}

function detectarPlataforma()
{
	if(agente.indexOf("win") > -1)
	{
		plataforma = (agente.search(moviles)>-1)?"Windows Phone":"Windows NT";
	}
	else if(agente.indexOf("mac") > -1)
	{
		plataforma = (agente.search(moviles)>-1)?"iOS":"Mac OS X";	
	}
	else if(agente.indexOf("linux")>-1)
	{
		plataforma = (agente.search(moviles)>-1)?"Android":"Linux";
	}
	else if(agente.indexOf("blackberry")>-1)
	{
		plataforma = "BlackBerry";
	}
	else
	{
		plataforma = (agente.search(moviles)>-1)?"Plataforma Móvil Desconocida":"Plataforma de Escritorio Desconocida";	
	}

	document.getElementById("plataforma").innerHTML = plataforma;
}

function detectarIE()
{
	var posicionIE, versionIE;
	
	posicionIE = agente.indexOf("msie");
	versionIE = agente.substring(posicionIE+5,posicionIE+8);

	//alert(posicionIE+"---"+versionIE);
	if(agente.indexOf("rv:11")>-1)
		navegador = "IE 11";
	else if(versionIE=="10.")
		navegador = "IE 10";
	else if(versionIE=="9.0")
		navegador = "IE 9";
	else if(versionIE=="8.0")
		navegador = "IE 8";
	else if(versionIE=="7.0")
		navegador = "IE 7";
	else if(versionIE=="6.0")
		navegador = "IE 6";
	else
		navegador = "Más viejo que IE 6";
}

function detectarNavegador()
{
	if(agente.indexOf("chrome") > -1)
		navegador = "Chrome";
	else if(agente.indexOf("firefox") > -1)
		navegador = "Firefox";
	else if(agente.indexOf("Opera")>-1)
		navegador = "Opera";
	else if(agente.indexOf("safari")>-1)
		navegador = "Safari";
	else if(agente.indexOf("msie")>-1 || agente.indexOf("rv:11")>-1)
		detectarIE();

	document.getElementById("navegador").innerHTML = navegador;
}

function detectarUsuario()
{
	detectarPlataforma();
	detectarNavegador();
	document.getElementById("user-agent").innerHTML = agente;
}