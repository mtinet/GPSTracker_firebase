function initMap() {
  // firebase 데이터 가져오기
  const database = firebase.database();
  var locationVal = database.ref('/gpsFirebase')
  locationVal.on('value', gotData, errData);

  function gotData(data) {
    var data = data.val();
    //var keys = Object.keys(data);

    //console.log(data);
    //console.log(keys);
    console.log(data.bicycle_1.lat);
    console.log(data.bicycle_1.long);

    var lat1 = data.bicycle_1.lat;
    var long1 = data.bicycle_1.long;


    document.getElementById("lat1").innerHTML=lat1;
    document.getElementById("long1").innerHTML=long1;

    var latlong1 = {}
    latlong1['lat'] = Number(lat1);
    latlong1['lng'] = Number(long1);

    console.log(latlong1);

    console.log(data.bicycle_2.lat);
    console.log(data.bicycle_2.long);

    var lat2 = data.bicycle_2.lat;
    var long2 = data.bicycle_2.long;


    document.getElementById("lat2").innerHTML=lat2;
    document.getElementById("long2").innerHTML=long2;

    var latlong2 = {}
    latlong2['lat'] = Number(lat2);
    latlong2['lng'] = Number(long2);

    console.log(latlong2);

    var map = new google.maps.Map(document.getElementById("map"), {
      center: latlong1,
      zoom: 14
    });

    var marker1;
    marker1 = new google.maps.Marker({
      position: latlong1,
      //icon: [URL],
      map: map
    });

    var marker2;
    marker2 = new google.maps.Marker({
      position: latlong2,
      //icon: [URL],
      map: map
    });

    var infowindow = new google.maps.InfoWindow();
    var info1 = '자전거1';
      google.maps.event.addListener(marker1, 'click', function(){
      infowindow.setContent(info1);
      infowindow.open(map, marker1);
    })

    if(marker1){
      marker1.addListener('click', function(){
        map.setCenter(this.getPosition());
        map.setZoom(17);
      })
    }

    var info2 = '자전거2';
    google.maps.event.addListener(marker2, 'click', function(){
      infowindow.setContent(info2);
      infowindow.open(map, marker2);
    })

    if(marker2){
      marker2.addListener('click', function(){
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
