window.onload = init;

function init(){
  var petsSpan = document.getElementById("pets");
  var landscapeSpan = document.getElementById("landscape");
  var oceanSpan = document.getElementById("ocean");

  petsSpan.onclick = selectPets;
  landscapeSpan.onclick = selectLandscape;
  oceanSpan.onclick = selectOcean;

  var links = document.querySelectorAll("a");
  for (var i = 0; i < links.length; i++){
    links[i].onclick = addImage;
  }
}

function selectPets(){
  var ul = document.getElementById("petsList");
  showHide(ul);
}

function selectLandscape(){
  var ul = document.getElementById("landscapeList");
  showHide(ul);
}

function selectOcean(){
  var ul = document.getElementById("oceanList");
  showHide(ul);
}

function showHide(el){
  // deselect everything
  var selectedItems = document.querySelectorAll(".show");
  for (var i = 0; i < selectedItems.length; i++) {
    if (selectedItems[i] != el){
      selectedItems[i].setAttribute("class", "");
    }
  }

  var ulClass = el.getAttribute("class");
  if (ulClass == "show"){
    // item is selected, so deselect it
    el.setAttribute("class", "");
  }
  else{
    //item not selected, select it
    el.setAttribute("class", "show");
  }
}

function addImage(e) {
    // we'll fill this in in the next step.
    var a = e.target;
    var imagePath = a.getAttribute("href");

    var image = document.createElement("img");
    image.setAttribute("src", imagePath);

    var div = document.getElementById("image");

    // OPTION 1 - BEST APPROACH
    // Remove any existing images/children
    if (div.firstChild){
      div.removeChild(div.firstChild);
    }

    // OPTION 2
    // You can find the parent element of any element using
    // the parentElement property.
    // var oldImage = document.querySelector("img")
    // if (oldImage){
    //   var oldImageParent = oldImage.parentElement;
    //   oldImageParent.removeChild(oldImage);
    // }

    // add image to the div
    div.appendChild(image);
    //This is critical, without it the browser will open the link to the image.
    return false;
}
