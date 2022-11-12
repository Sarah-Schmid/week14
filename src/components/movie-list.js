import MovieCard from "./movie.js";

const remy = require("../assets/remy.jpeg");
const cinderella = require("../assets/cinderella.jpeg");
const mermaid = require("../assets/little-mermaid.jpg");

function MovieList() {
  return (
    <div id="movies">
      <MovieCard
        movieName="Ratatouille"
        movieSummary="Remy makes Ratatouille with a chef."
        image={remy}
      />
      <MovieCard
        movieName="Cinderella"
        movieSummary="Princess love story."
        image={cinderella}
      />
      <MovieCard
        movieName="Little Mermaid"
        movieSummary="Mermaid story."
        image={mermaid}
      />
    </div>
  );
}

export default MovieList;
