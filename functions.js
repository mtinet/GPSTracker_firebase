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
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  rootRef.child(userId.value).set({
    name: name.value,
    age: age.value
  })
});

// 자동id 부여하여 업로드하기
// addBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const autoId = rootRef.push().key
//   rootRef.child(autoId).set({
//     name: name.value,
//     age: age.value
//   })
// });

// userId를 선택하여 기존 업데이트하기
updateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newData = {
    name: name.value,
    age: age.value
  };
  rootRef.child(userId.value).update(newData);
});

// 두개의 키에 같은 데이터 업데이트하기
// updateBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const newData = {
//     name: name.value,
//     age: age.value
//   };
//   const updates = {};
//   updates['/users/' + userId.value] = newData;
//   updates['/super-users/'+ userId.value] = newData;
//   database.ref().update(updates);
// });


// 데이터 삭제하기
removeBtn.addEventListener('click', e => {
  e.preventDefault();
  //간단하게 특정 키의 값 제거, 11번 줄 참고
  rootRef.child(userId.value).remove()
  .then(() => {
    window.alert('데이터베이스에서 사용자가 삭제되었습니다.');
  })
  .catch(error => {
    console.error(error);
  });
  //정확한 노드를 지정하여 키의 값 제거
  //database.ref('/super-users').child(userId.value).remove();
})

// 자식 노드가 추가될 때마다 콘솔에 표시
rootRef.on('child_added', snapshot => {
  console.log('child(s)_added!');
})

// 자식 노드가 제거될 때마다 콘솔에 표시
rootRef.on('child_removed', snapshot => {
  console.log('child(s)_removed!');
})

// 자식 노드가 업데이트될 때마다 콘솔에 표시
rootRef.on('child_changed', snapshot => {
  console.log('child(s)_changed!');
})

// 자식 노드가  변화될 때마다 콘솔에 표시
// rootRef.on('value', snapshot => {
//   console.log('데이터베이스에 이벤트가 발생했습니다.');
// })

// 자식 노드가 업데이트 되면 한 번만 콘솔에 표시
// rootRef.once('child_changed', snapshot => {
//   console.log('데이터베이스에 이벤트가 발생했습니다.');
// })

// 특정 자식 노드가 추가, 업데이트, 삭제되면 콘솔에 표시
rootRef.on('child_changed', snapshot => {
  console.log(snapshot.val());
})

// 쿼리
rootRef.orderByKey().on('value', snapshot => {
  console.log(snapshot.val());
})

// 쿼리, 키의 순서로 앞에서 2개만 불러오기
rootRef.orderByKey().limitToFirst(2).on('value', snapshot => {
  console.log(snapshot.val());
})

// 쿼리, 키의 순서로 마지막 2개만 불러오기
rootRef.orderByKey().limitToLast(2).on('value', snapshot => {
  console.log(snapshot.val());
})

// 쿼리, 자식 노드를 지정하여 정렬 후 불러오기
rootRef.orderByChild('age').limitToLast(1).on('value', snapshot => {
  console.log(snapshot.val());
})

// 쿼리, 자식 노드를 지정한 다음 지정하는 값(여기서는 'john')과 똑같은 것을 불러오기
rootRef.orderByChild('name').equalTo('john').on('value', snapshot => {
  console.log(snapshot.val());
})

// 쿼리, 자식 노드를 지정한 다음 시작값이 같은 값(여기서는 'c')과 똑같은 것을 불러오기
rootRef.orderByChild('name').startAt('c').on('value', snapshot => {
  console.log(snapshot.val());
})

// 쿼리, 값을 지정한 다음 불러오기
database.ref('/communities').orderByValue().on('value', snapshot => {
  console.log(snapshot.val());
})

// 쿼리, 값을 지정한 다음 정렬 후 앞의 두 값 불러오기
database.ref('/communities').orderByValue().limitToFirst(2).on('value', snapshot => {
  console.log(snapshot.val());
})
