import React from "react";
import { Helmet } from "react-helmet";
import GlobalStyles from "../../GlobalStyles/GlobalStyles";
import Navbar from "../Navbar/Navbar";

const Layout = ({children}) => {
  return (
    <div>
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
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
