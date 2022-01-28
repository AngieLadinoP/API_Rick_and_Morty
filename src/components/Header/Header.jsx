import React from "react";
import Navigation from "./Navigation/Navigation.jsx";
// import "./header.css";
import styled from "styled-components";

const Header = (props) => {
  const { title } = props;
  return (
    <Container>
      <Title> {title} </Title> <Title red></Title>
      <Navigation />
    </Container>
  );
};
export default Header;

//Styles
const Container = styled.div`
  background: black;
  color: white;
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  font-family: "Playfair display SC", serif;
  letter-spacing: 2px;
  margin: 5px;
`;
