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

