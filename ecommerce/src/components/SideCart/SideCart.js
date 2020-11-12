import React, { useContext } from "react";
import { AppState } from "../Context";
import Img from "gatsby-image";
import styled from "styled-components";
import Button from "./Button";
import formatMoney from "../../utils/formatMoney";

const SideCart = () => {
  const { cartItems, showCart, handleRemoveItem } = useContext(AppState);
  return (
    <StyledCart className={showCart ? "cart showCart" : "cart hideCart"}>
      <div className="cartHeading">
        <h3>Cart Totals</h3>
      </div>
      {cartItems.length >= 0 ? (
        <div className="item-wrapper">
          {cartItems.map((item, index) => (
            <div key={index} className="item">
              <Img fixed={item.image} />
              <div className="wrap">
                <span>{item.pizzaName}</span>
                <span className="pizzaSize">Size: {item.size}</span>
                <span>{formatMoney(item.price)}</span>
                <button type="button" onClick={() => handleRemoveItem(item.itemId)}>
                  Remove item
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      <Button className="viewCart" btnText="VIEW SHOPPING CART" />
      <Button toPage="/checkout" className="checkout" btnText="CHECKOUT" />
    </StyledCart>
  );
};

const StyledCart = styled.div`
  transition: all 400ms ease-in-out;
  min-height: 100vh;
  &.hideCart {
    width: 100%;
    max-width: 400px;
    position: absolute;
    top: 0;
    right: -600px;
    bottom: 0;
    opacity: 0;
    background: #222222;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 20;
    .cartHeading {
      text-align: center;
      padding: 20px 0;
      h3 {
        color: #fdbc2c;
        font-size: 2rem;
      }
    }
    .item-wrapper {
      width: 100%;
      max-width: 320px;
      border-top: 1px solid #010202;
      box-shadow: 0 -1px 0 0 #383838;
      .item {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 600px;
        padding: 20px 0;
        border-bottom: 1px solid #010202;
        box-shadow: 0 1px 0 0 #383838;
        .gatsby-image-wrapper {
          height: 120px !important;
          width: 120px !important;
          img {
            height: 120px !important;
            width: 100%;
          }
        }
        span {
          display: block;
          color: #fdbc2c;
          font-size: 1.2rem;
          font-weight: 600;
          width: 100%;
          max-width: 190px;
        }
      }
    }
  }
  &.showCart {
    position: absolute;
    width: 100%;
    max-width: 400px;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    background: #222222;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    .cartHeading {
      text-align: center;
      padding: 20px 0;
      h3 {
        color: #fdbc2c;
        font-size: 2rem;
      }
    }
    .item-wrapper {
      width: 100%;
      max-width: 320px;
      max-height: 70vh;
      overflow-y: scroll;
      border-top: 1px solid #010202;
      box-shadow: 0 -1px 0 0 #383838;
      .item {
        display: flex;
        width: 100%;
        max-width: 600px;
        padding: 20px 0;
        border-bottom: 1px solid #010202;
        box-shadow: 0 1px 0 0 #383838;
        .gatsby-image-wrapper {
          height: 130px !important;
          width: 130px !important;
          img {
            height: 130px !important;
            width: 100%;
          }
        }
        .wrap {
          span {
            display: block;
            color: #fdbc2c;
            font-size: 1.2rem;
            font-weight: 600;
            width: 100%;
            max-width: 190px;
          }
          .pizzaSize {
            font-size: 0.9rem;
            color: whitesmoke;
          }
          button {
            background: none;
            border: none;
            color: #d94f2b;
            cursor: pointer;
            &:active {
              outline: none;
            }
          }
        }
      }
    }
  }
  .viewCart {
    width: 100%;
    max-width: 320px;
    background: transparent;
    border: 2px solid #fdbc2c;
    padding: 10px 30px;
    color: #fdbc2c;
    font-weight: bold;
    margin: 20px 0 0 0;
    text-decoration: none;
    text-align: center;
  }
  .checkout {
    width: 100%;
    max-width: 320px;
    margin: 10px 0 0 0;
    background: #fdbc2c;
    border: 2px solid #fdbc2c;
    padding: 10px 30px;
    color: #000;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
  }
`;

export default SideCart;
