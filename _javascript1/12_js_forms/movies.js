function Movie(title, rating, genre, description){
  this.title = title;
  this.rating = rating;
  this.genre = genre;
  this.description = description;
}

var movieList = [];

window.onload = init;

function init(){
  var submitButton = document.getElementById("submitButton");
  submitButton.onclick = getMovieData;
}

function getMovieData(){
  var titleInput = document.getElementById("title");
  var title = titleInput.value;

  var ratingInput = document.getElementById("rating");
  var rating = parseInt(ratingInput.value);

  var genreSelect = document.getElementById("genre");
  var genreOption = genreSelect.options[genreSelect.selectedIndex];
  var genre = genreOption.value;

  if (title == null || title == ""){
    alert("Please enter a movie title");
    return;
  }
  else {
    var movie = new Movie(title, rating, genre, description);
    movieList.push(movie);
    var movie = document.getElementById("movies");
    movies.innerHTML = "Added " + movie.title + " to the list.";

    var theForm = document.getElementById("theForm");
    theForm.reset();
  }
}
