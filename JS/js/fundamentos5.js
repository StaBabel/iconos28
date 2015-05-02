//http://pastebin.com/tYTsbEb2

//http://json.org/json-es.html
//DECLARACIÓN DE OBJETOS Y VARIABLES
var json = 
{
	"paises":
	[
		{
			"nombre":"México",
			"ubicacion":"u-mx.png",
			"bandera":"b-mx.png",
			"escudo":"e-mx.png",
			"oficial":"Estados Unidos Mexicanos",
			"gobierno":"República Federal Presidencial",
			"capital":"Ciudad de México D.F.",
			"habitantes":119426000,
			"territorio":1964375
		},
		{
			"nombre":"Colombia",
			"ubicacion":"u-co.png",
			"bandera":"b-co.png",
			"escudo":"e-co.png",
			"oficial":"República de Colombia",
			"gobierno":"República Presidencialista",
			"capital":"Bogotá D.C.",
			"habitantes":47662951,
			"territorio":1141748
		},
		{
			"nombre":"Perú",
			"ubicacion":"u-pe.png",
			"bandera":"b-pe.png",
			"escudo":"e-pe.png",
			"oficial":"República del Perú",
			"gobierno":"República Democrática Presidencialista",
			"capital":"Lima",
			"habitantes":30814175,
			"territorio":1285216
		},
		{
			"nombre":"España",
			"ubicacion":"u-es.png",
			"bandera":"b-es.png",
			"escudo":"e-es.png",
			"oficial":"Reino de España",
			"gobierno":"Monarquía Parlamentaria",
			"capital":"Madrid",
			"habitantes":47129783,
			"territorio":504645
		},
		{
			"nombre":"Argentina",
			"ubicacion":"u-ar.png",
			"bandera":"b-ar.png",
			"escudo":"e-ar.png",
			"oficial":"República Argentina",
			"gobierno":"República Federal Democrática",
			"capital":"Buenos Aires",
			"habitantes":42192500,
			"territorio":2780400
		}
	]
};

//DECLARACIÓN DE FUNCIONES
function mostrarInfoPaises()
{
	/*
	alert(json);
	console.log(json);
	console.log(json.length);
	console.log(json[0]);
	console.log(json["paises"]);
	console.log(json["paises"].length);
	console.log(json["paises"][0]);
	console.log(json["paises"][0].length);
	console.log(json["paises"][0].nombre);
	*/

	var  infoPais = "";

	for(var n=0; n < json["paises"].length; n++)
	{
		//console.log(json["paises"][n]);
		//console.log(json["paises"][n].nombre);
		
		infoPais += "<article class='pais'>";
			infoPais += "<div>";
				infoPais +=	"<h1>"+json["paises"][n].nombre+"</h1>";
				infoPais +=	"<img src='activos/"+json["paises"][n].ubicacion+"' />";
			infoPais +=	"</div>";
			infoPais += "<div>";
				infoPais +=	"<img src='activos/"+json["paises"][n].bandera+"' />";
				infoPais +=	"<img src='activos/"+json["paises"][n].escudo+"' />";
			infoPais +=	"</div>";
			infoPais += "<div>";
				infoPais +=	"<p>Nombre oficial: "+json["paises"][n].oficial+"</p>";
				infoPais +=	"<p>Gobierno: "+json["paises"][n].gobierno+"</p>";
				infoPais +=	"<p>Capital: "+json["paises"][n].capital+"</p>";
				infoPais +=	"<p>Habitantes: "+json["paises"][n].habitantes+"</p>";
				infoPais +=	"<p>Territorio: "+json["paises"][n].territorio+"km<sup>2</sup></p>";
			infoPais +=	"</div>";
		infoPais += "</article>";
	}

	document.getElementById("paises").innerHTML = infoPais;
}

//ASIGNACIÓN DE EVENTOS
window.addEventListener("load",mostrarInfoPaises);