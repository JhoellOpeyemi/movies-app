const Movie = ({ movie, img }) => {
  const setRatingColor = (rating) => {
    if (rating >= 8) {
      return "green";
    } else if (rating >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="movie">
      <img
        src={
          movie.poster_path
            ? img + movie.poster_path
            : "https://images.unsplash.com/photo-1585951237313-1979e4df7385?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
        alt={movie.title}
        className="movie-img"
      />
      <div className="movie-details flex">
        <p className="movie-title">{movie.title}</p>
        <span className={`movie-ratings ${setRatingColor(movie.vote_average)}`}>
          {movie.vote_average}
        </span>
      </div>
      <div className="movie-overview-group">
        <h5 className="movie-overview-title">{movie.title}</h5>
        <p className="movie-overview">{movie.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
