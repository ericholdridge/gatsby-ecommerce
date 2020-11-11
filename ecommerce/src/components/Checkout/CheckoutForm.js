import React, { useContext } from "react";
import styled from "styled-components";
import FormInput from "./FormInput/FormInput";
import axios from "axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { AppState } from "../Context";
import formatMoney from "../../utils/formatMoney";

const CheckoutForm = () => {
  const { email, setEmail, totalPrice } = useContext(AppState);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const res = await axios.post("http://localhost:3000/checkout", {
      email: email,
      totalPrice: totalPrice,
    });

    console.log(res);

    const clientSecret = res.data["client_secret"];

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: email,
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        console.log("Money is in the bank!");
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
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
      <h3>Billing Details</h3>
      {/* <FormInput label="Name" name="name" type="text" placeholder="Jon Doe" />
      <FormInput
        label="Email"
        name="email"
        type="text"
        placeholder="jon.doe@example.com"
        onChange={(e) => handleEmailValue(e.target.value)}
      /> */}
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* <FormInput
        label="Address"
        name="address"
        type="text"
        placeholder="185 Berry St"
      />
      <FormInput label="City" name="city" type="text" placeholder="Dubuque" />
      <FormInput label="State" name="state" type="text" placeholder="Iowa" />
      <FormInput label="ZIP" name="zip" type="text" placeholder="52003" /> */}
      <CardElement options={cardElementOpts} />
      <button>Checkout</button>
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
