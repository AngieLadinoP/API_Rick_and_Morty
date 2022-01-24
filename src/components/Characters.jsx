import React from 'react'
import { useEffect, useState } from 'react'
import Character from './Character.jsx'
import Pagination from './Pagination.jsx'
import './styles/characters.css'

function Characters() {
    const url = 'https://rickandmortyapi.com/api/character'
    const [characters, setCharacters] = useState([]) // información de personajes
    const [info, setInfo] = useState({}) // Información de pagnación
    const fetchCharacters = (url) => {
        // Traer la información de la API
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results)
                setInfo(data.info)
            }) // Guardar la información en el estado
    }

    const onPrevious = () => {
        fetchCharacters(info.prev)
    }

    const onNext = () => {
        fetchCharacters(info.next)
    }

    useEffect(() => {
        fetchCharacters(url)
    }, [])
    return ( <
        >
        <
        div className = "characters" >
        <
        h1 className = "characters__title title" > CHARACTERS < /h1> <
        Pagination prev = { info.prev }
        next = { info.next }
        onPrevious = { onPrevious }
        onNext = { onNext }
        /> <
        div className = "characters__cards" > {
            characters.map((character) => {
                return ( <
                    Character key = { character.id }
                    name = { character.name }
                    img = { character.image }
                    gender = { character.gender }
                    status = { character.status }
                    />
                )
            })
        } <
        /div> <
        /div> <
        />
    )
}
export default Characters