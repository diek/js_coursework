window.onload = init;

function Pet(type, name, weight, likes, sound){
  this.type = type;
  this.name = name;
  this.weight = weight;
  this.likes = likes;
  this.sound = sound;

  this.speak = function(howMany){
    var says = "";
    for (var i = 0; i < howMany; i++){
      says += this.sound + " ";
    }
    return says;
  };
}

function init(){
  var willie = new Pet("dog", "Willie", 45, ["slobbering", "panting", "eating"], "Woof!");

  var div = document.getElementById("pets");
  div.innerHTML = willie.name + " says " + willie.speak(3);
}
