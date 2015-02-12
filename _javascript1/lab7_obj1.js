window.onload = init;

function init() {
  /* Write two lines of code here to get the
  * submit button, and assign the onclick property
  * to a function named goMad.
  */
  var button = document.getElementById("submit");
  button.onclick = goMad;
}

function goMad() {
  // retrieve elements with the tag name "input."
  var inputs = document.getElementsByTagName("input");
  // create an array to store values of HTML Collection
  var words = [];
  // iterate over html collection, retrieve values, and append to array
  for(var i = 0; i < inputs.length - 1; i++){
    words.push(inputs[i].value);
  }

  // create new string use items in word array
  var story = words[0] + "! he said " + words[1] + " as he jumped into his convertible " + words[2] + " and drove off with his " + words[3] + " wife."

  // Identify the div element to update, and update value
  var span = document.getElementById("story");
  span.innerHTML = story;
}

