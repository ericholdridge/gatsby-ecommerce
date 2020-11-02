import React, { useContext } from "react";
import { StaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { AppState } from "../Context";

const PizzaMenu = ({ addToCart }) => {
  const {selectPizza, setSelectPizza} = useContext(AppState)
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
                <span>${pizza.price}</span>
              </div>
              <form>
                <select value={selectPizza} onChange={(e) => setSelectPizza(e.target.value)}>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
                <button type="button" onClick={() => addToCart(pizza, selectPizza)}>
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
      display: flex;
      justify-content: center;
    }
    .pizzaInfo {
      text-align: center;
      padding: 0 6px;
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
      button {
        padding: 6px 30px;
        margin: 0 0 0 4px;
        cursor: pointer;
      }
    }
  }
`;

export default PizzaMenu;
