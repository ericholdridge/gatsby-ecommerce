import React, { useContext } from "react";
import styled from "styled-components";
import FormInput from "./FormInput/FormInput";
import axios from "axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { AppState } from "../Context";
import YourOrder from "./YourOrder";
import formatMoney from "../../utils/formatMoney";

const CheckoutForm = () => {
  const {
    inputValues,
    setInputValues,
    totalPrice,
    email,
    handleInputValues,
    showCheckoutSuccess,
    setShowCheckoutSuccess,
  } = useContext(AppState);

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
      setShowCheckoutSuccess(
        "Please review the information entered and try again."
      );

      console.log(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        setShowCheckoutSuccess(
          "Order placed, you will recieve an email shortly with your receipt!"
        );
        setInputValues("");
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
        <span className="message">{showCheckoutSuccess}</span>
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
    display: flex;
    flex-direction: column;
    button {
      background: #fdbc2c;
      border: none;
      margin: 10px 0 0 0;
      padding: 14px 0;
      color: #000;
      font-weight: 600;
      font-size: 1.2rem;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
    .message {
      color: white;
      margin: 20px 0 0 0;
    }
  }
`;

export default CheckoutForm;
