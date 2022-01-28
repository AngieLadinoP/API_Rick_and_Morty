import React from "react";
import "./character.css";

const Character = (props) => {
  const { name, img, status, species, gender } = props;
  return (
    <div className="character">
      <h3 className="character__title"> {name} </h3>
      <figure className="character__imgage">
        <img className="character__img" src={img} alt={name} />
      </figure>
      <div className="character__information">
        {status ? (
          <p className="character__info character__info--status">
            {`Status: ${status}`}
          </p>
        ) : null}
        {species ? (
          <p className="character__info character__info--species">
            {`Species: ${species}`}
          </p>
        ) : null}
        {gender ? (
          <p className="character__info characer__info--gender">
            {`Gender: ${gender}`}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Character;
