$('document.ready').ready(function(){

	$('.main-article').click(function (){
		$('body').css('background-color','pink')
	})

	$('.main-article').hover(function (){
		$('img').hide()
	})
	$('#side-column').hover(function(){
		$('img').fadeIn()
	})
})