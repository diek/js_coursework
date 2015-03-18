window.onload = init;

function init() {
  var submitButton = document.getElementById("submitButton");
  submitButton.onclick = getData;
}

function getData() {
  var theForm = document.forms.theForm;
  // The form itself is an element object. One of its properties is another collection object,
  // the elements collection. This is an object that contains all the elements contained in the form.
  // It is similar to the forms collection we just looked at.
  var color = theForm.elements.color.value;
  var aboutme = theForm.elements.aboutme.value;
  var birthday = theForm.elements.dob.value;

  var results = document.getElementById("results");
  results.innerHTML = "Favorite color: " + color + "<br>";
  results.innerHTML += "About Me: " + aboutme + "<br>";
  results.innerHTML += "Birthday: " + birthday + "<br>";

  // create array
  var personalityData = theForm.elements.personality;
  for (var i = 0; i < personalityData.length; i++){
    if (personalityData[i].checked){
      results.innerHTML += "Personality item: " + personalityData[i].value + "<br>";
    }
  }
  // Earlier, we said that we used a button control in the form, rather than a submit control,
  // so we could process the form before submitting the form to a server-side script. And in fact,
  // in this example, we don't submit the form at all. However, there may be times when you want to
  // validate form data, and then submit a form to a server-side script.

  // If you want to be able to submit a form once you've used JavaScript to validate or process the
  // data in the form, you'd only need to make a few changes to your code
  theForm.submit();
  return false;
}
