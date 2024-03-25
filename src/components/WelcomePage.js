// WelcomePage.js
import React from "react";
import styled from "styled-components";

const StyledWelcomePage = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeading = styled.h1`
  color: #3498db;
`;

const StyledParagraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 15px;
`;

const StyledList = styled.ol`
  text-align: left;
`;

function WelcomePage() {
  return (
    <StyledWelcomePage>
      <StyledHeading>Welcome to our Diabetes Information Website</StyledHeading>
      <StyledParagraph>
        Explore valuable information about diabetes and use our prediction tool
        to estimate diabetes stages. Follow these steps to get started:
      </StyledParagraph>
      <StyledList>
        <li>Click on "Prediction" in the navigation menu.</li>
        <li>Provide relevant information in the prediction form.</li>
        <li>Submit the form to get an estimate of diabetes stages.</li>
        <li>
          Visit the "Diabetes Stages" section for detailed information and
          resources.
        </li>
      </StyledList>
      <StyledParagraph>
        If you have any questions, feel free to reach out to us through the
        "Contact" page.
      </StyledParagraph>
    </StyledWelcomePage>
  );
}

export default WelcomePage;
