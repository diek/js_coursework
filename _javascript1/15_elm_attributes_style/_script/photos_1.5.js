window.onload = init;

function init() {
    var petsSpan = document.getElementById("pets");
    var landscapeSpan = document.getElementById("landscape");
    var oceanSpan = document.getElementById("ocean");

    petsSpan.onclick = selectPets;
    landscapeSpan.onclick = selectLandscape;
    oceanSpan.onclick = selectOcean;
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
// First, we get the current value of the class attribute using the getAttribute() method.
// Again, this is an element object method; so we call it on the element whose attribute
// we want to get—if you click on Pets, that element is "petsList" <ul>. The first time you
// click on Pets, the "petsList" <ul> has no class at all, so the ulClass variable will be "".
// We check to see if the ulClass variable contains the "show" string, which it doesn't this
// time, so we do what we were doing before: we set the class attribute of the "petsList" <ul>
// to "show." However, if you click Pets again when the class attribute is already set to "show",
// we want to remove the class, so the drop-down menu will disappear. To do this, we can use
// setAttribute() again, and set the value of the class attribute to "". As soon as this code
// runs, the "visibility" is again set to "hidden" and the drop-down menu disappears!


function showHide(el){
    // hide everything except what we clicked on
    var selectedItems = document.querySelectorAll(".show");
    for (var i = 0; i < selectedItems.length;i++){
        if (selectedItems[i] != el){
            selectedItems[i].setAttribute("class", "");
        }
    }
    var ulClass = el.getAttribute("class");
    if (ulClass == "show"){
        // item is selected, so de-select
        el.setAttribute("class", "");
    }
    else {
        // item is not selected, so select it
        el.setAttribute("class", "show");
    }
}
