import React from "react";
import { useEffect, useState } from "react";
import Character from "./Character/Character.jsx";
import Button from "./Button/Button.jsx";
import Searchbar from "./Searchbar/Searchbar.jsx";
import "./characters.css";

function Characters() {
  //* FETCH API
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.results !== undefined) {
          setCharacters(data.results);
          setInfo(data.info);
        } else {
          alert("Character not found");
        }
      }); // Guardar la información en el estado
  };
  //useEffect is used with APIs and takes a function as argument
  useEffect(() => {
    fetchCharacters(url);
  }, []); // As it is only one time that we render info from the API, [] is empty. If components were updated a parameter would be needed

  //* PAGINATION
  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  //* FILTER
  const firstPage = () => {
    const firstPageUrl = `${url}?page=1`;
    fetchCharacters(firstPageUrl);
  };

  const filterName = (name) => {
    // query is the parameter used to filter by (name, status, species, type, gender)
    const urlFilter = `${url}/?name=${name}`;
    fetchCharacters(urlFilter);
  };

  return (
    <>
      <div className="characters">
        <h1 className="characters__title title"> CHARACTERS </h1>
        <Searchbar onChange={filterName} />
        <Button name="See all" onChange={firstPage} pageInfo={true} />
        <div className="characters__cards">
          {characters.map((character) => {
            return (
              <Character
                key={character.id}
                name={character.name}
                img={character.image}
                status={character.status}
                species={character.species}
                gender={character.gender}
                origin={character.origin.name}
              />
            );
          })}
        </div>
        <div className="characters__buttons">
          <Button name="Previous" onChange={onPrevious} pageInfo={info.prev} />
          <Button name="Next" onChange={onNext} pageInfo={info.next} />
        </div>
      </div>
    </>
  );
}
export default Characters;
