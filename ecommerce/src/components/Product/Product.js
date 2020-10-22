import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Product = ({ products }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <StyledProduct>
      {products.allSanityProducts.nodes.map((product) => (
        <div className="productPhone">
          <div className="productImage">
            <Img fixed={product.imageVariants[activeImage].asset.fixed} />
          </div>
          <div className="productColorPicker">
            {product.colors.map((color, index) => (
              <div
                className="colorWrapper"
                key={index}
                onClick={() => setActiveImage(index)}
              >
                <Img fixed={color.asset.fixed} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </StyledProduct>
  );
};

const StyledProduct = styled.div`
  width: 100%;
  .productPhone {
    display: flex;
    align-items: center;
    .productColorPicker {
      width: 100%;
      max-width: 400px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .colorWrapper {
        width: 100%;
        max-width: 190px;
        padding: 40px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #ccc;
        margin: 8px 0;
        cursor: pointer;
      }
    }
  }
`;

export default Product;
