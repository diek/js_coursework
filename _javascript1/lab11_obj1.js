 window.onload = init;

 function Movie(title, year, genre, rating, showtimes) {
  this.title = title;
  this.year = year;
  this.genre = genre;
  this.rating = rating;
  this.showtimes = showtimes;

  this.updateRating = function(movieObject){

    movieObject.rating = Math.floor(Math.random() * 5) + 1;
  };

 }

 function init() {
   var movies = new Array();
   var movieInfo = "<h2>Movies & Ratings</h2>" ;

    movies[0] = new Movie("Plan 9 from Outer Space", 1959, "SciFi",1
      ,["3:00pm", "11:55pm"]);

    movies[1] = new Movie("Casablanca", 1942, "Drama", 5, ["5:00pm", "9:00pm"]);

    movies[2] = new Movie("Blazing Saddles", 1974, "Comedy", 4, ["7:00pm"]);

    movies[3] = new Movie("High Plains Drifter", 1973, "Western",5
      ,["2:00pm", "6:35pm","7:30pm", "9:45pm"]);

    movies[4] = new Movie("Girl With the Dragon Tattoo",2009 ,"Crime, Mystery",4
      ,["6:45pm","7:00pm", "9:00pm"]);

    movies[5] = new Movie("Goodfellas", 1990 ,"Biography, Crime, Drama",5
      ,["6:15pm","7:30pm", "9:30pm"]);

    // Retrieve Data from movies array
  for (i = 0; i < movies.length; i++) {
      movies[i].updateRating(movies[i]);
      movieInfo += "<h3>" + movies[i].title + " - " + movies[i].rating + "</h3>";

  }
  //get id of doc element movies.
  var div = document.getElementById("movies");
  //display text
  div.innerHTML = movieInfo;
}

