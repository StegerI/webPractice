var map;
function crearMapa() {
  var ubicacion = new google.maps.LatLng(-34.9228288, -57.9562555);
  var mapOptions = {
    zoom: 15,
    center: ubicacion,
    };
  	
  	map = new google.maps.Map(document.getElementById('map'), mapOptions);
    google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });
	var marcador = new google.maps.Marker({
    position: ubicacion,
    title: '¡Aquí estamos!'    
  });
	
	marcador.setMap(map);
};
google.maps.event.addDomListener(window, 'load', crearMapa);
    

