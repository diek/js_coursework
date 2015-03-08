window.onload = init;

function Pet(type, name, weight, likes){
  this.type = type;
  this.name = name;
  this.weight = weight;
  this.likes = likes;
}

function init(){
  var annie = new Pet("cat", "Annie", 6, ["sleeping", "teasing pickles"]);
  var willie = new Pet("dog", "Willie", 45, ["slobbering", "panting", "eating"]);

  var div = document.getElementById("pets");
  div.innerHTML = annie.name + " is a " + annie.type + " and " + willie.name +
                " is a " + willie.type;
}
