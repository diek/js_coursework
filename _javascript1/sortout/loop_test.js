// assign required variables
var width = 10;
var height = 10;
var color = "blue";
var i = 0;

for (i < 10) {
    // make appropriate calculations to height and width
    width += 10;
    height += 15;
    // change color to red
    if (i >= 5) {
        color = "red";
    }
    // increment iterator
    i++;
}
console.log(color);
