window.onload = init;

function init() {
  // creates an object named myData.
  var myData = {
    name: "Natasha",
    age: 41,
    favColor: "blue"
  };

  //converts that object to JSON (a string) using the JSON object's stringify() method.
  var myDataJson = JSON.stringify(myData);

  // stores the JSON version of the object in Local Storage, with the key "Natasha",
  // using the localStorage object's setItem() method.
  localStorage.setItem('Natasha', myDataJson);

  // retrieves a JSON string from Local Storage using the same key, "trish," using the
  // localStorage object's getItem() method, and saving it in a new variable, newDataJSON.
  var newDataJSON = localStorage.getItem('Natasha');

  // creates newDataObj from that JSON string using the JSON object's parse() method.
  var newDataObj = JSON.parse(newDataJSON);

  // displays the values in newMyObject using dot notation, and alerts the values
  // so you can see them (newMyObject has exactly the same structure as
  // our original myObject, so we can do this).
  alert(newDataObj.name + ' is ' + newDataObj.age +
    ' her favorite color is ' + newDataObj.favColor)
}
