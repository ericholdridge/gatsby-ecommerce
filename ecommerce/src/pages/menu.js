import React from "react";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { Helmet } from "react-helmet";
import { StaticQuery } from "gatsby";
import Img from "gatsby-image";
// Images
import MenuBgImage from "../images/menu-bg.jpg";
import PizzaBgImage from "../images/pattern-body.jpg";
// Components
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/ReusableComponents/Container";
import MenuAddBtn from "../components/ReusableComponents/MenuAddBtn";

const menu = () => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allSanityMenu {
            nodes {
              image {
                asset {
                  fixed(width: 200, height: 200) {
                    ...GatsbySanityImageFixed
                  }
                }
              }
              pizzaName
              description
              price
            }
          }
        }
      `}
      render={(data) => (
        <StyledMenuPage className="menu">
          <GlobalStyles />
          <Helmet>
            <link
              href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200;300;500&family=Poppins:wght@100;300;400;500&display=swap"
              rel="stylesheet"
            />
            <script
              src="https://kit.fontawesome.com/9808de19ba.js"
              crossorigin="anonymous"
            ></script>
          </Helmet>
          <Navbar />
          <div className="background-image">
            <h1>Pizza Menu</h1>
          </div>
          <div className="menu-wrapper">
            <Container>
              {data.allSanityMenu.nodes.map((pizza) => (
                <div className="individualPizza">
                  <div className="img">
                    <Img fixed={pizza.image.asset.fixed} />
                  </div>
                  <div className="pizzaInfo">
                    <h3>{pizza.pizzaName}</h3>
                    <p>{pizza.description}</p>
                    <span>${pizza.price}</span>
                  </div>
                  <MenuAddBtn pizza={pizza}/>
                </div>
              ))}
            </Container>
          </div>
        </StyledMenuPage>
      )}
    />
  );
};

const StyledMenuPage = styled.section`
  width: 100%;
  min-height: 40vh;
  .background-image {
    width: 100%;
    background: url("${MenuBgImage}") no-repeat center/cover;
    min-height: calc(35vh - 69px);
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 4rem;
      color: whitesmoke;
    }
  }
  .menu-wrapper {
    background: url("${PizzaBgImage}") no-repeat center/cover;
    display: flex;
    align-items: center;
    > .container {
      display: flex;
      flex-wrap: wrap;
      padding: 40px 0;
      .individualPizza {
        width: 100%;
        max-width: 400px;
        padding: 20px;
        border: 2px solid transparent;
        transition: border .3s ease-in-out;
        cursor: pointer;
        .img {
          display: flex;
          justify-content: center;
        }
        .pizzaInfo {
          text-align: center;
          padding: 0 6px;
          h3 {
            color: #fdbc2c;
          }
          p {
            padding: 8px 0;
            color: whitesmoke;
            font-size: 0.9rem;
          }
          span {
            display: block;
            color: #d94f2b;
          }
        }
        &:hover {
          border: 2px solid #fdbc2c;
        }
      }
    }
  }
`;

export default menu;
