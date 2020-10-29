import React, { useState, useContext } from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { AppState } from "../components/Context";
// Images
import MenuBgImage from "../images/menu-bg.jpg";
import PizzaBgImage from "../images/pattern-body.jpg";
// Components
import Container from "../components/ReusableComponents/Container";
import PizzaMenu from "../components/PizzaMenu/PizzaMenu";

const MenuPage = () => {
  const { cartItems, setCartItems, addToCart, showCart } = useContext(AppState);
  return (
    <StyledMenuPage className="menu">
      {showCart ? 
      <div className="overlay"></div>
      : null}
      <div className={showCart ? "cart showCart" : "cart hideCart"}>
        <div className="cartHeading">
          <h3>Cart Totals</h3>
        </div>
        <div className="item-wrapper">
          {cartItems.map((item) => (
            <div className="item">
              <Img fixed={item.image.asset.fixed} />
              <span>{item.pizzaName}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="background-image">
        <h1>Pizza Menu</h1>
      </div>
      <div className="pizzaItems">
        <Container>
          <PizzaMenu setCartItems={setCartItems} addToCart={addToCart} />
        </Container>
      </div>
    </StyledMenuPage>
  );
};

const StyledMenuPage = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: opacity .4s ease-in-out;
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    opacity: 0.7;
    z-index: 10;
  }
  .cart {
    transition: all 400ms ease-in-out;
    &.hideCart {
      width: 100%;
      max-width: 400px;
      position: absolute;
      top: 0;
      right: -600px;
      bottom: 0;
      opacity: 0;
      background: #222222;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 20;
      .cartHeading {
        text-align: center;
        padding: 20px 0;
        h3 {
          color: #fdbc2c;
          font-size: 2rem;
        }
      }
      .item-wrapper {
        width: 100%;
        max-width: 320px;
        border-top: 1px solid #010202;
        box-shadow: 0 -1px 0 0 #383838;
        .item {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 600px;
          padding: 20px 0;
          border-bottom: 1px solid #010202;
          box-shadow: 0 1px 0 0 #383838;
          .gatsby-image-wrapper {
            height: 120px !important;
            width: 120px !important;
            img {
              height: 120px !important;
              width: 100%;
            }
          }
          span {
            display: block;
            color: #fdbc2c;
            font-size: 1.2rem;
            font-weight: 600;
            width: 100%;
            max-width: 190px;
          }
        }
      }
    }
    &.showCart {
      position: absolute;
      width: 100%;
      max-width: 400px;
      top: 0;
      right: 0;
      bottom: 0;
      opacity: 1;
      background: #222222;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      .cartHeading {
        text-align: center;
        padding: 20px 0;
        h3 {
          color: #fdbc2c;
          font-size: 2rem;
        }
      }
      .item-wrapper {
        width: 100%;
        max-width: 320px;
        border-top: 1px solid #010202;
        box-shadow: 0 -1px 0 0 #383838;
        .item {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 600px;
          padding: 20px 0;
          border-bottom: 1px solid #010202;
          box-shadow: 0 1px 0 0 #383838;
          .gatsby-image-wrapper {
            height: 120px !important;
            width: 120px !important;
            img {
              height: 120px !important;
              width: 100%;
            }
          }
          span {
            display: block;
            color: #fdbc2c;
            font-size: 1.2rem;
            font-weight: 600;
            width: 100%;
            max-width: 190px;
          }
        }
      }
    }
  }
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
  .pizzaItems {
    background: url("${PizzaBgImage}") no-repeat center/cover;
    .container {
      display: flex;
      flex-wrap: wrap;
      padding: 40px 0;
    }
  }
`;

export default MenuPage;
