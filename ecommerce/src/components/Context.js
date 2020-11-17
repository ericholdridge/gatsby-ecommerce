import React, { useState, createContext } from "react";
import { Helmet } from "react-helmet";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { v4 as uuidv4 } from "uuid";
// Components
import Navbar from "../components/Navbar/Navbar";

const defaultState = {
  showCart: false,
  cartItems: [],
  selectPizzaSize: "",
  price: "",
  cardIndex: "",
  addText: "Add",
  showCheckoutSuccess: "",
  addToCart: () => {},
  handlePizzaState: () => {},
  handleRemoveItem: () => {},
  handleInputValues: () => {},
  inputValues: {
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  },
};

export const AppState = createContext(defaultState);

export const AppProvider = ({ children }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectPizzaSize, setSelectPizzaSize] = useState();
  const [price, setPrice] = useState();
  const [cardIndex, setCardIndex] = useState();
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);
  const [addText, setAddText] = useState("Add");
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState();

  // Add the pizza item into an array of objects. We use this in the cart/checkout page to display the users items
  const addToCart = (e, pizza, price, index) => {
    // If the pizza size isn't undefined, add the item to the cart
    if (selectPizzaSize !== undefined) {
      if (e.target.className.includes(index)) {
        setCardIndex(index);
        if (cardIndex == index) {
          setAddText("Added " + "✔");
          setTimeout(() => {
            setAddText("Add");
          }, 1200);
        }
      }
      setCartItems([
        ...cartItems,
        {
          description: pizza.description,
          image: pizza.image.asset.fixed,
          pizzaName: pizza.pizzaName,
          price: price,
          size: selectPizzaSize,
          itemId: uuidv4(),
        },
      ]);
      // Once an item is added to the cart, set these state variables to undefined so the user can't add an item with no price or size.
      // setPrice(undefined);
      setSelectPizzaSize(undefined);
    }
  };

  // Add a pizza to the cart
  const handlePizzaState = (e, price, index) => {
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

  // Remove a pizza item from the SideCart component
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.itemId !== id));
  };

  // Gets the input values of the checkout form and updates the state.
  const handleInputValues = (e) => {
    const value = e.target.value;
    setInputValues({
      ...inputValues,
      [e.target.name]: value,
    });
  };

  return (
    <AppState.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart: addToCart,
        showCart,
        setShowCart,
        selectPizzaSize,
        setSelectPizzaSize,
        totalPrice,
        setPrice,
        price,
        handlePizzaState: handlePizzaState,
        cardIndex,
        inputValues,
        setInputValues,
        inputValues,
        handleInputValues: handleInputValues,
        handleRemoveItem: handleRemoveItem,
        setAddText,
        addText,
        showCheckoutSuccess,
        setShowCheckoutSuccess,
        setInputValues,
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
