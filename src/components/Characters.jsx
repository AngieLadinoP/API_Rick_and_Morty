import React from "react";
import { useEffect, useState } from "react";
import Container from "./Container.jsx";
import "./styles/characters.css";

function Characters() {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]); // información de personajes
  const [info, setInfo] = useState({}); // Información de pagnación
  const fetchCharacters = (url) => {
    // Traer la información de la API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      }); // Guardar la información en el estado
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);
  return (
    <>
      <div className="characters">
        <h1 className="characters__title title">CHARACTERS</h1>
        <Container
          characters={characters}
          info={info}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}
export default Characters;
