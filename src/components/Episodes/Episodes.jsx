import React, { useState, useEffect } from "react";
import Episode from "./Episode/Episode";
import Button from "../Characters/Button/Button.jsx";
import "./episodes.css";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [info, setInfo] = useState([]);

  const urlEpisodes = "https://rickandmortyapi.com/api/episode";

  /* const fetchEpisodes = async (url) => {
    const res = await fetch(url);
    const episodesJSON = await res.json();
    const { results, info } = await episodesJSON;
    setInfo(info);
    setEpisodes(results);
  }; */

  const fetchEpisodes = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((newEpisode) => {
        setEpisodes(newEpisode.results);
        setInfo(newEpisode.info);
      }); // Guardar la información en el estado
  };

  const onPrevious = () => {
    fetchEpisodes(info.prev);
  };

  const onNext = () => {
    fetchEpisodes(info.next);
  };
  useEffect(() => {
    fetchEpisodes(urlEpisodes);
  }, []);

  return (
    <>
      <div className="episodes">
        <h2 className="episodes__title">Episodes</h2>
        <div className="episodes__cards">
          {episodes.map((episode) => (
            <Episode
              key={episode.id}
              name={episode.name}
              airDate={episode.air_date}
              episode={episode.episode}
              charactersUrls={episode.characters}
            />
          ))}
        </div>
      </div>
      <div className="episodes__buttons">
        <Button name="Previous" onChange={onPrevious} pageInfo={info.prev} />
        <Button name="Next" onChange={onNext} pageInfo={info.next} />
      </div>
    </>
  );
};
export default Episodes;
