function efectos()
{
	$('#jqy').on('click', function (evento){
		evento.preventDefault()
		$('#contenido').load('html/jquery.html')
	})

	$('#jqi').on('click', function (evento){
		evento.preventDefault()
		$('#contenido').load('html/jquery-ui.html', function (){
			$(this)
				.css({display:'none'})
				.fadeIn(2000)
		})	
	})

	$('#jqm').on('click', function (evento){
		evento.preventDefault()
		$('#contenido').fadeOut(2000, function (){
			$(this).load('html/jquery-mobile.html', function (){
				$(this).fadeIn(2000)
			})
		})
	})

	$('#jqu').on('click', function (evento){
		evento.preventDefault()
		$('#contenido').slideUp(2000, function (){
			$(this).load('html/qunit.html', function (){
				$(this).slideDown(2000)
			})
		})
	})

	$('#jqs').on('click', function (evento){
		evento.preventDefault()
		$('#contenido').hide(2000, function (){
			$(this).load('html/sizzle.html', function (){
				$(this).show(2000)
			})
		})
	})

	//$('nav a').on('click', function (){
	$('nav').find('a').on('click', function (){
		$('nav')
			.find('a')
			.removeClass('actual')
		$(this).addClass('actual')
	})
}