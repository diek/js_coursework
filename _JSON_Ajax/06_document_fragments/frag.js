window.onload = init;

function init(){
  var colors = ['red', 'blue', 'green'];
  var container = document.getElementById('container')
  var fragment = document.createDocumentFragment()
  for (i = 0; i < colors.length; i++){
    var box = document.createElement('div');
    box.setAttribute('class', 'box');
    box.style.backgroundColor = colors[i];
    fragment.appendChild(box);
  }
  container.appendChild(fragment);
}