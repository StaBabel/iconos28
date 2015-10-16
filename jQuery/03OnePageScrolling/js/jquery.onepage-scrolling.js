(function ($){
	$.fn.extend({
		onePageScrolling : function (opcionesUsuario)
		{
			opcionesIniciales = { 
				velocidad : 1000,
				direccion : 'vertical' //'horizontal'
			}

			opc = $.extend( opcionesIniciales, opcionesUsuario )

			function inicializar()
			{
				//alert('funciona')
				function aDondeVoy(evento)
				{
					evento.preventDefault()
					
					var idEnlace = $(this).attr( 'href' ),
						posicionElemento

					if( opc.direccion == 'vertical' )
					{
						posicionElemento = $(idEnlace).offset().top
						
						$('html, body').animate( {
							scrollTop : posicionElemento
						}, opc.velocidad )
					}
					else
					{
						posicionElemento = $(idEnlace).offset().left
						
						$('html, body').animate( {
							scrollLeft : posicionElemento
						}, opc.velocidad )
					}

					console.log(
						idEnlace,
						posicionElemento,
						opc.direccion
					)

					window.location.hash = idEnlace

					return false;
				}

				function colorActual()
				{
					var borde = $(this).attr( 'data-borde' )
					$( 'header' ).css( { borderBottomColor : borde } )

					$( '.one-page' ).removeClass( 'actual' )

					if( $(this).attr( 'href' ) != '#inicio' )
					{
						$( this )
							.addClass( 'actual' )
							.css( { borderBottomColor : borde } )
					}
				}

				function scrollHorizontal()
				{
					if( opc.direccion == 'horizontal' )
					{
						var numSecciones = $('.wrapper').children().length,
							anchoWrapper = (numSecciones * 100).toString() + 'vw'
						
						console.log(
							numSecciones,
							anchoWrapper
						)	

						$('.wrapper').css({width:anchoWrapper})

						$('body')
							.removeClass('hidden')
							.css({overflowX:'hidden'})
					}
				}

				$(this)
					.on( 'click', aDondeVoy )
					.on( 'click', colorActual )
					.on( 'click', scrollHorizontal )

			}

			return $(this).each( inicializar )
		}
	})
})(jQuery)