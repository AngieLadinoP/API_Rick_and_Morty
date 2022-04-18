import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { useState } from "react";
const Navigation = () => {
  const [activeLink, setActiveLink] = useState();
  const handleClick = (e) => {
    setActiveLink(e);
  };
  return (
    <nav className="navigation">
      <Link
        to="/"
        className={
          activeLink === 0
            ? "navigation__link navigation__link--home active"
            : "navigation__link navigation__link--home"
        }
        onClick={() => handleClick(0)}
      >
        Home
      </Link>
      <Link
        to="/characters"
        className={
          activeLink === 1
            ? "navigation__link navigation__link--characters active"
            : "navigation__link navigation__link--characters"
        }
        onClick={() => handleClick(1)}
      >
        Characters
      </Link>
      <Link
        to="/episodes"
        className={
          activeLink === 2
            ? "navigation__link navigation__link--episodes active"
            : "navigation__link navigation__link--episodes"
        }
        onClick={() => handleClick(2)}
      >
        Episodes
      </Link>
    </nav>
  );
};

export default Navigation;
