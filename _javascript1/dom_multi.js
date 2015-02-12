// Setting Up the window.onload and button.onlick Events
// You might remember from an earlier lesson when we said that you can't access values in
// the DOM—either to read or update—before the page has completely loaded. That means we can't
// call document.getElementsByTagName() until the page has loaded. So we're going to need to set
// up a function to call when the page has loaded, by setting the window.onload property, like
// we did in the previous example above.

// But we don't want to run the JavaScript code to add up the numbers when the page loads; we want
// to add them up only when you click the Add button. Just like we can delay executing code until
// after the page has loaded with the window.onload property, we can also delay executing code
// until the user clicks a button with the button.onclick property.

window.onload = init;

function init() {
  var button = document.getElementById("submit");
  button.onclick = addUp;
}

// Next, we use document.getElementsByTagName("input") to get all the elements with the tag name "input."
// This returns four input element objects in an HTML collection, as you saw earlier when you used the console.
// We store that result in the variable inputs.

// An HTMLCollection is similar to an array, and you can use a for loop to access each element in the
// collection just like you use a for loop to access each item in an array.

// Note  A collection is not equivalent to an array, so you can't do everything with the collection that
// you can with an array. But the syntax for looping through the items in the collection is exactly the same
// as for looping through an array.
function addUp() {
  var sum = 0;
  var inputs = document.getElementsByTagName("input");
  // We need one less than the list, because the button itself is an input
  for (var i = 0; i < inputs.length - 1; i++) {
    var addendString = inputs[i].value;
    var addend = parseInt(addendString);
    if (!isNaN(addend)) {
      sum += addend;
    }
  }
  var span = document.getElementById("sum");
  span.innerHTML = " " + sum;
}
