import React from "react";
import styled from "styled-components";

const CheckoutForm = () => {
  return (
    <StyledCheckoutForm>
      <h3>Billing Details</h3>
      <div className="form-group">
        <div className="wrap">
          <label>First Name*</label>
          <input type="text" />
        </div>
        <div className="wrap">
          <label>Last Name*</label>
          <input type="text" />
        </div>
      </div>
      <div className="form-group-col">
        <div className="wrap">
          <label htmlFor="">Company Name</label>
          <input type="text" />
        </div>
      </div>
      <div className="form-group-col">
        <div className="wrap">
          <label>Address</label>
          <input type="text" placeholder="Street Address" />
        </div>
        <div className="wrap">
          <input
            type="text"
            placeholder="Apartment, suite, unit etc. (Optional)"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="wrap">
          <label htmlFor="">City</label>
          <input type="text" />
        </div>
      </div>
      <div className="form-group">
        <div className="wrap">
          <label>Email*</label>
          <input type="text" />
        </div>
        <div className="wrap">
          <label>Phone</label>
          <input type="number" />
        </div>
      </div>
    </StyledCheckoutForm>
  );
};

const StyledCheckoutForm = styled.form`
  width: 100%;
  max-width: 700px;
  min-height: 60vh;
  padding: 40px 0 0 0;
  h3 {
    color: #fdbc2c;
    font-size: 2.4rem;
  }
  .form-group {
    display: flex;
    margin: 14px 0;
    .wrap {
      width: 100%;
      display: flex;
      flex-direction: column;
      label {
        color: whitesmoke;
      }
      input {
        height: 40px;
        border-radius: 0;
        border: 1px solid whitesmoke;
        background: transparent;
      }
    }
  }
  .wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .form-group-col {
    .wrap {
      display: flex;
      flex-direction: column;
      margin: 10px 0;
      label {
        color: whitesmoke;
      }
      input {
        height: 40px;
        border-radius: 0;
        border: 1px solid whitesmoke;
        background: transparent;
      }
    }
  }
`;

export default CheckoutForm;
