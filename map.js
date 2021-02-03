// firebase 데이터 가져오기
const database = firebase.database();
var lat = 0;
var long = 0;

// 가독성을 위해 변수.child를 이용하도록 세팅
const rootRef = database.ref('users');

database.ref('/gpsFirebase/lat').on('value', function(snapshot) {
  console.log(snapshot.val());
})

database.ref('/gpsFirebase/long').on('value', snapshot => {
  console.log(snapshot.val());
})


// 지도, 마커 가져오기
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.50701, 127.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다
var markerPosition  = new kakao.maps.LatLng(37.50701, 127.570667);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);
