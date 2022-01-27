import React from "react";
import { useState } from "react";
import "./searchbar.css";

const Searchbar = (props) => {
  const { onChange } = props;
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onChange(name);
    setName(""); // After clicking, erase everything from the input text
  };

  return (
    <>
      <form className="searchbar__form" onSubmit={handleSubmit}>
        <input
          className="searchbar__input"
          type="text"
          placeholder="Characters name..."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="searchbar__submit"
          type="submit"
          value="Search"
          disabled={name ? "" : "disabled"} //if there isn't anything written, the button won't work
        />
      </form>
    </>
  );
};

export default Searchbar;
