import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="hedr">
      <h1>Movie App</h1>
      <input
        type="text"
        placeholder="Search movies and series"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <nav>
        <Link to="/">Home </Link>
        <Link to="/favourites"> Favourites</Link>
      </nav>
    </div>
  );
};

export default Header;
