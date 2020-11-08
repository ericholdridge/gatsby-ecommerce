import React from "react";
import styled from "styled-components";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import YourOrder from "../components/Checkout/YourOrder";
import Container from "../components/ReusableComponents/Container";
// Images
import CheckoutBgImage from "../images/menu-bg.jpg";

const checkout = () => {
  return (
    <StyledCheckoutPage className="checkout">
      <div className="background-image">
        <h1>Checkout</h1>
      </div>
      <div className="background">
        <Container>
          <CheckoutForm />
          <YourOrder />
        </Container>
      </div>
    </StyledCheckoutPage>
  );
};

const StyledCheckoutPage = styled.section`
  width: 100%;
  .background-image {
    position: relative;
    background: url("${CheckoutBgImage}") no-repeat center/cover;
    box-shadow: 0 1px 7px 0 rgba(1, 2, 2, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(40vh - 69px);
    h1 {
      font-size: 4rem;
      color: whitesmoke;
    }
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .background {
    width: 100%;
    min-height: 60vh;
  }
`;

export default checkout;
