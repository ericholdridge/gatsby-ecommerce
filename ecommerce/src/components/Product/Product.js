import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const Product = ({ products }) => {
  // handle add to cart function
  const handleAddToCart = (product) => {
    console.log(product);
  };
  return (
    <StyledProduct>
      {products.allSanityProducts.nodes.map((product, index) => (
        <div key={index}>
          <div>
            <Img fixed={product.image.asset.fixed} />
          </div>
          <div>
            <p>{product.name}</p>
            <span>{product.price}</span>
          </div>
          <div className="cart">
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </StyledProduct>
  );
};

const StyledProduct = styled.div`
  width: 100%;
  max-width: 400px;
`;

export default Product;
