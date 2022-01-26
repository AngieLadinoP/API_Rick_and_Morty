import React from "react";
import "./character.css";

const Character = (props) => {
  const { name, img, status, species, gender, origin } = props;
  return (
    <div className="character">
      <h3 className="character__title"> {name} </h3>
      <figure className="character__imgage">
        <img className="character__img" src={img} alt={name} />
      </figure>
      <div className="character__information">
        <p className="character__info character__info--status">
          {`Status: ${status}`}
        </p>
        <p className="character__info characer__info--species">
          {`Species: ${species}`}
        </p>
        <p className="character__info characer__info--gender">
          {`ender: ${gender}`}
        </p>
        <p className="character__info characer__info--origin">
          {`Origin: ${origin}`}
        </p>
      </div>
    </div>
  );
};

export default Character;
