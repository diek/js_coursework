 window.onload = init;

 function init() {
  // your code here to set up a button click handler
    var button = document.getElementById("submit");
    button.onclick = circleArea;
 }

var circleRadius = 3;
alert("Radius: " + circleRadius);

var area = circleArea();

function circleArea(){
  var circleRadius = 5;
  var area = Math.PI * Math.pow(circleRadius, 2);
  displayRadius();
  return area;
}

function displayRadius(){
  var div = document.getElementById("result");
  div.innerHTML = "Radius in the function circleArea(): "; //+ circleRadius;
}


