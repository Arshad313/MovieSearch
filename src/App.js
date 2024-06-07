import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import FavouritePage from "./components/FavouritePage";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <div className="app">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <MovieList searchTerm={searchTerm} />
              </>
            }
          />

          <Route path="/favourites" element={<FavouritePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
