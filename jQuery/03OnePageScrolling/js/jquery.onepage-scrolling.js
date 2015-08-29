(function ($){
	$.fn.extend({
		onePageScrolling : function (opcionesUsuario)
		{
			opcionesIniciales = { velocidad : 1000 }

			opc = $.extend( opcionesIniciales, opcionesUsuario )

			function inicializar()
			{
				//alert('funciona')
				function aDondeVoy(evento)
				{
					//evento.preventDefault()

					var idEnlace = $(this).attr( 'href' ),
						posicionElemento = $(idEnlace).offset().top

					console.log(
						idEnlace,
						posicionElemento
					)

					$('html, body').animate( {
						scrollTop : posicionElemento
					}, opc.velocidad )

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

				$(this)
					.on( 'click', aDondeVoy )
					.on( 'click', colorActual )
			}

			return $(this).each( inicializar )
		}
	})
})(jQuery)