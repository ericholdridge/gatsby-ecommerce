import React, { useContext } from "react";
import styled from "styled-components";
import FormInput from "./FormInput/FormInput";
import axios from "axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { AppState } from "../Context";
import YourOrder from "./YourOrder";

const CheckoutForm = () => {
  const { inputValues, totalPrice, email, handleInputValues } = useContext(
    AppState
  );

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const res = await axios.post("http://localhost:3000/checkout", {
      email: email,
      totalPrice: totalPrice,
    });

    const clientSecret = res.data["client_secret"];

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          address: {
            city: inputValues.city,
            line1: inputValues.address,
            postal_code: inputValues.zip,
            state: inputValues.state,
          },
          email: inputValues.email,
          name: inputValues.name,
        },
      },
    });

    if (result.error) {
      // TODO: Show error message if payment didn't go through
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        // TODO: Show success message to the user that the payment succeeded
      }
    }
  };

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
    <StyledCheckoutForm onSubmit={handleSubmit}>
      <div className="formInputs">
        <h3>Billing Details</h3>
        <FormInput
          label="Name"
          name="name"
          type="text"
          placeholder="Jon Doe"
          value={inputValues.name}
          onChange={handleInputValues}
        />
        <FormInput
          label="Email"
          name="email"
          type="text"
          placeholder="jon.doe@example.com"
          value={inputValues.email}
          onChange={handleInputValues}
        />
        <FormInput
          label="Address"
          name="address"
          type="text"
          value={inputValues.address}
          onChange={handleInputValues}
          placeholder="185 Berry St"
        />
        <FormInput
          label="City"
          name="city"
          type="text"
          placeholder="Dubuque"
          value={inputValues.city}
          onChange={handleInputValues}
        />
        <FormInput
          label="State"
          name="state"
          type="text"
          placeholder="Iowa"
          value={inputValues.state}
          onChange={handleInputValues}
        />
        <FormInput
          label="ZIP"
          name="zip"
          type="text"
          placeholder="52003"
          value={inputValues.zip}
          onChange={handleInputValues}
        />
        <CardElement options={cardElementOpts} />
      </div>
      <div className="order">
        <YourOrder />
        <button>Checkout</button>
      </div>
    </StyledCheckoutForm>
  );
};

const StyledCheckoutForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 40px 0 80px 0;
  .formInputs {
    width: 100%;
    max-width: 700px;
    h3 {
      color: #fdbc2c;
      font-size: 2.4rem;
    }
  }
  .order {
    width: 100%;
    max-width: 450px;
    background: rgba(0, 0, 0, 0.3);
    padding: 40px;
  }
`;

export default CheckoutForm;
