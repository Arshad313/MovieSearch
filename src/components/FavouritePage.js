import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const FavouritePage = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
    if (storedFavourites) {
      setFavourites(storedFavourites);
    }
  }, []);

  const handleFavouriteToggle = (movie) => {
    const updatedFavourites = favourites.filter(
      (favMovie) => favMovie.title !== movie.title
    );
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <section className="movie-list">
      <h2>My Favourites</h2>
      <div className="movies">
        {favourites.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            onFavouriteToggle={handleFavouriteToggle}
            isFavourite={true}
          />
        ))}
      </div>
    </section>
  );
};

export default FavouritePage;
