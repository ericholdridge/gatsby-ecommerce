import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Container from "../ReusableComponents/Container";

const Hero = () => {
  return (
    <StyledHero className="hero">
      <Navbar />
      <Container>
        <h1>Some hero heading here</h1>
      </Container>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  width: 100%;
  > .container {
    min-height: calc(100vh - 50px);
    display: flex;
    align-items: center;
  }
`;

export default Hero;
