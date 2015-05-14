window.onload = init;

var myNumbers = {};
var colorId = 1;

function init() {
  // localStorage.removeItem('colorChoices');
  getExistingValues();
  var submitButton = document.getElementById("submit");
  submitButton.onclick = getFormData;
}

function getExistingValues() {
    if (localStorage) {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key == "colorChoices") {
              var retrievedObject = localStorage.getItem('colorChoices');
              myNumbers = JSON.parse(retrievedObject);
              for (var key in myNumbers) {
                color = myNumbers[key];
                displayColors(color);
                colorId++;
              }
            }
        }
    }
    else {
      console.log("Error: you don't have localStorage!");
    }
}

function getFormData() {
  var flag = false;
  var input = document.getElementsByTagName('input')
  for (i = 0; i < input.length; i++) {
    if (input[i].type == 'text' && input[i].value) {
      flag = true
      addDataPair(colorId, input[i].value);
      displayColors(input[i].value)
      colorId++;
    }
  }
  if (flag == false){
    alert("Please enter a color");
    return;
  }
  document.forms[0].reset();
}

function addDataPair(key, value){
  myNumbers[key] = value;
  localStorage.setItem('colorChoices', JSON.stringify(myNumbers));
}

function displayColors(color){
    var ul = document.getElementById("items");
    var li = document.createElement("li");
    li.innerHTML = color;
    ul.appendChild(li);
}
