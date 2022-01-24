import React from "react";
import Character from "./Character.jsx";
import Pagination from "./Pagination.jsx";
import "./styles/container.css";

const Container = (props) => {
    const { characters, info, onPrevious, onNext } = props;
    return ( 
        <>
            <Pagination prev = { info.prev }
                next = { info.next }
                onPrevious = { onPrevious }
                onNext = { onNext }
            /> 
            <div className = "container__cards" > {
                characters.map((character) => {
                    return ( <
                        Character key = { character.id }
                        name = { character.name }
                        img = { character.image }
                        gender = { character.gender }
                        status = { character.status }
                        />
                    );
                })
            } 
            </div> 
            <Pagination prev = { info.prev }
                next = { info.next }
                onPrevious = { onPrevious }
                onNext = { onNext }
            /> 
        </>
    );
};
export default Container;
