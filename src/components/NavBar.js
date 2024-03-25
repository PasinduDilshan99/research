// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: #3498db;
  padding: 10px;
`;

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

const StyledLi = styled.li`
  display: inline;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

function Navbar() {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/">Home</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/about">About</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/contact">Contact</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/prediction">Prediction</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/diabetes-stages">Diabetes</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
}

export default Navbar;
