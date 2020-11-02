import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import { AppState } from "../Context";
// Components
import Container from "../ReusableComponents/Container";

const Navbar = () => {
  const { showCart, setShowCart } = useContext(AppState);
  return (
    <StyledNav>
      <Container>
        <div className="logo">ReactPizza</div>
        <div className="items">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/menu">Menu</Link>
          <i onClick={() => setShowCart(!showCart)}className="fas fa-shopping-cart fa-xl"></i>
        </div>
      </Container>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  padding: 20px 0;
  background: #151515;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      color: whitesmoke;
      font-weight: bold;
      font-size: 1.2rem;
    }
    .items {
      a {
        text-decoration: none;
        color: whitesmoke;
        margin: 0 12px;
      }
      i {
        color: #fdbc2c;
        margin: 0 0 0 10px;
        cursor: pointer;
      }
    }
  }
`;

export default Navbar;
