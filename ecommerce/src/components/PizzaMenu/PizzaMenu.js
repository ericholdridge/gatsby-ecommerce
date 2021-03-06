import React, { useContext } from "react";
import { StaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { AppState } from "../Context";
import formatMoney from "../../utils/formatMoney";

const PizzaMenu = ({ addToCart }) => {
  const {
    handlePizzaState,
    price,
    cardIndex,
    setAddText,
    addText,
  } = useContext(AppState);

  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allSanityMenu {
            nodes {
              image {
                asset {
                  fixed(width: 200, height: 200) {
                    ...GatsbySanityImageFixed
                  }
                }
              }
              pizzaName
              description
              price {
                Large
                Medium
                Small
              }
            }
          }
        }
      `}
      render={(data) => (
        <StyledPizzaMenu>
          {data.allSanityMenu.nodes.map((pizza, index) => (
            <div key={index} className="individualPizza">
              <div className="img">
                <Img fixed={pizza.image.asset.fixed} />
              </div>
              <div className="pizzaInfo">
                <h3>{pizza.pizzaName}</h3>
                <p>{pizza.description}</p>
                {cardIndex === index && <span>{formatMoney(price)}</span>}
              </div>
              <form>
                <select
                  required
                  className={index}
                  onChange={(e) => handlePizzaState(e, pizza.price, index)}
                >
                  <option value="Choose a size">Choose a size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
                <button
                  className={index}
                  type="button"
                  onClick={(e) => addToCart(e, pizza, price, index)}
                >
                  {cardIndex === index ? addText : "Add"}
                  
                </button>
              </form>
            </div>
          ))}
        </StyledPizzaMenu>
      )}
    />
  );
};

const StyledPizzaMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-height: calc(65vh - 69px);
  margin: 20px 0 0 0;
  .individualPizza {
    width: 100%;
    max-width: 370px;
    padding: 20px 0;
    border: 2px solid transparent;
    transition: border 0.3s ease-in-out;
    cursor: pointer;
    .img {
      filter: drop-shadow(2px 4px 8px black);
      display: flex;
      justify-content: center;
    }
    .pizzaInfo {
      text-align: center;
      padding: 8px 6px 0 6px;
      h3 {
        color: #fdbc2c;
      }
      p {
        padding: 8px 0;
        color: whitesmoke;
        font-size: 0.9rem;
      }
      span {
        display: block;
        color: #d94f2b;
      }
    }
    &:hover {
      border: 2px solid #fdbc2c;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4), 0 12px 40px 0 rgba(0, 0, 0, 0.19);
    }
    form {
      display: flex;
      justify-content: center;
      padding: 10px 0 0 0;
      select {
        padding: 0 6px;
        background: transparent;
        border: 2px solid #fdbc2c;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        color: whitesmoke;
        &:focus {
          outline: none;
        }
      }
      button {
        padding: 6px 10px;
        cursor: pointer;
        font-weight: 600;
        background: #fdbc2c;
        border: 2px solid #fdbc2c;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        &:focus {
          outline: none;
        }
      }
    }
  }
  @media (max-width: 824px) {
    flex-direction: column;
  }
  @media (min-width: 1040px) and (max-width: 1233px) {
    .individualPizza {
      max-width: 300px;
    }
  }

`;

export default PizzaMenu;
