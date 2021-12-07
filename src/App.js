import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovies = API => {
    return fetch(API)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  function handleOnSubmit(e) {
    e.preventDefault();

    if (searchValue) {
      getMovies(SEARCH_API + searchValue);
      setSearchValue("");
    }
  }

  function handleOnChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            type="search"
            className="search"
            placeholder="Search..."
            value={searchValue}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map(movie => {
            return <Movie key={movie.id} {...movie} />;
          })}
      </div>
    </>
  );
}

export default App;
