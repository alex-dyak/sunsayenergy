// Initial google maps
function initMap() {
	let myLatLng = { lat: 50.44494, lng: 30.41217 },
		centerLatLng = myLatLng,
		width = $(window).width();

	if (width <= 1024 || width >= 768)
		centerLatLng = { lat: 50.44494, lng: 30.41217 };

	let image = {
		url: '../img/icon/marker.png',
		size: new google.maps.Size(48, 48),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(0, 48)
	};

	let map = new google.maps.Map(document.getElementById('map'), {
		center: centerLatLng,
		zoom: 15,
		disableDefaultUI: true,
		scrollwheel: false,
		zoomControl: false
	});

	let marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: image
	});

	marker.setMap(map);
}
