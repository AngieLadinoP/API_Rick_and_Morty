import React, { useEffect, useState } from "react";
import "./episode.css";

const Episode = (props) => {
  const { name, airDate, episode, charactersUrls } = props;
  const [characters, setCharacters] = useState([]);

  /*   useEffect(() => {
    charactersUrls.map(async (characterUrl) => {
      const response = await fetch(characterUrl);
      const newCharacter = await response.json();
      setCharacters((prevCharacter) => [...prevCharacter, newCharacter]);
    });
  }, []); */

  useEffect(() => {
    // eslint-disable-next-line
    charactersUrls.map((characterUrl) => {
      // Get data from each url of the characters
      fetch(characterUrl)
        .then((response) => response.json())
        .then((newCharacter) => {
          setCharacters((prevCharacter) => [...prevCharacter, newCharacter]);
        });
    });
  }, [charactersUrls]);

  return (
    <div className="episode">
      <div className="episode__information">
        <h4 className="episode__info episode__info--title">{name}</h4>
        <p className="episode__info episode__info--season">{episode}</p>
        <p className="episode__info episode__info--date">{airDate}</p>
      </div>
      <div className="episode__characters">
        {characters.map((character) => (
          <div className="episode__character" key={character.id}>
            <li className="episode__character--name">{character.name} </li>
            <img
              className="episode__character--image"
              src={character.image}
              alt={character.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Episode;
