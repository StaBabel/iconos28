//Evento semantico 
//window.onload = function (){ }

/*
$(window).load(function(){
	alert('El navegador ha cargado')
})

$(document).ready(function (){
	alert('El document ha cargado')
})
*/

//Evento Multiple
//window.addEventListener('load', function(){  })
/*
$(window).on('load',function (){
	alert('El navegador ha cargado con un listener')
})

$(document).on('ready',function (){
	alert('El document ha cargado con un listener')
})
*/

function efectos()
{
	//alert('jQuery ha cargado')

	$('p').on('click', function (){
		$(this).hide()
	})

	$('#boton').on('click', function (){
		$('p').show()
	})

	$('p').css('background-color', 'yellow')

	$('#boton2').on('click', function (){
		$('p').hide(3000)
	})

	$('#boton3').on('click',function(){
		$('p').show('slow') /* slow, fast, swing */
	});

	$('#boton4').on('click',function(){
		$('p').toggle();
	});

	$('#boton5').on('click',function(){
		$('p').toggle('swing');
	});

	$('.mostrar').on('click', function (){
		$('.deslizante').slideDown()
	})

	$('.ocultar').on('click', function (){
		$('.deslizante').slideUp(4000);
	})

	$('.mostrar-ocultar').on('click', function (){
		$('.deslizante').slideToggle('fast')
	})

	$('#boton6').on('click', function (){
		$('#cuadro').fadeTo('fast', .25)
	})

	$('#boton7').on('click', function (){
		$('#cuadro').fadeTo(3000, 1)
	});

	$('#boton8').on('click', function (){
		$('#cuadro').fadeOut();
	});

	$('#boton9').on('click', function (){
		$('#cuadro').fadeIn(4000);
	});

	$('#parpadea').on('click', function (){
		$('#cuadro').fadeOut().fadeIn()
	})

	$('#boton10').on('click', function (){
		$('#animable')
			.animate({height:300}, 'slow')
			.animate({width:300}, 1500)
			.animate({height:100, width:100}, 3000)
	})

	$('#boton11').on('click', function (){
		$('#animable')
			.animate({left:'50%'}, 'swing')
			.animate({width:'300px'}, 1500)
			.animate({'font-size':'3em'}, 2000)
			.animate({fontSize:'2em'}, 3000)
			//http://plugins.jquery.com/color/
			.animate({backgroundColor:'#1C5F81'}, 'fast')
			.animate({color:'white'}, 'slow')
			.animate({top:-100}, 'swing')
			.animate({
				'font-size':'1em',
				left:0,
				top:0,
				width:100
			},5000)
	})

	$('#boton12').on('click', function (){
		/*
		$('#oculto').hide(2000)
		alert('El párrafo se ha ocultado')
		*/

		//función callback
		$('#oculto').hide(2000, function (){
			alert('El párrafo se ha ocultado')
		})
	})

	/*
	antes .before()
	<selector>
		antes .prepend()
		CONTENIDO .html()
		después .append()
	</selector>
	después .after()
	*/

	$('#boton13').on('click', function (){
		$('p').html('<i>El contenido ha sido cambiado</i>')
	})

	$('#boton14').on('click', function (){
		$('p').prepend('<b>contenido agregado antes</b><img src="http://cursos.bextlan.com/img/jquery.png">')
	})

	$('#boton15').on('click', function (){
		$('p').append(' <b>contenido agregado después</b><input type="text">')
	})

	$('#boton16').on('click', function (){
		$('p').before('<div class="antes">Contenido agregado antes del selector</div>')
		$('.antes').css('background-color','magenta')
	})

	$('#boton17').on('click', function (){
		$('p').after('<div class="despues">Contenido agregado después del selector</div>')
		$('.despues').css('background-color','cyan')
	})

	$('#boton18').on('click', function (){
		$('p')
			.css('font-size','2em')
			.css({backgroundColor:'skyblue'})
	})

	$('#boton19').on('click', function (){
		$('p').css({
			'background-color':'#EEE',
			border:'thick solid #EC673A',
			borderRadius:'1em',
			fontSize:'2em',
			padding:'1em',
			'text-shadow':'5px 5px 10px #000'
		})
	})

	$('#enlace').on({
		click:function(evento) {
			evento.preventDefault()
			alert('he prevenido la acción del enlace')
		},
		mouseover:function (){
			$('span').addClass('span-css')
		},
		mouseout:function (){
			$('span').removeClass('span-css')
		}
	});

	$('#boton20').on('click',function (){
		//$('#ajax').load('otro.html')
		$('#ajax').load('otro.html #logo')
	})

	$('#boton21').on('click',function (){
		$('#ajax').load('otro.html',function (){
			$(this)
				.css({display:'none'})
				.fadeIn(2000)
		})
	})

	$('#que-tecla').on('keyup', function (evento){
		$('#codigo-tecla').text(evento.keyCode)
	})

	$('#subir').on('click', function(){
		$('html, body').animate({
			scrollTop:0,
			scrollLeft:0
		},1000)
	})
}

function muevete(evento)
{
	//console.log(evento)
	//alert(evento.keyCode)

	switch(evento.keyCode)
	{
		case 37:
			evento.preventDefault()
			$('#pacman').animate({left:'-=2em'}, 'swing')
			break;

		case 38:
			evento.preventDefault()
			$('#pacman').animate({top:'-=2em'},'swing');
			break;

		case 39:
			evento.preventDefault()
			$('#pacman').animate({left:'+=2em'}, 'swing')
			break;

		case 40:
			evento.preventDefault()
			$('#pacman').animate({top:'+=2em'},'swing');
			break;
	}
}

function detectarScroll()
{
	var scrollVertical = $(window).scrollTop(),
		scrollHorizontal = $(window).scrollLeft()

	//console.log(scrollHorizontal, scrollVertical)

	return ( scrollVertical>100 ) ? $('#subir').fadeIn() : $('#subir').fadeOut()
}

function responsiveDesign()
{
	var anchoPantalla = $(window).width(),
		altoPantalla = $(window).height()

	console.log(anchoPantalla, altoPantalla)

	if( anchoPantalla <= 480 )
	{
		$('.item')
			.removeClass('dos-columnas')
			.removeClass('tres-columnas')
			.removeClass('cuatro-columnas')
	}
	else if( anchoPantalla <= 768 )
	{
		$('.item')
			.addClass('dos-columnas')
			.removeClass('tres-columnas')
			.removeClass('cuatro-columnas')
	}
	else if( anchoPantalla <= 1024 )
	{
		$('.item')
			.removeClass('dos-columnas')
			.addClass('tres-columnas')
			.removeClass('cuatro-columnas')
	}
	else
	{
		$('.item')
			.removeClass('dos-columnas')
			.removeClass('tres-columnas')
			.addClass('cuatro-columnas')
	}
}

$(document)
	.on('ready', efectos)
	.on('keydown', muevete)

$(window)
	.on('scroll', detectarScroll)
	.on('resize load', responsiveDesign)