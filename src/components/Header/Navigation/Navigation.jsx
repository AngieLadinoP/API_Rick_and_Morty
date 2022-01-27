import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__link navigation__link--home">
        Home
      </Link>
      <Link
        to="/characters"
        className="navigation__link navigation__link--characters"
      >
        Characters
      </Link>
      <Link
        to="/episodes"
        className="navigation__link navigation__link--episodes"
      >
        Episodes
      </Link>
    </nav>
  );
};

export default Navigation;
