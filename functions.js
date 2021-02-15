const database = firebase.database();
var lat = 0;
var long = 0;

// 가독성을 위해 변수.child를 이용하도록 세팅
const rootRef = database.ref('users');

database.ref('/gpsFirebase/lat').on('value', snapshot => {
  console.log(snapshot.val());
})
database.ref('/gpsFirebase/long').on('value', snapshot => {
  console.log(snapshot.val());
})
