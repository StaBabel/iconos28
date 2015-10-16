var calendario = {
	test:Modernizr.inputtypes.date,
	//yep:"ruta/del/archivo",
	//yep:["archivo1","archivo2","archivon"],
	nope:[
		"//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css",
		"//code.jquery.com/ui/1.11.2/jquery-ui.js"
	],
	//both:,
	complete:function(){
		if(!Modernizr.inputtypes.date)
		{
			//alert("Tu navegador NO soporta el input date de HTML5");
			$("#cumple").datepicker({
				dateFormat:"dd/mm/yy"
			});
		}
		else
		{
			//	alert("Tu navegador SI soporta el input date de HTML5");
		}
	}
};

function enviarDatos(evento)
{
	//alert("Enviando Formulario");
	evento.preventDefault();

	var datosFormulario = $(this).serialize();

	console.log(datosFormulario);

	var opcionesDeEnvio = {
		url:"php/servidor.php",
		type:"POST",//POST o GET
		dataType:"text", /*json,xml,html,text,script*/
		data:datosFormulario,
		beforeSend:function(){
			//alert("Antes de enviar");
			$("#precarga").fadeIn("slow");
		},
		error:function(){
			//alert("Ocurrió un error");
			$("#precarga").fadeOut("slow",function(){
				$("#mensaje").fadeIn("slow").html("Ocurrió un error. No se pudo conectar con el servidor.");
			});
		},
		success:function(respuestaServidor){
			//alert("El servidor ha contestado");
			$("#precarga").fadeOut("slow",function(){
				$("#mensaje").fadeIn("slow").html(respuestaServidor);
			});
		}
	};

	$.ajax(opcionesDeEnvio);
}