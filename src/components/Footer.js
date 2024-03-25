// Footer.js
import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #3498db;
  padding: 10px;
  text-align: center;
  color: #fff;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>&copy; 2024 Diabetes.lk </p>
    </StyledFooter>
  );
}

export default Footer;
