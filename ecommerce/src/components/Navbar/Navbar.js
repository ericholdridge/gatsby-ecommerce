import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components'


// Components
import Container from "../ReusableComponents/Container";

const Navbar = () => {
  return (
    <StyledNav>
      <Container>
        <div className="logo">ReactPizza</div>
        <div className="items">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/">Contact</Link>
        </div>
      </Container>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  padding: 20px 0;
  background: #383838;
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
    }
  }
`

export default Navbar;
