$(document).ready(function() {

	var results = ["#fancy", "#block", "#rooster", "#tumnus", "#snippets", "#platter", 
	"#swiss", "#gharial", "#cheddar", "#bridges","#Matt", "#mozz", "#floats", "#c"]

	$('#cheese').click(function(){
		$('.question').hide()
		$('.result').hide()
			$('#q1').fadeIn(500);
	});

	$('a href').hide()

	$('#b1').click(function(){
		$('#q1').fadeOut(500, function() {
			$('#q2').fadeIn(500);
		})
	});

	$('#b2').click(function(){
		$('#q2').fadeOut(500, function(){
			$('#q3').fadeIn(500);	
		})
	});

	$('#b3').click(function(){
		 $('#q3').fadeOut(500, function() {
		 	$('#q4').fadeIn(500);
		 }) 
	});

	$('#b4').click(function(){
	    $('#q4').fadeOut(500, function(){
	    	$('#q5').fadeIn(500);	
	    })
	
	});
	
	$('#b5').click(function(){
		$('#q5').fadeOut(500, function(){
			$('#q6').fadeIn(500);
		})
	});

	$('#b6').click(function(){
		$('#q6').fadeOut(500, function(){
			$('#q7').fadeIn(500);
		})
	
	});

	$('#b7').click(function(){
		$('#q7').fadeOut(500, function(){
			$('#q8').fadeIn(500);
		})
		
	});

	$('#b8').click(function(){
		$('#q8').fadeOut(500, function(){
			$('#q9').fadeIn(500)
		})
	});
	
	$('#b9').click(function(){
		$('#q9').fadeOut(500, function(){
			$('#q10').fadeIn(500)
		})
	});

	$('#b10').click(function(){
		var randomValue = results[Math.floor(results.length * Math.random())];
		$('#q10').hide()
		$(randomValue).fadeIn(500)
	});

	$('.restart').click(function(){
		$('textarea').val("");
		  $('.result').hide();
		$   ('#q1').fadeIn(500);
	});

	$('#text1').keypress(function(event) {
		if (event.keyCode == 13) {
			$('#q1').fadeOut(500, function() {
				$('#q2').fadeIn(500);
			})
		}
	});

	$('#text2').keypress(function(event) {
		if (event.keyCode == 13) {
			$('#q2').fadeOut(500, function() {
				$('#q3').fadeIn(500);
			})
		}
	});

	$('#text3').keypress(function(event) {
		if (event.keyCode == 13) {
			$('#q3').fadeOut(500, function() {
				$('#q4').fadeIn(500);
			})
		}
	});

	$('#text4').keypress(function(event) {
		if (event.keyCode == 13) {
			$('#q4').fadeOut(500, function() {
				$('#q5').fadeIn(500);
			})
		}
	});

	$('#text5').keypress(function(event) {
		if (event.keyCode == 13) {
			$('#q5').fadeOut(500, function() {
				$('#q6').fadeIn(500);
			})
		}
	});

	$('#text6').keypress(function(event) {
		if (event.keyCode == 13) {
			$('#q6').fadeOut(500, function() {
				$('#q7').fadeIn(500);
			})
		}
	});

	$('#text7').keypress(function(event) {
		if (event.keyCode == 13) {
			$('#q7').fadeOut(500, function() {
				$('#q8').fadeIn(500);
			})
		}
	});

	$('#text8').keypress(function(event) {
		if (event.keyCode == 13) {
			$('#q8').fadeOut(500, function() {
				$('#q9').fadeIn(500);
			})
		}
	});

	$('#text9').keypress(function(event) {
		if (event.keyCode == 13) {
			$('#q9').fadeOut(500, function() {
				$('#q10').fadeIn(500);
			})
		}
	});

	$('#text10').keypress(function(event) {
		if (event.keyCode == 13) {
			$('#q10').fadeOut(500, function() {
		var randomValue = results[Math.floor(results.length * Math.random())];
		$('#q10').hide()
		$(randomValue).fadeIn(500);			
	});
		}
	});

	$('.restart').click(function(){
		$('textarea').val("");
			$('.result').hide();
				$('#q1').fadeIn(500);
	});

})
