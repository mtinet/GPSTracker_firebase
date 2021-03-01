# GPSTracker_firebase

## TEST폴더  
* index.html  
지도에 검색어로 위치 찾기, GPS좌표로 위치 찾기, 출발점 및 도착지 찍기  

* iframeTest.html  
iframe 테스트를 위한 html  

* marker1.html, marker2.html  
지도에 마커 하나 표시하기, 여러개 마커 표시하기  
[https://jhkang-tech.tistory.com/73](https://jhkang-tech.tistory.com/73)  

* YOUR API KEY  
your api key 라는 곳을 찾아 자신의 구글 계정을 통해 얻은 google map api key를 넣어줘야 동작함  

## usage 폴더  
* firebase.html  
데이터 입력 창 제작    

* firebase.js  
firebase 접근  

* functions.js  
javascript로 firebase를 제어하는 방법 예제  

## 파일 설명  
* google(GMP) : google map platform을 이용한 지도 표시(사용량에 따라 과금되며, 과금을 안하면 워터마크가 표시됨)  
* index : firebase에서 가져온 위치 정보를 HTML에 표시함  
* kakao : 카카오지도에 firebase에서 가져온 위치 정보를 표시함  
* kakaoAndGoogle : 카카오지도와 구글지도에 firebase에서 가져온 위치 정보를 표시함  
* kakaomap(M) : 멀티 포인트 마커를 카카오 지도에 표시함  

## firebase  
[firebase, javascript 연동 설명 영상](https://youtu.be/2CtQEXwOPXw)  

## kakao map api 사용법  
[링크](https://apis.map.kakao.com/web/sample/multipleMarkerImage/)  
