
function initMap() {
  // firebase 데이터 가져오기
  const database = firebase.database();
  var locationVal = database.ref('/gpsFirebase')
  locationVal.on('value', gotData, errData);

  function gotData(data) {
    var data = data.val();
    //var keys = Object.keys(data);

    // console.log(data.val());
    console.log(data.lat);
    console.log(data.long);

    var lat = data.lat;
    var long = data.long;


    document.getElementById("lat").innerHTML=lat;
    document.getElementById("long").innerHTML=long;

  var latlong = {}
  latlong['lat'] = Number(lat);
  latlong['lng'] = Number(long);

  console.log(latlong);

  var map = new google.maps.Map(document.getElementById("map"), {
    center: latlong,
    zoom: 17
  });

  var marker;
  marker = new google.maps.Marker({
    position: latlong,
    //icon: [URL],
    map: map
  });

  var infowindow = new google.maps.InfoWindow();
  var info = '우리집';
  google.maps.event.addListener(marker, 'click', function(){
    infowindow.setContent(info);
    infowindow.open(map, marker);
  })

  if(marker){
    marker.addListener('click', function(){
      map.setCenter(this.getPosition());
      map.setZoom(17);
    })
  }
  }

  function errData(data) {
    console.log('Error!');
    console.log(err);
  }
}
