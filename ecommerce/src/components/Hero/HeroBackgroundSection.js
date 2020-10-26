import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import HeroBg from "../../images/main-slider_bg-1.jpg";
import Container from "../ReusableComponents/Container";

const HeroSection = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSanityHero {
            nodes {
              heroBgImage {
                asset {
                  fluid {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <StyledHero>
          <Navbar />
          <Container>
            <div className="items-center">
              <h1>Get it while it's hot!</h1>
              <p>
                We create custom, personal pizzas with quality ingredients in
                only five minutes.
              </p>
              <button>Menu</button>
            </div>
          </Container>
        </StyledHero>
      )}
    />
  );
};

const StyledHero = styled.section`
  text-align: center;
  background: url("${HeroBg}") no-repeat center/cover;
  > .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-height: calc(100vh - 69px);
    h1 {
      color: whitesmoke;
      font-size: 4rem;
    }
    p {
      margin: 0 auto;
      width: 100%;
      max-width: 680px;
      color: whitesmoke;
      font-weight: bold;
      font-size: 1.8rem;
    }
    button {
      padding: 10px 40px;
      border: 1px solid #fdbc2c;
      background: #d94f2b;
      color: white;
      font-weight: bold;
      font-size: 1.1rem;
      margin: 20px 0;
    }
  }
`;

export default HeroSection;
