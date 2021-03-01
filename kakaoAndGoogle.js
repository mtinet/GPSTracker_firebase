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


  // 카카오 지도, 마커 가져오기
  var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
          center: new kakao.maps.LatLng(lat, long), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
      };

  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  // 마커가 표시될 위치입니다
  var markerPosition  = new kakao.maps.LatLng(lat, long);

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
      position: markerPosition
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
  // marker.setMap(null);



  // 구글 지도, 좌표 가져오기, jquery 사용함
    var url = "https://www.google.com/maps/embed/v1/search?q=" + lat + "," + long + "&key=AIzaSyBH8zHcYDFmAuYQLXA3AwjF6KcZfJew_Fg"
    console.log(url);
    $('#googleMap').attr('src', url);
}

function errData(data) {
  console.log('Error!');
  console.log(err);
}
