// globalStyles.js
import { createGlobalStyle } from "styled-components";
import CheckoutPatternImg from "../images/pattern-body.jpg";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Crimson Pro', serif;
    font-family: 'Poppins', sans-serif;
    background: url("${CheckoutPatternImg}");
  }
`;

export default GlobalStyle;
