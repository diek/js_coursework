// This has three functions. The first function, init(), runs when the page finishes loading.
// We say "init() is the load event handler." Now that you know a bit more about functions,
// take another look at how we assign a function to the window.onload property. We write:

// window.onload = init;

// We don't write:

// window.onload = init();

// Why? You know the answer to this now, right? Because when we write init(), we're calling
// the function init, which we don't want to do. We want JavaScript to call it for us, after
// the load event has been triggered, which the browser does for us when it finishes loading
// the page. We use a load event handler so we can access the DOM safely—that is, only after
// the page has finished loading. If we typed window.onload = init();, then JavaScript would
// try to run the init() function as soon as it saw that line of code, which is too soon. By
// assigning window.onload to the function name, we let JavaScript run the function when the
// page is ready.

// In init(), we set up a button click handler, so the getSentence() function is called when
// you click the button. And here, we say "getSentence() is the click handler for the button."
// This works exactly like window.onload does; we want JavaScript to call the getSentence() function
// only when we click the button, which generates a click event, so we use the function name
// when we assign the click event handler to the button.

// Setting up handlers like this is something you'll do often in your JavaScript code. Many events,
// like click and load, have corresponding properties, like onclick and onload, that you can use to set them up.

window.onload = init;

function init() {
  var button = document.getElementById("submit");
  button.onclick = getSentence;
}
function getSentence(){
  // step 1, get the item, creating a var to work with
  var sentenceInput = document.getElementById("sentence");
  // step 2, get the value
  var sentence = sentenceInput.value;
  if (sentence == null || sentence == ""){
    alert("Please enter some words!")
  }
  else {
    var howManyWords = countWords(sentence);
    alert(howManyWords + " words in the sentence.")
  }
}
function countWords(sentence){
  var words = sentence.split(" ");
  var numWords = words.length;
  return numWords;
}
