import React, { useState, createContext } from "react";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { Helmet } from "react-helmet";
// Components
import Navbar from "../components/Navbar/Navbar";

export const AppState = createContext();

export const AppProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Adds an item to the cart
  const addToCart = (menuItem) => {
    setCartItems([...cartItems, menuItem]);
  };
  return (
    <AppState.Provider
      value={{ cartItems, setCartItems, addToCart, showCart, setShowCart }}
    >
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
    </AppState.Provider>
  );
};
