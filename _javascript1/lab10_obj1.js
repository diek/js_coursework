// Write a program that creates an array of Movie objects, and
// then displays the movie information in a web page.
window.onload = init;

function init(){
  // create required variables
  var movieInfo = "<h2>Movies & Times</h2>" ;
  var movies = [
    {
    "title": "High Plains Drifter",
    "year": 1973,
    "genre": "Western",
    "rating": 5,
    "showtimes":["2:00pm", "6:35pm","7:30pm", "9:45pm"]
    }, {
    "title": "Girl With the Dragon Tattoo",
    "year": 2009,
    "genre": "Crime, Drama, Mystery",
    "rating": 4,
    "showtimes": ["5:00pm", "6:45pm","7:00pm", "9:00pm"]
    }, {
    "title": "Goodfellas",
    "year": 1990,
    "genre": "Biography, Crime, Drama",
    "rating": 5,
    "showtimes": ["5:00pm", "6:15pm","7:30pm", "9:30pm"]
    }
  ];

  // Retrieve Data from movies array
  for (i = 0; i < movies.length; i++) {
      // iterate over single data from array
      movieInfo += "<h3>" + movies[i].title + " (" + movies[i].year + ")" + "</h3>";
      // iterate over showtimes array for each movie
      for (j = 0; j < movies[i].showtimes.length; j++){
        movieInfo += "Time " + (j + 1) + ":  " + movies[i].showtimes[j] + "<br>";
      }
      // complete the building of the string for display.
      movieInfo += "<br>";
  }
  //get id of doc element movies.
  var div = document.getElementById("movies");
  //display text
  div.innerHTML = movieInfo;
}
