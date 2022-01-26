import React from "react";
import Navigation from "./Navigation/Navigation.jsx";
import "./header.css";

const Header = (props) => {
  const { title } = props;
  return (
    <div className="header">
      <h1 className="header__title"> {title} </h1>
      <Navigation />
    </div>
  );
};
export default Header;
