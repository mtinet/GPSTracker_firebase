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


  var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
          center: new kakao.maps.LatLng(lat, long), // 지도의 중심좌표
          level: 4 // 지도의 확대 레벨
      };

  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  // 마커를 표시할 위치와 title 객체 배열입니다
  var positions = [
      {
          title: '자전거 1',
          latlng: new kakao.maps.LatLng(lat, long)
      },
      {
          title: '자전거 2',
          latlng: new kakao.maps.LatLng(37.645705917820576, 126.6649023524026)
      },
      {
          title: '자전거 3',
          latlng: new kakao.maps.LatLng(37.644705917820576, 126.6669023524026)
      }
  ];

  // 마커 이미지의 이미지 주소입니다
  var imageSrc = "./dot.png";

  for (var i = 0; i < positions.length; i ++) {

      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 24);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image : markerImage // 마커 이미지
      });
  }
}

function errData(data) {
  console.log('Error!');
  console.log(err);
}
