let todoApp = document.querySelector('.todoApp');
let todoInput = document.querySelector('.typescreen');
let todoItemsList = document.querySelector('.todoItems');
let todos = [];
todoApp.addEventListener('submit', function(event) {
  addTodo(todoInput.value);
});
function addTodo(item) {
  if (item !== '') {
    let todo = {
      id: Date.now(),
      name: item,
      completed: false
    };
    todos.push(todo);
    addToLocalStorage(todos);
    todoInput.value = '';
  }
  else{
    alert('please add task');
  }
  let myDate = new Date();
//Get only the date
console.log("date: ", myDatetoLocaleDateString());
//Obtain only the time
console.log("time: ", myDate.toLocaleTimeString());
}
function myToDo(todos) {
  todoItemsList.innerHTML = '';
  todos.forEach(function(item) {
    let checked = item.completed ? 'checked': null;
    let li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id);
    if (item.completed === true) {
      li.classList.add('checked');
    }
li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;
    todoItemsList.append(li);
  });
}
function addToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
  myToDo(todos);
}
function getFromLocalStorage() {
  const reference = localStorage.getItem('todos');
  if (reference) {
    todos = JSON.parse(reference);
    myToDo(todos);
  }
}
function toggle(id) {
  todos.forEach(function(item) {
    if (item.id == id) {
      item.completed = !item.completed;
    }
  });
addToLocalStorage(todos);
}
function deleteTodo(id) {
  todos = todos.filter(function(item) {
    return item.id != id;
  });
  addToLocalStorage(todos);
}
getFromLocalStorage();
todoItemsList.addEventListener('click', function(event) {
  if (event.target.type === 'checkbox') {
    toggle(event.target.parentElement.getAttribute('data-key'));
  }
  if (event.target.classList.contains('delete-button')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});