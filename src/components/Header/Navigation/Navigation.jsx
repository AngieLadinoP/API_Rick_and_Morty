import React from "react";
import { Link, HashRouter } from "react-router-dom";
import "./navigation.css";
const Navigation = () => {
  return (
    <HashRouter>
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
    </HashRouter>
  );
};

export default Navigation;
