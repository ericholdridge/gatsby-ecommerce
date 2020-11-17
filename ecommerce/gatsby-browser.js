import React from "react";
import { Helmet } from "react-helmet";
import { AppProvider } from "../ecommerce/src/components/Context";
import GlobalStyles from "../ecommerce/src/GlobalStyles/GlobalStyles";

export const wrapRootElement = ({ element }) => {
  return (
    <AppProvider>
      {element}
    </AppProvider>
  );
};
