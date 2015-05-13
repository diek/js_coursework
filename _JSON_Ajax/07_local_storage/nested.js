window.onload = init;

var myNumbers = {};
var colorId = 0;

function init() {
  localStorage.removeItem('testObject');
  getExistingValues()
  displayColors();
  var submitButton = document.getElementById("submit");
  submitButton.onclick = getFormData;
}

function getExistingValues() {
    if (localStorage) {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key == "testObject") {
              var retrievedObject = localStorage.getItem('testObject');
              myNumbers = JSON.parse(retrievedObject);
            }
        }
    }
    else {
        console.log("Error: you don't have localStorage!");
    }
}

function getFormData() {
  getExistingValues()
  var flag = false;
  var input = document.getElementsByTagName('input')
  for (i = 0; i < input.length; i++) {
    if (input[i].type == 'text' && input[i].value) {
      flag = true
      addDataPair(colorId, input[i].value);
      colorId++;
    }
  }
  if (flag == false){
    alert("Please enter a color");
    return;
  }
  displayColors()
  myNumbers = {};
  document.forms[0].reset();
}

function addDataPair(key, value){
  myNumbers[key] = value;
  localStorage.setItem('testObject', JSON.stringify(myNumbers));
}

function displayColors(){
  for (var key in myNumbers) {
    var value = myNumbers[key];
    var ul = document.getElementById("items");
    var li = document.createElement("li");
    li.innerHTML = value;
    ul.appendChild(li);
  }
}


