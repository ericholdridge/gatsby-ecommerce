import React, { useContext } from "react";
import { StaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { AppState } from "../Context";
import formatMoney from "../../utils/formatMoney";
import calculatePizzaPrice from "../../utils/calculatePizzaPrice";

const PizzaMenu = ({ addToCart }) => {
  const { selectPizzaSize, setSelectPizzaSize } = useContext(AppState);
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
              price
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
              </div>
              <form>
                <select
                  value={selectPizzaSize}
                  onChange={(e) => setSelectPizzaSize(e.target.value)}
                >
                  {["Small", "Medium", "Large"].map((size) => (
                    <option value={size}>
                      {size}{" "}
                      {formatMoney(calculatePizzaPrice(pizza.price, size))}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => addToCart(pizza, selectPizzaSize)}
                >
                  Add
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
  align-items: center;
  min-height: calc(65vh - 69px);
  .individualPizza {
    width: 100%;
    max-width: 400px;
    padding: 20px;
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
`;

export default PizzaMenu;
