const Header = ({ headerMovie, api, getMovies }) => {
  // Function to toggle nav
  const toggleNav = () => {
    const nav = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");
    nav.classList.toggle("open");
    hamburger.classList.toggle("open");
  };

  // Function to close nav
  const closeNav = () => {
    const nav = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");
    nav.classList.remove("open");
    hamburger.classList.remove("open");
  };

  // Function to set section title
  const setSectionTitle = (e) => {
    const sectionTitle = document.querySelector(".movie-section-title");
    sectionTitle.innerHTML = e.target.innerHTML;
  };

  // Function to call closeNav and setSectionTitle when user clicks on a nav link
  const closeNavAndSetSectionTitle = (e) => {
    closeNav();
    setSectionTitle(e);
  };

  // Function to set the color of the rating text of movies
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
    <header>
      {headerMovie.length > 0 ? (
        <>
          <div className="header flex">
            <h1 className="logo">connectMovies</h1>

            {/* Start of nav */}
            <nav>
              <button
                className="nav-buttons trending"
                onClick={(e) => {
                  getMovies(`${api.trending}`);
                  closeNavAndSetSectionTitle(e);
                }}
              >
                Trending Movies
              </button>

              <button
                className="nav-buttons recommended"
                onClick={(e) => {
                  getMovies(`${api.recommended}`);
                  closeNavAndSetSectionTitle(e);
                }}
              >
                Recommended Movies
              </button>

              <button
                className="nav-buttons popular"
                onClick={(e) => {
                  getMovies(`${api.popular}`);
                  closeNavAndSetSectionTitle(e);
                }}
              >
                Popular Movies
              </button>

              <button
                className="nav-buttons top-rated"
                onClick={(e) => {
                  getMovies(`${api.topRated}`);
                  closeNavAndSetSectionTitle(e);
                }}
              >
                Top-Rated Movies
              </button>

              <button
                className="nav-buttons now-playing"
                onClick={(e) => {
                  getMovies(`${api.nowPlaying}`);
                  closeNavAndSetSectionTitle(e);
                }}
              >
                Now Playing
              </button>
            </nav>
            {/* End of nav */}

            {/* Menu Bar */}
            <div className="hamburger" onClick={toggleNav}>
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
          </div>

          {/* Start of header movie section */}
          <section className="header-movie-info">
            <input
              type="text"
              className="search-movie-input"
              placeholder="Search Movies"
            />
            <div className="header-movie-group">
              <img
                src={api.img + headerMovie[10].poster_path}
                alt=""
                className="header-movie-img"
              />
              <div className="header-movie-details flex">
                <p className="header-movie-title">{headerMovie[10].title}</p>
                <span
                  className={`header-movie-ratings ${setRatingColor(
                    headerMovie[10].vote_average
                  )}`}
                >
                  {headerMovie[10].vote_average}
                </span>
              </div>
            </div>
          </section>
        </>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
