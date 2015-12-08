
//F = (C x 2) + 30
//when text is typed in first box it is immediately converted in second ox
$('.button').click(function () {
	var c = $('.celsius'), f = $('fahrenheit');

	if (c.value != '') {
		f.value = Math.round(c.value * 9/5 +32);
		c.value = '';
	} else {
		c.value = Math.round((f.value - 32) * 5/9);
		f.value = '';
	}
})

