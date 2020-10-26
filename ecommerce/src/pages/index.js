import React from "react";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { Helmet } from "react-helmet";
import HeroBackgroundSection from "../components/Hero/HeroBackgroundSection";

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200;300;500&family=Poppins:wght@100;300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/9808de19ba.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <HeroBackgroundSection />
    </>
  );
};

export default IndexPage;
