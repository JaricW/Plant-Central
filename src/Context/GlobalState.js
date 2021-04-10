import React, { createContext, useState } from "react";
import HomeScreen from "../Components/HomeScreen";


export const GlobalContext = createContext();


export const GlobalProvider = props => {
  const [viewing, setViewing] = useState([<HomeScreen />]);
  const [basket, setBasket] = useState([]);
  const [plants, setPlants] = useState([]);

  return (
    <GlobalContext.Provider value={{view: [viewing, setViewing], cart: [basket, setBasket], products: [plants, setPlants]}}>
      {props.children}
    </GlobalContext.Provider>
  );
};
