import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import { AppState } from "../Context";
// Components
import Container from "../ReusableComponents/Container";

const Navbar = () => {
  const { showCart, setShowCart, cartItems } = useContext(AppState);
  return (
    <StyledNav>
      <Container>
        <div className="logo">ReactPizza</div>
        <div className="items">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <div>
            <i
              onClick={() => setShowCart(!showCart)}
              className="fas fa-shopping-cart fa-xl"
            >
              {cartItems.length > 0 ? <span>{cartItems.length}</span> : null}
            </i>
          </div>
        </div>
      </Container>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  padding: 20px 0;
  background: #000;
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
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: whitesmoke;
        margin: 0 12px;
      }
      i {
        color: #fdbc2c;
        margin: 0 0 0 10px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        span {
          display: block;
          font-weight: 600;
          font-size: 1rem;
          color: #d94f2b;
          font-family: 'Poppins',sans-serif;
          padding: 4px 0 0 4px;
        }
      }
    }
  }
`;

export default Navbar;
