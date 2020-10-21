import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Container from "../ReusableComponents/Container";

const Navbar = () => {
  return (
    <StyledNav>
      <Container>
        <div className="navbarLogo">Gatsby iPhone Store</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>Contact</li>
        </ul>
      </Container>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  padding: 12px 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      list-style: none;
      li {
        margin: 0 12px;
      }
    }
  }
`;

export default Navbar;
