import React from "react";
import { AppProvider } from "../ecommerce/src/components/Context";

export const wrapRootElement = ({ element, props }) => {
  return <AppProvider>{element}</AppProvider>;
};
