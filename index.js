

function initMap() {
  
  let latitude = +(document.getElementById("latitude").value);
  let longitude = +(document.getElementById("longitude").value);

  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: latitude,
      lng: longitude
    },
    zoom: 15,
    streetViewControls: true

  });

 new google.maps.Marker( {position: {lat: latitude, lng: longitude}, map: map, title: 'Location Center'} );

}

