window.onload = init;
function init() {
  var tilla = {
    // property - property value
    type: "dog",
    name: "Tilla",
    weight: 26
  };

  var pickles = {
    type: "cat",
    name: "Pickles",
    weight: 7
  };

  var div = document.getElementById("pet1");
  div.innerHTML =
    "My " + tilla.type + " is named " + tilla.name +
    " and she weighs " + tilla.weight + " pounds.";

  var div = document.getElementById("pet2");
  div.innerHTML =
    "My " + pickles.type + " is named " + pickles.name +
    " and she weighs " + pickles.weight + " pounds.";
}

