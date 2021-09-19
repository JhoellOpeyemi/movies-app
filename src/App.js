import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AllMovies from "./components/AllMovies";

function App() {
  // Initialize useState
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(`${api.recommended}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Create API Object
  const api = {
    img: "https://image.tmdb.org/t/p/w1280",
    popular:
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d5caa243a1021d76eec5a5539cce2e00",
    search:
      "https://api.themoviedb.org/3/search/movie?api_key=d5caa243a1021d76eec5a5539cce2e00&query=",
    topRated:
      "https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=d5caa243a1021d76eec5a5539cce2e00",
    trending:
      "https://api.themoviedb.org/3/trending/movie/day?api_key=d5caa243a1021d76eec5a5539cce2e00",
    nowPlaying:
      "https://api.themoviedb.org/3/movie/now_playing?api_key=d5caa243a1021d76eec5a5539cce2e00",
    recommended:
      "https://api.themoviedb.org/3/discover/movie?primary_release_year=2020&api_key=d5caa243a1021d76eec5a5539cce2e00",
  };

  // Get movies data from API using fetch
  const getMovies = (movies) => {
    fetch(movies)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  };

  return (
    <div className="container">
      <Header headerMovie={movies} api={api} getMovies={getMovies} />
      <AllMovies movies={movies} getMovies={getMovies} api={api} />
    </div>
  );
}

export default App;
