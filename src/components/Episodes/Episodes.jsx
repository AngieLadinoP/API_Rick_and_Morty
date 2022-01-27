import React, { useState, useEffect } from "react";
import Episode from "./Episode/Episode";
import Button from "../Common/Button/Button.jsx";
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

  //* FETCH API
  const fetchEpisodes = (url) => {
    fetch(url) // Get HTTP response
      .then((response) => response.json()) // Turn the response into JSON
      .then((data) => {
        if (data.results) {
          // Specify what to do with the JSON file, in thos case, save data into state
          setEpisodes(data.results);
          setInfo(data.info);
        } else {
          alert("Episode not found");
        }
      });
  };

  useEffect(() => {
    fetchEpisodes(urlEpisodes);
  }, []);

  //* PAGINATION
  const onPrevious = () => {
    fetchEpisodes(info.prev);
  };

  const onNext = () => {
    fetchEpisodes(info.next);
  };

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
