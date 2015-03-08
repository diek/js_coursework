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

  var div = document.getElementById("pets");
  var pets = [tilla, pickles];

  for (var i = 0; i < pets.length; i++){
    var pet = pets[i];
    if (pet.type == "dog") {
      div.innerHTML += pet.name + " says Woof! <br>";
    } else if (pet.type == "cat") {
      div.innerHTML += pet.name + " says Meow! <br>"
    }
  }
}

