import React, { createContext, useState } from "react";
import HomeScreen from "../Components/HomeScreen";


export const GlobalContext = createContext();


export const GlobalProvider = props => {
  const [viewing, setViewing] = useState([<HomeScreen />]);
  const [basket, setBasket] = useState([]);

  return (
    <GlobalContext.Provider value={{view: [viewing, setViewing], cart: [basket, setBasket]}}>
      {props.children}
    </GlobalContext.Provider>
  );
};
