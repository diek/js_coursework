window.onload = init;

function init(){
  alert("hey 1");
  window.alert("hey 1");

  console.log("Yo Yo Ma");
  window.console.log("Yo Yo Ma");

  var p = window.document.getElementById("theP");
  window.console.log(p.innerHTML);
}
