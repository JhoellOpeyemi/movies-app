import Movie from "./Movie";

const AllMovies = ({ movies, api }) => {
  return (
    <section className="movies-section">
      <h2 className="movie-section-title">Recommended Movies</h2>
      <p className="note">*Double click a movie to read overview*</p>

      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movies) => {
            return <Movie key={movies.id} movie={movies} {...api} />;
          })}
      </div>
    </section>
  );
};

export default AllMovies;
