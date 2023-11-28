if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const coords ={
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            console.log(coords);
    }, () => {
        alert("a ocurrido un error");
    }
    );
}else{
    alert("tu navegador no dipone de la geolocalizacion, actualizar por favor");
}



async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  
}

initMap();