
function initMap(x, y) {
		// objet "map" dans l'élément HTML qui a l'ID "map"
		var map = new google.maps.Map(document.getElementById("map"), {
			// centre de la carte avec les coordonnées x, y
			center: new google.maps.LatLng(x, y),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP, // carte routière.
      mapTypeControl: true,  // autoriser les déplacements sur la carte
      scrollwheel: false,
      mapTypeControlOptions: {  // style des controles (barre horizontal)
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
      },
      navigationControl: true,
					navigationControlOptions: {
						// Comment ces options doivent-elles s'afficher
						style: google.maps.NavigationControlStyle.ZOOM_PAN
					}
    });
}

window.onload = function(){
  // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
  initMap(48.852969, 2.349903);
};
