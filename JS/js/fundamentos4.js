//var paises = new Array("México","Colombia","Perú","España","Argentina","Venezuela","Chile");
var paises = new Array();
paises[0] = new Array(
	"México",
	"u-mx.png",
	"b-mx.png",
	"e-mx.png",
	"Estados Unidos Mexicanos",
	"República Federal Presidencial",
	"Ciudad de México D.F.",
	119426000,
	1964375
);

paises[1] = new Array(
	"Colombia",
	"u-co.png",
	"b-co.png",
	"e-co.png",
	"República de Colombia",
	"República Presidencialista",
	"Bogotá D.C.",
	47662951,
	1141748
);

paises[2] = new Array(
	"Perú",
	"u-pe.png",
	"b-pe.png",
	"e-pe.png",
	"República del Perú",
	"República Democrática Presidencialista",
	"Lima",
	30814175,
	1285216
);

paises[3] = new Array("España",
	"u-es.png",
	"b-es.png",
	"e-es.png",
	"Reino de España",
	"Monarquía Parlamentaria",
	"Madrid",
	47129783,
	504645
);

paises[4] = new Array(
	"Argentina",
	"u-ar.png",
	"b-ar.png",
	"e-ar.png",
	"República Argentina",
	"República Federal Democrática",
	"Buenos Aires",
	42192500,
	2780400
);

function mostrarPaises()
{
	console.log(paises);
	console.log(paises[1]);
	console.log(paises.length);

	var ol = "<ol>";
	
	//3 partes: 1)inicialización 2)condición 3)incremento o decremento
	for(var n=0; n < paises.length; n++)
	{
		console.log(paises[n]);
		ol += "<li>"+paises[n]+"</li>";
	}

	ol += "</ol>"

	document.getElementById("paises").innerHTML = ol;
}

function mostrarInfoPaises()
{
	//console.log(paises);
	//console.log(paises[1]);
	//console.log(paises.length);
	//console.log(paises[1][6]);

	var p = "";

	for(var n=0; n < paises.length; n++)
	{
		p += "<article class='pais'>";
			p += "<div>";
				p += "<h1>"+paises[n][0]+"</h1>";
				p += "<img src='activos/"+paises[n][1]+"' />";
			p += "</div>";
			p += "<div>";
				p += "<img src='activos/"+paises[n][2]+"' />";
				p += "<img src='activos/"+paises[n][3]+"' />";
			p += "</div>";
			p += "<div>";
				p += "<p>Nombre oficial: "+paises[n][4]+"</p>";
				p += "<p>Gobierno: "+paises[n][5]+"</p>";
				p += "<p>Capital: "+paises[n][6]+"</p>";
				p += "<p>Habitantes: "+paises[n][7]+"</p>";
				p += "<p>Territorio: "+paises[n][8]+"km<sup>2</sup></p>";
			p += "</div>";
		p += "</article>";
	}

	document.getElementById("paises").innerHTML = p;


}

function cargarDocumento()
{
	//alert("cargado");
	//mostrarPaises();
	mostrarInfoPaises();
}

window.addEventListener("load",cargarDocumento)