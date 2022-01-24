import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './styles/header.css'

const Header = (props) => {
    const { title } = props
    return ( <
        >
        <
        div className = "header" >
        <
        h1 className = "header__title" > { title } < /h1> <
        nav className = "header__nav" >
        <
        Link to = "/"
        className = "header__nav--link" >
        Home <
        /Link> <
        Link to = "/characters"
        className = "header__nav--link" >
        Characters <
        /Link> <
        /nav> <
        /div> <
        section className = "section-shown" >
        <
        Outlet / >
        <
        /section> <
        />
    )
}
export default Header