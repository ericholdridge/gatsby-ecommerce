import React from "react";
import styled from "styled-components";
import FormInput from "./FormInput/FormInput";
import { CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const iframeStyles = {
    base: {
      color: "#fff",
      fontSize: "20px",
      iconColor: "#fff",
      "::placeholder": {
        color: "ccc",
      },
    },
    invalid: {
      iconColor: "#d94f2b",
      color: "#d94f2b",
    },
    complete: {
      iconColor: "#fdbc2c",
    },
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true,
  };

  return (
    <StyledCheckoutForm>
      <h3>Billing Details</h3>
      <FormInput label="Name" name="name" type="text" placeholder="Jon Doe" />
      <FormInput
        label="Email"
        name="email"
        type="email"
        placeholder="jon.doe@example.com"
      />
      <FormInput
        label="Address"
        name="address"
        type="text"
        placeholder="185 Berry St"
      />
      <FormInput label="City" name="city" type="text" placeholder="Dubuque" />
      <FormInput label="State" name="state" type="text" placeholder="Iowa" />
      <FormInput label="ZIP" name="zip" type="text" placeholder="52003" />
      <CardElement options={cardElementOpts} />
    </StyledCheckoutForm>
  );
};

const StyledCheckoutForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px 0 80px 0;
  h3 {
    color: #fdbc2c;
    font-size: 2.4rem;
  }
`;

export default CheckoutForm;
