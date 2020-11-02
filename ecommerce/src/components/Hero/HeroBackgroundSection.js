import { graphql, Link, StaticQuery } from "gatsby";
import React from "react";
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
          <div className="overlay"></div>
          <Container>
            <div className="items-center">
              <h1>Get it while it's hot!</h1>
              <p>
                We create custom, personal pizzas with quality ingredients in
                only five minutes.
              </p>
              <Link to="/menu">Menu</Link>
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
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    opacity: 0.5;
    z-index: 10;
  }
  > .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-height: calc(100vh - 69px);
    z-index: 20;
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
      padding: 0 0 30px 0;
    }
    a {
      padding: 10px 40px;
      border: 1px solid #fdbc2c;
      background: #d94f2b;
      color: white;
      font-weight: bold;
      font-size: 1.1rem;
      text-decoration: none;
    }
  }
`;

export default HeroSection;
