import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch("/movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));

    const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
    if (storedFavourites) {
      setFavourites(storedFavourites);
    }
  }, []);

  const handleFavouriteToggle = (movie) => {
    let updatedFavourites;
    if (favourites.some((favMovie) => favMovie.title === movie.title)) {
      updatedFavourites = favourites.filter(
        (favMovie) => favMovie.title !== movie.title
      );
    } else {
      updatedFavourites = [...favourites, movie];
    }
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="movie-list">
      <h2>Movies</h2>
      <div className="movies">
        {filteredMovies.slice(0, 14).map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            onFavouriteToggle={handleFavouriteToggle}
            isFavourite={favourites.some(
              (favMovie) => favMovie.title === movie.title
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
