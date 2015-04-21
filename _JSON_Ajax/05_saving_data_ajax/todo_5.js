function Todo(task, who, dueDate) {
  this.task = task;
  this.who = who;
  this.dueDate = dueDate;
  this.done = false;
}

var todos = new Array();

window.onload = init;

function init() {
  var submitButton = document.getElementById("submit");
  submitButton.onclick = getFormData
  getToDoData();
}

function getToDoData() {
  var request = new XMLHttpRequest();
  request.open('GET','todo_5.json');
  request.onreadystatechange = function(){

    if (this.readyState == this.DONE && this.status == 200){
      if (this.responseText){
        // Parse Data, then display it
        parseTodoItems(this.responseText);
        addTodosToPage();
      }
      else{
        console.log("Error: Data is empty");
      }
    }
  };
  request.send();
}

function parseTodoItems(todoJSON){
  if (todoJSON.length == null || todoJSON.trim() == ''){
    return;
  }
  var todoArray = JSON.parse(todoJSON);
  if (todoArray.length == 0){
    console.log("Error: the to-do list array is empty!");
    return;
  }
  for (var i = 0; i < todoArray.length; i++){
    todos.push(todoArray[i]);
  }
}

function addTodosToPage(){
  var ul = document.getElementById('todoList');
  for (var i = 0; i < todos.length; i++){
    var todoItem = todos[i];
    var li = document.createElement('li');
    li.innerHTML =
      todoItem.who + ' needs to ' + todoItem.task + ' by ' + todoItem.dueDate + '<br>';
    ul.appendChild(li)
  }
}

function getFormData(){
  var task = document.getElementById('task').value;
  if (checkInputText(task, 'Please enter a task')) return;

  var who = document.getElementById('who').value;
  if (checkInputText(who, 'Please enter a person to complete the task')) return;

  var date = document.getElementById('dueDate').value;
  if (checkInputText(date, 'Please enter a due date.')) return;

  console.log("New task: " + task + ", for: " + who + ", by: " + date);
  var todoItem = new Todo(task, who, date);
  todos.push(todoItem);
  addTodoToPage(todoItem);
  saveTodoData()
}

function checkInputText(value, msg){
  if (value == null || value == '') {
    alert(msg);
    return true;
  }
  return false;
}

function addTodoToPage(todoItem){
  var ul = document.getElementById('todoList');
  var li = document.createElement('li');
  li.innerHTML =
    todoItem.who + ' needs to ' + todoItem.task + ' by ' + todoItem.dueDate;
  ul.appendChild(li);
  document.forms[0].reset();
}

function saveTodoData(){
  var todoJSON = JSON.stringify(todos);
  var request = new XMLHttpRequest();
  var URL = 'todo_5.php?data=' + encodeURI(todoJSON);
  request.open('GET', URL);
  request.setRequestHeader('Content-Type',
                            'text/plain;charset=UTF-8');
  request.send();
}
