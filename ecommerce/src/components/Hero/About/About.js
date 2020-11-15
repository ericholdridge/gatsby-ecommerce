import React from "react";
import styled from "styled-components";
import Container from "../../ReusableComponents/Container";
import AboutCard from "./AboutCard";

const About = ({ aboutHeading, aboutInfo }) => {
  return (
    <StyledSection className="about">
      <Container>
        <div className="aboutInfo">
          <h2>{aboutHeading}</h2>
          <p>{aboutInfo}</p>
        </div>
        <div className="aboutCards">
          <AboutCard
            cardIcon="fab fa-envira"
            cardHeading="We're Careful"
            cardInfo="The crust is stored in a separate container, on a separate shelf in our fridge. The cheese, marinara sauce and pepperoni are stored in a designated kit, and every pizza is freshly baked on designated parchment paper in our ovens."
          />
          <AboutCard
            cardIcon="fas fa-award"
            cardHeading="We're Certified"
            cardInfo="Our cheese-only and cheese-and-pepperoni gluten-free pizzas are prepared using the procedures certified by the Gluten Intolerance Group (GIG), and we take specific caution when making these pizzas."
          />
          <AboutCard
            cardIcon="fas fa-rocket"
            cardHeading="You're Creative"
            cardInfo="For those simply looking to reduce gluten in their diets, we offer a Create Your Own pizza option. The cheese, pepperoni and marinara come from our gluten-free kit, but all additional toppings are stored at our standard make table."
          />
        </div>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  .container {
    padding: 100px 0;
    .aboutInfo {
      text-align: center;
      h2 {
        color: #fdbc2c;
        font-size: 2.6rem;
      }
      p {
        color: whitesmoke;
        padding: 20px 0 60px 0;
        line-height: 1.8;
        font-weight: bold;
      }
    }
    .aboutCards {
      display: flex;
      justify-content: space-between;
    }
  }
  @media (max-width: 768px) {
    .container {
      .aboutInfo {
        text-align: left;
        h2 {
          font-size: 2rem;
        }
      }
      .aboutCards {
        flex-direction: column;
        div {
          margin: 26px 0 0 0;
          &:first-child {
            margin-top: 0;
          }
        }
      }
    }
  }
  @media (min-width: 769px) and (max-width: 1220px) {
    .container {
      .aboutInfo {
        text-align: left;
        h2 {
          font-size: 2rem;
        }
      }
      .aboutCards {
        flex-direction: row;
        flex-wrap: wrap;
        div {
          width: 46%;
          max-width: none;
          &:last-child {
            margin-top: 26px;
          }
        }
      }
    }
  }
`;

export default About;
