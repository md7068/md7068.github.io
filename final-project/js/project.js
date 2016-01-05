$(document).ready(function() {

	var results = ["#fancy", "#swiss"]
	
	$('#cheese').click(function(){
		$('#q1').show(500);
		
	});

	$('#b1').click(function(){
		$('#q1').hide(500, function() {
			$('#q2').show(500);
		})
		$('#cheese').hide(500)
		
	});

	$('#b2').click(function(){
		$('#q2').hide(500, function(){})
		$('#q3').show(500);
	});

	$('#b3').click(function(){
		 $('#q3').hide(500)
		 $('#q4').show(500);
	});

	$('#b4').click(function(){
	    $('#q4').hide(500)
		$('#q5').show(500);
	});
	
	$('#b5').click(function(){
		$('#q5').hide(500)
		$('#q6').show(500);
	});
	
	$('#b6').click(function(){
		$('#q6').hide(500)
		$('#q7').show(500);
	});

	$('#b7').click(function(){
		$('#q7').hide(500)
		$('#q8').show(500);
	});

	$('#b8').click(function(){
		$('#q8').hide(500)
		$('#q9').show(500)
	});
	
	$('#b9').click(function(){
		$('#q9').hide(500)
		$('#q10').show(500)
	});

	$('#b10').click(function(){
		var randomValue = results[Math.floor(results.length * Math.random())];
		$('#q10').hide(500)
		$(randomValue).fadeIn(600)
	});
	
	
});


//Trendy Fonts, Better animations between questions
//random output of pictures
//update questions to be more realistic