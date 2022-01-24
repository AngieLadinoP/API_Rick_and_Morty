import React from 'react'
import './styles/character.css'

const Character = (props) => {
    const { name, img, gender, status } = props
    return ( <
        div className = "character" >
        <
        h3 className = "character__title" > { name } < /h3> <
        img className = "character__img"
        src = { img }
        alt = { name }
        /> <
        p className = "character__info character__info--gender" > { ' ' } { `Gender: ${gender}` } <
        /p> <
        p className = "character__info characer__info--status" > { `Status: ${status}` } <
        /p> <
        /div>
    )
}

export default Character