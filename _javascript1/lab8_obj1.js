
 window.onload = init;

 function init() {
  // your code here to set up a button click handler
  // button clicked, call pythagoras()
    var button = document.getElementById("submit");
    button.onclick = pythagoras;
 }

 // Computes the length of side c of a triangle, given
 // lengths of side a and b, using the Pythagorean Theorem
 // a^2 + b^2 = c^2
 function pythagoras() {
  // your code here to get the values of sides a and b
    var flagA = false;
    var flagB = false;
    var sideA = document.getElementById("a");
    var sideB = document.getElementById("b");
    // Validate a side
    var a = sideA.value;
    if (a == null || a == ""){
      alert("Validate a - Invalid data. Math needs you to enter data.")
    }
    else {
      // convert to num & set valid to true
      a = parseFloat(a);
      flagA = true;
    }
    // Validate b side
    var b = sideB.value;
    if (b == null || b == ""){
      alert("Validate b - Invalid data. Math needs you to enter data.");
    }
    else {
        // convert to num & set valid to true
        var b = parseFloat(b);
        flagA = true;
    }

    // your code here to compute the value of side c
    // Calculation will only work if data correct entered.
    if (flagA == true && flagA == true ){
      var cSquared = Math.pow(a,2) + Math.pow(b,2);
      var c = Math.sqrt(cSquared);
      //call the function displayResult
      displayResult(a, b, c);
    }
    else {
      var noData = "insufficient data"
      displayResult(noData, noData, noData)
    }
 }

 function displayResult(a, b, c) {
  var div = document.getElementById("result");
  div.innerHTML = "Triangle: a = " + a + ", b = " + b + ", c = " + c;
 }
