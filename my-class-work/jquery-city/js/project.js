$(document).ready (function() {

	$('.thumb').click(function () {
		var imgSrc = $(this).attr('src')
		$('#bigimage').attr('src', imgSrc)
})

})

	