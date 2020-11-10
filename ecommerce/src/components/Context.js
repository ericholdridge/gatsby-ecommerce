import React, { useState, createContext } from "react";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { Helmet } from "react-helmet";
import axios from "axios";

// Components
import Navbar from "../components/Navbar/Navbar";
export const AppState = createContext();

export const AppProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectPizzaSize, setSelectPizzaSize] = useState();
  const [price, setPrice] = useState();
  const [cardIndex, setCardIndex] = useState();
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  // Add the pizza item into an array of objects. We use this in the cart/checkout page to display the users items
  const addToCart = (pizza, price) => {
    // If the pizza size isn't undefined, add the item to the cart
    if (selectPizzaSize !== undefined) {
      setCartItems([
        ...cartItems,
        {
          description: pizza.description,
          image: pizza.image.asset.fixed,
          pizzaName: pizza.pizzaName,
          price: price,
          size: selectPizzaSize,
        },
      ]);
      // Once an item is added to the cart, set these state variables to undefined so the user can't add an item with no price or size.
      setPrice(undefined);
      setSelectPizzaSize(undefined);
      setCardIndex(undefined);
    }
  };

  // Add a pizza to the cart
  const handlePizzaState = (e, price, index) => {
    console.log(e);
    const pizzaValue = e.target.value;

    // If the pizza size includes an index, set the cardIndex to the index
    if (e.target.className.includes(index)) {
      setCardIndex(index);
    }

    if (pizzaValue === "Choose a size") {
      setPrice(undefined);
      setSelectPizzaSize(undefined);
      setCardIndex(undefined);
    }

    // Get the pizza size and price of the users choice and store them in state
    switch (pizzaValue) {
      case "Small":
        setSelectPizzaSize("Small");
        setPrice(price.Small);
        break;
      case "Medium":
        setSelectPizzaSize("Medium");
        setPrice(price.Medium);
        break;
      case "Large":
        setSelectPizzaSize("Large");
        setPrice(price.Large);
        break;
      default:
    }
  };

  // Checkout
  const handleFormSubmit = async ev => {
    console.log("Clicked");
    const {data: clientSecret} = await axios.post('/pages/api/payment_intents', {
      amount: price * 100
    })
    console.log(clientSecret);
  }

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
        totalPrice,
        setPrice,
        price,
        handlePizzaState,
        cardIndex,
        handleFormSubmit
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
