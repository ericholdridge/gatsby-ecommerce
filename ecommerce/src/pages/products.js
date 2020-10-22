import React from "react";
import Container from "../components/ReusableComponents/Container";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar/Navbar";
import Product from "../components/Product/Product";

const ProductsPage = ({ data }) => {
  const products = data;
  return (
    <section className="products">
      <Navbar />
      <Container>
        <Product products={products} />
      </Container>
    </section>
  );
};

export const query = graphql`
  query {
    allSanityProducts {
      nodes {
        imageVariants {
          asset {
            fixed {
              ...GatsbySanityImageFixed
            }
          }
        }
        colors {
          asset {
            fixed(width: 40, height: 40) {
              ...GatsbySanityImageFixed
            }
          }
        }
        name
        price
      }
    }
  }
`;

export default ProductsPage;
