let movies = [];

// Load JSON file
fetch('movies.json')
  .then(response => response.json())
  .then(data => {
    movies = data.movies;
  });

function pickMovie() {
  if (movies.length === 0) {
    document.getElementById('movie').innerText = "Loading movies...";
    return;
  }
  const randomIndex = Math.floor(Math.random() * movies.length);
  const selectedMovie = movies[randomIndex];
  document.getElementById('movie').innerText = selectedMovie;
}
