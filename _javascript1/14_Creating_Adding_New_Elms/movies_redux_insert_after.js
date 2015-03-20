function Movie(title, rating, genre, description) {
  this.title = title;
  this.rating = rating;
  this.genre = genre;
  this.description = description;

  this.print = function() {
    var movieInfo = this.title + "; rated: " + this.rating + "; genre: " + this.genre +
                    "; " + this.description;
    return movieInfo;
  }
}

var movieList = [];

window.onload = init;

function init() {
  var submitButton = document.getElementById("submitButton");
  submitButton.onclick = getMovieData;
}

function getMovieData(){
  var titleInput = document.getElementById("title");
  var title = titleInput.value;

  var ratingInput = document.getElementById("rating");
  var rating = ratingInput.value;

  var genreSelect = document.getElementById("genre");
  var genreOption = genreSelect.options[genreSelect.selectedIndex];
  var genre = genreOption.value;

  var descriptionTextarea = document.getElementById("description");
  var description = descriptionTextarea.value;

  if (title == null || title == ""){
    alert("Enter a title.");
    return;
  }
  else {
    var movie = new Movie(title, rating, genre, description);
    movieList.push(movie);
    addMovieToList(movie);

    var theForm = document.getElementById("theForm");
    theForm.reset();
  }
}

function addMovieToList(movie) {
  var movieList = document.getElementById("movieList");
  //creat list item
  var li = document.createElement("li");
  // added a print() method to the Movie object. This method returns a
  // string that contains information about the movie.
  li.innerHTML = movie.print();
  movieList.appendChild(li);
}
