window.onload = init;
function init() {
  var tilla = {
    // property - property value
    type: "dog",
    name: "Tilla",
    weight: 26,
    likes: ["drooling", "drinking out of toilet bowl", "eating pizza"]
  };

  var pickles = {
    type: "cat",
    name: "Pickles",
    weight: 7,
    likes: ["being stupid", "eating peanut butter"]
  };

  var div = document.getElementById("pets");
  // var pets = [tilla, pickles];

  // for (var i = 0; i < pets.length; i++){
  //   var pet = pets[i];
  //   if (pet.type == "dog") {
  //     div.innerHTML += pet.name + " says Woof! <br>";
  //   } else if (pet.type == "cat") {
  //     div.innerHTML += pet.name + " says Meow! <br>"
  //   }
  // }
  div.innerHTML = tilla.name + " enjoys ";
  for (var i = 0; i < tilla.likes.length; i++){
    div.innerHTML += tilla.likes[i];
    if (i < tilla.likes.length - 1){
      div.innerHTML += " and ";
    }
  }
  div.innerHTML += "<br><br>" + pickles.name + " enjoys ";
  for (var i = 0; i < pickles.likes.length; i++){
    div.innerHTML += pickles.likes[i];
    if (i < pickles.likes.length - 1) {
      div.innerHTML += " and ";
    }
  }

}

