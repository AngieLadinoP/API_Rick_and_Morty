import React from "react";
import "./styles/character.css";

const Character = (props) => {
    const { name, img, gender, status } = props;

    return ( 
        <div className = "card" >
            <h3 className = "card__title" > { name } </h3> 
            <img 
                className = "card__img"
                src = { img }
                alt = { name }
            /> 
            <p className = "card__info card__info--gender" > 
                { `Gender: ${gender}` } 
            </p> 
            <p className = "card__info card__info--status" > 
                { `Status: ${status}` } 
            </p> 
        </div>
    );
};

export default Character;
