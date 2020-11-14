import React from "react";
import styled from "styled-components";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import YourOrder from "../components/Checkout/YourOrder";
import Container from "../components/ReusableComponents/Container";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// Images
import CheckoutBgImage from "../images/menu-bg.jpg";
const stripePromise = loadStripe(process.env.GATSBY_PUBLISHABLE_KEY);

const checkout = () => {
  return (
    <StyledCheckoutPage className="checkout">
      <div className="background-image">
        <h1>Checkout</h1>
      </div>
      <Container>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Container>
    </StyledCheckoutPage>
  );
};

const StyledCheckoutPage = styled.section`
  width: 100%;
  position: relative;
  .background-image {
    position: relative;
    background: url("${CheckoutBgImage}") no-repeat center/cover;
    box-shadow: 0 1px 7px 0 rgba(1, 2, 2, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(33vh - 69px);
    h1 {
      font-size: 4rem;
      color: whitesmoke;
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

export default checkout;
