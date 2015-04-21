var pet = new Array();
var Pet = function(type, name, weight, likes){
  this.type = type;
  this.name = name;
  this.weight = weight;
  this.likes = likes;

  Pet.prototype.getInfo = function() {
    var likes = '';
    for (i = 0; i < this.likes.length;i++)(
      likes += ', ' + this.likes[i]
      )
    return  this.type + ', ' + this.name + ', '  + this.weight +
        ', likes: ' + likes;
  };
}

window.onload = init;

function init() {
  count = 0;
  pet[0] = new Pet("dog", "kermit",7, ["sleeping", "barking", "eating butter"]);
  pet[1] = new Pet("dog", "Tilla", 25, ["sleeping","eating","walking"]);
  // for(i = 0; i < pet.length; i++){
  // console.log(pet[0].getInfo());
  console.log(pet[0]);
  // }
  // console.log(pet[1].getInfo());
  console.log(pet[1]);
}
