const userId = document.getElementById('userId');
const name = document.getElementById('name');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');

const database = firebase.database();

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  database.ref('/users/'+userId.value).set({
    name: name.value,
    age: age.value
  })
});
