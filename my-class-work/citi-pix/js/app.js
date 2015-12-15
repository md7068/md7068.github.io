// User flow:
// 1: User changes <select id="city-type">
// 2: The page's background changes to a picture of the newly selected city

// Instructions:
// 1. Attach a change event to #city-type;
// 2. Associate the above change event with an anonymous function
// 3. Inside said anonymous function, do the following:
// 4. Create a variable, city, that stores the selected value of #city-type
// 5. Remove all classes from the <body> element using the .removeClass() method
// 6. The variable you created in step 4, corresponds to a CSS class (check in the sytle.css file for more info)
//    Use the .addClass() method to add this variable as a class to <body>

// Bonus 1: Apply the concept of $(this)
// Bonus 2: Instead of using .removeClass and .addClass, use only .toggleClass on <body>
//          Hint: you may have to use the .attr() method to grab the current class on <body>



$(document).ready(function() {
//loads the page	
	//when city type selectors are clicked the change function is activated
	$('#city-type').change(function (){
	// creating a variable of city that contains the value of city type-and its css	
		var city = $('#city-type').val()
	// I am selecting the body and removing the class-removing what is inside	
		$('body').removeClass()
	// I am replacing what I removed with the variable of city which contains the value of the selected	
		$('body').addClass(city)
	})

});
