import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";


const PageView = () => {
  const [viewing, setViewing] = useContext(GlobalContext);

  return <>{viewing}</>;
};

export default PageView;
