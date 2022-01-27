import React from "react";
import { useEffect, useState } from "react";
import Character from "./Character/Character.jsx";
import Button from "./Button/Button.jsx";
import Searchbar from "./Searchbar/Searchbar.jsx";
import "./characters.css";

function Characters() {
  //* FETCH API
  const urlCharacters = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  /* const fetchCharacters = async (url) => {
    const res = await fetch(url);
    const episodesJSON = await res.json();
    const { results, info } = await episodesJSON;
    setInfo(info);
    setEpisodes(results);
  }; */

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
    fetchCharacters(urlCharacters);
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
    const firstPageUrl = `${urlCharacters}?page=1`;
    fetchCharacters(firstPageUrl);
  };
  const filterName = (name) => {
    const urlFilter = `${urlCharacters}/?name=${name}`;
    fetchCharacters(urlFilter);
  };
  const filterMale = () => {
    const urlFilter = `${urlCharacters}/?gender=male`;
    fetchCharacters(urlFilter);
  };
  const filterFemale = () => {
    const urlFilter = `${urlCharacters}/?gender=female`;
    fetchCharacters(urlFilter);
  };

  return (
    <>
      <div className="characters">
        <h1 className="characters__title title"> CHARACTERS </h1>
        <div className="characters__filter">
          <Searchbar onChange={filterName} />
          <Button name="See all" onChange={firstPage} pageInfo={true} />
          <Button name="Male" onChange={filterMale} pageInfo={true} />
          <Button name="Female" onChange={filterFemale} pageInfo={true} />
        </div>
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
