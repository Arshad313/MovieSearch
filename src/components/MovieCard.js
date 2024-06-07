import React from "react";
import "./MovieCard.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MovieCard = ({ movie, onFavouriteToggle, isFavourite }) => {
  const handleFavouriteClick = () => {
    onFavouriteToggle(movie);
  };

  return (
    <div className="movie-card">
      <div className="image-container">
        <img src={movie.banner_image} alt={movie.title} />
        <div className="favourite-icon" onClick={handleFavouriteClick}>
          {isFavourite ? <FaHeart color="red" /> : <FaRegHeart />}
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.genre}</p>
        <p>{movie.year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
