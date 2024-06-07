import React from "react";

const HeroSection = () => {
  return (
    <section className="hero">
      <img
        src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg"
        alt="Interstellar"
      />
      <div className="hero-content">
        <h2>Interstellar</h2>

        <button className="watch-trailer-btn">Watch Trailer</button>
      </div>
    </section>
  );
};

export default HeroSection;
