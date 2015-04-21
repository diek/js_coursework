var springColors = [ "AF7575", "EFD8A1", "BCD693", "AFD7DB", "3D9CA8" ];
var temperatures = [ 47.5, 63.2, 56.7, 53, 51.2 ];
var pickles = {
    type: "cat",
    name: "Pickles",
    weight: 7,
    likes: ["sleeping", "purring", "eating peanut butter"]
};
window.onload = init;

function init() {
    console.log(springColors);
    console.log(temperatures);
    console.log(pickles);
}

function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < springColors.length; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 1; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      // var cellText = document.createTextNode("cell in row "+i+", column "+j);
      var cellText = document.createTextNode(springColors[i])
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}
