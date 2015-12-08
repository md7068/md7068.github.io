$(document).ready(function() {
	var total = 0;

	$('.math div').click(function() {
		var num= $(this).text()
		num = parseInt(num)
		total = total + num
		$('#out').html(total);
		
	})
	

	$('#blue').click(changeBlue)

	function changeBlue () {
		$('#out').css('background-color','blue');
		
	}

	$('#red').click(changeRed)

	function changeRed () {
		$('#out').css('background-color','red');
	}

	$('#out').click(changeBack)

	function changeBack () {
		$('#out').css('background-color','white');
	}
})