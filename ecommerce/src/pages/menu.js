import React, { useContext } from "react";
import styled from "styled-components";
import { AppState } from "../components/Context";
// Images
import MenuBgImage from "../images/menu-bg.jpg";
// Components
import Container from "../components/ReusableComponents/Container";
import PizzaMenu from "../components/PizzaMenu/PizzaMenu";
import SideCart from "../components/SideCart/SideCart";

const MenuPage = () => {
  const { setCartItems, addToCart, showCart } = useContext(AppState);
  return (
    <StyledMenuPage className="menu">
      {showCart ? <div className="overlay"></div> : null}
      <SideCart />
      <div className="background-image">
        <h1>Pizza Menu</h1>
      </div>
      <Container>
        <PizzaMenu setCartItems={setCartItems} addToCart={addToCart} />
      </Container>
    </StyledMenuPage>
  );
};

const StyledMenuPage = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: opacity 0.4s ease-in-out;
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
  .background-image {
    width: 100%;
    background: url("${MenuBgImage}") no-repeat center/cover;
    box-shadow: 0 1px 7px 0 rgba(1, 2, 2, 0.6);
    min-height: calc(33vh - 69px);
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 4rem;
      color: whitesmoke;
    }
  }
  .pizzaItems {
    .container {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 824px) {
    .background-image {
      min-height: calc(26vh - 69px);
      h1 {
        font-size: 3rem;
      }
    }
  }
`;

export default MenuPage;
