import React from "react";
import "./episode.css";

const Episode = (props) => {
  const { name, episode, characters } = props;
  return (
    <div className="episode">
      <h3 className="episode__title"> {name} </h3>
      <p className="episode__episode">{episode}</p>
      <p>{characters}</p>
    </div>
  );
};

export default Episode;
