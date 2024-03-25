// AboutPage.js
import React from "react";
import styled from "styled-components";

const StyledAboutPage = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeading = styled.h2`
  color: #3498db;
`;

const StyledParagraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 15px;
`;

function AboutPage() {
  return (
    <StyledAboutPage>
      <StyledHeading>About Us</StyledHeading>
      <StyledParagraph>
        Welcome to our Diabetes Information Website! We are dedicated to
        providing valuable information about diabetes, its stages, and
        predictive tools to help you manage and understand this condition.
      </StyledParagraph>
      <StyledParagraph>
        Our team of experts is committed to delivering accurate and up-to-date
        information to empower individuals in their journey to better health.
      </StyledParagraph>
      <StyledParagraph>
        Explore our website, use our prediction tool, and discover resources to
        enhance your understanding of diabetes.
      </StyledParagraph>
    </StyledAboutPage>
  );
}

export default AboutPage;
