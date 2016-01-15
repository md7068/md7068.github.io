$(document).ready(function(){
	var map;
	console.log("hi")

	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 40.6769, lng: 117.2319},
			zoom: 5
		});
	}

	initMap()

	var marker = new google.maps.Marker({
		position: {lat: 40.6769, lng: 117.2319},
		map: map,
		title: 'Gary'
	});

	var greatWall = new google.maps.Marker({
		position: {lat: 40.6769, lng: 117.2319},
		map: map,
		title: 'Gary'
	});
})