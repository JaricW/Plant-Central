import React, { createContext, useState } from "react";
import HomeScreen from "../Components/HomeScreen";


export const GlobalContext = createContext();


export const GlobalProvider = props => {
  const [viewing, setViewing] = useState([<HomeScreen />]);

  return (
    <GlobalContext.Provider value={[viewing, setViewing]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
