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

function showHide(el){
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
