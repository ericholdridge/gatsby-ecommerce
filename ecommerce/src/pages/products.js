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
        <p>This is the products page.</p>
        <Product products={products} />
      </Container>
    </section>
  );
};

export const query = graphql`
  query {
    allSanityProducts {
      nodes {
        image {
          asset {
            fixed {
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
