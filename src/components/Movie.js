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
    <div className="movie" key={movie.id}>
      <img
        src={img + movie.poster_path}
        alt={movie.title}
        className="movie-img"
      />
      <div className="movie-details flex">
        <p className="movie-title">{movie.title}</p>
        <span className={`movie-ratings ${setRatingColor(movie.vote_average)}`}>
          {movie.vote_average}
        </span>
      </div>
    </div>
  );
};

export default Movie;
