window.onload = init;

function init() {
    var petsSpan = document.getElementById("pets");
    var landscapeSpan = document.getElementById("landscape");
    var oceanSpan = document.getElementById("ocean");

    petsSpan.onclick = selectPets;
    landscapeSpan.onclick = selectLandscape;
    oceanSpan.onclick = selectOcean;
}

function selectPets() {
    var ul = document.getElementById("petsList");
    ul.setAttribute("class", "show");
}

function selectLandscape() {
    var ul = document.getElementById("landscapeList");
    ul.setAttribute("class", "show");
}

function selectOcean() {
    var ul = document.getElementById("oceanList");
    ul.setAttribute("class", "show");
}
