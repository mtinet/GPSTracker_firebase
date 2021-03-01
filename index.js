// firebase 데이터 가져오기
const database = firebase.database();
var locationVal = database.ref('/gpsFirebase/bicycle_1')
locationVal.on('value', gotData, errData);

function gotData(data) {
  var data = data.val();
  //var keys = Object.keys(data);

  //console.log(data);
  //console.log(keys);
  console.log(data.lat);
  console.log(data.long);

  // 변수에 firebase에서 가져온 값 넣기
  var lat = data.lat;
  var long = data.long;

  // HTML에 값 보여주기
  document.getElementById("lat").innerHTML=lat;
  document.getElementById("long").innerHTML=long;

}

function errData(data) {
  console.log('Error!');
  console.log(err);
}
