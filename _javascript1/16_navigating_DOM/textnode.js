window.onload = init;

function init(){
  change_back();
}

// We used document.querySelectorAll("div#article p") to get the <p> elements from the
// DOM. This ensures that we don't get any text nodes; we only get element objects in
// the resulting collection, so we can safely set the background color to grey without
// getting an error message. The selector "div#article p" selects all the <p> elements
// that are children of the <div> element with the id "article."

function change_back(){
  var paras = document.querySelectorAll("div#article p");
  for (var i = 0;i < paras.length; i++){
    paras[i].style.backgroundColor ="#acacac";
  }
}
function list_childnodes(){
  var p = document.getElementById("p1");
  for (i = 0;i < p.childNodes.length;i++){
    console.log(p.childNodes[i]);
  }
}

function bad(){
  // This cannot differeniate between text, child node
  // include white space and that cannot be set.
  var div = document.getElementById("article");
  for (var i = 0; i < div.childNodes.length;i++){
    console.log(div.childNodes[i]);
    div.childNodes[i].style.backgroundColor = "#acacac"
  }
}
