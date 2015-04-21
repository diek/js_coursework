function Pet(type, name, weight, likes) {
    this.type = type;
    this.name = name;
    this.weight = weight;
    this.likes = likes;
}

window.onload = init;

function init() {
    var pickles = new Pet("wolf", "mcquade", 7, ["sleeping", "howling", "eating butter"]);
    console.log(pickles);
    var picklesJSON = JSON.stringify(pickles);
    console.log(picklesJSON);

    var tilla = new Pet("dog", "Tilla", 25, ["sleeping","eating","walking"]);
    console.log(tilla);
    var tillaJSON = JSON.stringify(tilla);
    console.log(tillaJSON);
}
