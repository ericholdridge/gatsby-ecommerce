import React, { useContext } from "react";
import styled from "styled-components";
import formatMoney from "../../utils/formatMoney";
import { AppState } from "../Context";

const YourOrder = () => {
  const { cartItems, totalPrice, handleSubmit } = useContext(AppState);
  return (
    <StyledYourOrder>
      <h2>Your Order</h2>
      <div className="productTotal">
        <span>PRODUCT</span>
        <span>Total</span>
      </div>
      <div className="orderItems">
        {cartItems.map((item) => (
          <div className="item">
            <span>{item.pizzaName}</span>
            <span>{formatMoney(item.price)}</span>
          </div>
        ))}
      </div>
      <div className="orderTotal">
        <span>Order Total</span>
        <span>{formatMoney(totalPrice)}</span>
      </div>
    </StyledYourOrder>
  );
};

const StyledYourOrder = styled.div`
  h2 {
    color: #fdbc2c;
    font-size: 2.3rem;
  }
  .productTotal {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #383838;
    span {
      display: block;
      color: whitesmoke;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
  .orderItems {
    padding: 20px 0;
    border-bottom: 1px solid #383838;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 4px 0;
      span {
        display: block;
        color: whitesmoke;
        font-weight: 600;
        font-size: 0.9rem;
      }
    }
  }
  .orderTotal {
    display: flex;
    justify-content: space-between;
    color: #d94f2b;
    font-size: 0.9rem;
    padding: 20px 0 10px 0;
  }
  .placeOrder {
    width: 100%;
    margin: 14px 0 0 0;
    cursor: pointer;
    .placeOrderBtn {
      background: #fdbc2c;
      display: block;
      text-align: center;
      padding: 8px 0;
      font-weight: 600;
    }
  }
  @media (max-width: 824px) {
    h2 {
      font-size: 2rem;
      text-align: center;
    }
  }
`;

export default YourOrder;
