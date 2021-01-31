const userId = document.getElementById('userId');
const name = document.getElementById('name');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');

const database = firebase.database();

// 가독성을 위해 변수.child를 이용하도록 세팅
const rootRef = database.ref('users');

// 입력하는 userId에 맞게 업로드하기
// addBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   database.ref('/users/'+userId.value).set({
//     name: name.value,
//     age: age.value
//   })
// });

// 변수.child를 이용해 업로드하기
// addBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   rootRef.child(userId.value).set({
//     name: name.value,
//     age: age.value
//   })
// });

// 자동id 부여하여 업로드하기
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const autoId = rootRef.push().key
  rootRef.child(autoId).set({
    name: name.value,
    age: age.value
  })
});
