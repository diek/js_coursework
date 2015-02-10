window.onload = init;

function init() {
  var p = document.getElementById("answer");
  var answer = prompt("Enter your answer to life, the universe and everything: ");
  p.innerHTML = answer;
}
