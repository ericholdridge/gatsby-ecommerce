import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import Container from "../../ReusableComponents/Container";
import { Link, StaticQuery } from "gatsby";
import Img from "gatsby-image";
// Image
import pizzaSliderImage from "../../../images/pizzaSliderPattern.png";

const PizzaSlider = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSanityMenu {
            nodes {
              image {
                asset {
                  fixed(width: 400) {
                    ...GatsbySanityImageFixed
                  }
                }
              }
              pizzaName
              description
            }
          }
        }
      `}
      render={(data) => (
        <StyledPizzaSlider className="pizzaSlider">
          <div className="overlay"></div>
          <Container>
            <Carousel>
              {data.allSanityMenu.nodes.map((item) => (
                <div className="carousel-container">
                  <div className="carousel-info">
                    <h3>{item.pizzaName}</h3>
                    <p>{item.description}</p>
                    <div className="menuButton">
                      <Link to="/menu">View Menu</Link>
                    </div>
                  </div>
                  <div className="carousel-image">
                    <Img fixed={item.image.asset.fixed} />
                  </div>
                </div>
              ))}
            </Carousel>
          </Container>
        </StyledPizzaSlider>
      )}
    />
  );
};

const StyledPizzaSlider = styled.section`
  width: 100%;
  background: #d94f2b;
  position: relative;
  box-shadow: 0 1px 7px 0 rgba(1, 2, 2, 0.6);
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("${pizzaSliderImage}");
  }
  .container {
    padding: 100px 0;
    position: relative;
    .carousel-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .carousel-info {
        width: 100%;
        max-width: 400px;
        h3 {
          font-size: 3rem;
          color: whitesmoke;
        }
        p {
          color: whitesmoke;
          line-height: 1.8;
          font-weight: bold;
          padding: 0 0 20px 0;
        }
        a {
          background: #fdbc2c;
          padding: 10px 28px;
          color: #000;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          cursor: pointer;
          text-decoration: none;
          &:focus {
            outline: none;
          }
        }
      }
    }
    .rec {
      .rec-carousel {
        .rec-arrow {
          border-radius: 0;
          border: 3px solid whitesmoke;
          &:hover {
            background: none;
          }
          &:focus {
            background: none;
          }
        }
      }
      &:focus {
        outline: none;
      }
      .carousel-container {
        &:focus {
          outline: none;
        }
      }
      .rec-pagination {
        display: none;
      }
    }
  }
  @media (max-width: 900px) {
    .container {
      .carousel-container {
        flex-direction: column;
        .carousel-info {
          max-width: 800px;
          margin: 0 0 40px 0;
          max-width: 600px;
          h3 {
            line-height: 1;
          }
          p {
            margin: 14px 0;
          }
          .menuButton {
            width: 100%;
            display: flex;
            justify-content: center;
            a {
              margin: 0 auto;
            }
          }
        }
        .carousel-image {
          width: 100%;
          display: flex;
          justify-content: center;
          .gatsby-image-wrapper {
            width: 300px !important;
            height: 300px !important;
          }
        }
      }
    }
  }
  @media (min-width: 901px) and (max-width: 1020px) {
    .container {
      .carousel-container {
        .carousel-info {
          max-width: 800px;
          margin: 0 0 40px 0;
          max-width: 600px;
          text-align: center;
          h3 {
            line-height: 1;
          }
          p {
            margin: 14px 0;
          }
          .menuButton {
            width: 100%;
            display: flex;
            justify-content: center;
            a {
              margin: 0 auto;
            }
          }
        }
        .carousel-image {
          width: 100%;
          display: flex;
          justify-content: center;
          .gatsby-image-wrapper {
            width: 250px !important;
            height: 250px !important;
          }
        }
      }
    }
  }
  @media (min-width: 1021px) and (max-width: 1199px) {
    .container {
      .carousel-container {
        .carousel-info {
          max-width: 800px;
          margin: 0 0 40px 0;
          max-width: 600px;
          text-align: center;
          h3 {
            line-height: 1;
          }
          p {
            margin: 14px 0;
          }
          .menuButton {
            width: 100%;
            display: flex;
            justify-content: center;
            a {
              margin: 0 auto;
            }
          }
        }
        .carousel-image {
          width: 100%;
          display: flex;
          justify-content: center;
          .gatsby-image-wrapper {
            width: 300px !important;
            height: 300px !important;
          }
        }
      }
    }
  }
`;

export default PizzaSlider;
