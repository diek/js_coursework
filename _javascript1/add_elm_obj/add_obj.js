window.onload = init;
var todo_item = [];
idNum = 0;

function init() {
  var submitButton = document.getElementById("submitButton");
  submitButton.onclick = getData;
}

function listItem(id, todo) {
  this.id = id;
  this.todo = todo;

  this.add_Li = function(){
    var ul = document.getElementById("listItem");
    var li = document.createElement("li");
    li.innerHTML = this.todo;
    li.onclick = this.removeLi;
    ul.appendChild(li);
    li.setAttribute("id", this.id);
  };

  this.removeLi = function(e){
    var li = e.target;
    if (li) {
      var ul = li.parentElement;
      ul.removeChild(li);
    }
  };
}

function getData(){
  var inputText = document.getElementById("item");
  var item = inputText.value;
  if (validData(item)){
    addToList(item)
  }
  else {
    alert("Textbox was empty.")
  }

  var adderForm = document.getElementById("formAddItem");
  adderForm.reset();
}

function addToList(itemToDo) {
  var i = 0;
  if (todo_item.length > 0){
    i = todo_item.length;
  }
  todo_item[i] = new listItem(createId(), itemToDo);
  todo_item[i].add_Li();
}

function validData(check){
  if (check) {
    if (check.trim().length > 0)
      return true;
  }
  else {
    return false;
  }
}

function createId(){
  idNum++;
  return "id_" + idNum;
}
