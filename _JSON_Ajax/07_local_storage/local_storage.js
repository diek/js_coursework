window.onload = init;
var prefs = [  ['favGenre', 'Fiction'],['favFlavor', 'Vanilla'],
['book', 'Head First HTML5 Programming'], ['browserWidth', 1280]];

function init(){
  //demo number stored as string
  //addItem('favTea', 'English Breakfast')
  // getItem('browserWidth');
  addData();

  // Remove one item
  removeItem();

  // Remove all items
  //clearAllItems();
  displayLocalStorage();
}

function addData(){
  prefs.forEach(function(item) {
    addItem(item[0],item[1]);
  });
}

function removeItem(){
  localStorage.removeItem('favTea')
}

function clearAllItems(){
  localStorage.clear();
}

function addItem(key, value){
  localStorage.setItem(key, value);
  // addToList(key, value);
}

function getItem(key){
  var value = localStorage.getItem(key);
  //alert('Item: ' + key + ': ' + value);
  alert("Item: " + key + ": " + value + " (" + (typeof value) + ")");
}

function addToList(key, value) {
    var ul = document.getElementById("items");
    var li = document.createElement("li");
    li.innerHTML = "Key: " + key + ", value: " + value;
    ul.appendChild(li);
}

function displayLocalStorage(){
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    addToList(key, value);
  }
}



