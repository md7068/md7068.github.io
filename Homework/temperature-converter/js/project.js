$(document).ready(function() {

	$('#clickCelsius').click( function (){
		var fInput = $('#f-input').val()
			fInput = parseFloat(fInput)
			//everyline of action put a space

		var output = parseInt((fInput-32) * 5/9)			

		$('#celsiusOutput').html(output)
		
		if (output <= 0) {
			$('body').css('background-color','blue')
		} else if (output <= 30) {
			$('body').css('background-color','magenta')
		} else {
			$('body').css('background-color','red')
		}
	})

	$('#clickFahrenheit').click( function (){
		var cInput = $('#c-Input').val()
			cInput = parseFloat(cInput)

		var output2 = parseInt((cInput+32) * 5/9)

		$('#fahrenheitOutput').html(output2)

		if (output2 <= 0) {
			$('body').css('background-color','blue')
		} else if (output2 <= 30) {
			$('body').css('background-color','magenta')
		} else {
			$('body').css('background-color','red')
		}
	})



})