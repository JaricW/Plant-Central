import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";


const PageView = () => {
  const {view} = useContext(GlobalContext)
  const [viewing, setViewing] = view;

  return <>{viewing}</>;
};

export default PageView;
