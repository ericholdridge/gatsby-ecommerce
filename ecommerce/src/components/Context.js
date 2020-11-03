import React, { useState, createContext, useEffect } from "react";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { Helmet } from "react-helmet";
// Components
import Navbar from "../components/Navbar/Navbar";

export const AppState = createContext();

export const AppProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectPizzaSize, setSelectPizzaSize] = useState("");

  const addToCart = (pizzaItem, pizzaSize) => {
    setCartItems([
      ...cartItems,
      {
        description: pizzaItem.description,
        image: pizzaItem.image.asset.fixed,
        pizzaName: pizzaItem.pizzaName,
        price: pizzaItem.price,
        size: pizzaSize,
      },
    ]);
  };


  return (
    <AppState.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        showCart,
        setShowCart,
        selectPizzaSize,
        setSelectPizzaSize,
      }}
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


