// ContactPage.js
import React from "react";
import styled from "styled-components";

const StyledContactPage = styled.div`
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

const StyledContactLink = styled.a`
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9;
  }
`;

function ContactPage() {
  return (
    <StyledContactPage>
      <StyledHeading>Contact Us</StyledHeading>
      <StyledParagraph>
        We'd love to hear from you! If you have any questions, suggestions, or
        inquiries, feel free to reach out to us.
      </StyledParagraph>
      <StyledParagraph>
        You can contact us via email at{" "}
        <StyledContactLink href="mailto:info@example.com">
          info@example.com
        </StyledContactLink>
      </StyledParagraph>
      <StyledParagraph>
        Follow us on social media for updates and news:{" "}
        <StyledContactLink href="https://twitter.com/example" target="_blank">
          Twitter
        </StyledContactLink>{" "}
        |{" "}
        <StyledContactLink href="https://facebook.com/example" target="_blank">
          Facebook
        </StyledContactLink>{" "}
        |{" "}
        <StyledContactLink href="https://instagram.com/example" target="_blank">
          Instagram
        </StyledContactLink>
      </StyledParagraph>
    </StyledContactPage>
  );
}

export default ContactPage;
