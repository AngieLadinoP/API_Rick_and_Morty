import React from "react";
import { useEffect, useState } from "react";
import "./episodes.css";
import Episode from "./Episode/Episode.jsx";

function Episodes() {
  const url = "https://rickandmortyapi.com/api/episode";
  const [episodes, setEpisodes] = useState([]);
  const fetchEpisodes = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data.results);
      });
  };

  useEffect(() => {
    fetchEpisodes(url);
  }, []);

  return (
    <div>
      <h1 className="episodes__title"> Episodes </h1>
      <div className="episodes__cards">
        {episodes.map((episode) => {
          return (
            <Episode
              key={episode.id}
              name={episode.name}
              episode={episode.episode}
              characters={episode.characters}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Episodes;
