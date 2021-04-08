import React, { useContext } from "react";
import NavBarStyles from "../Styles/navBarStyle";
import { GlobalContext } from "../Context/GlobalState";
import HomeScreen from "./HomeScreen";
import Shop from "./Shop";
import Basket from "./Basket";

const NavBar = () => {
  const { view, cart } = useContext(GlobalContext);
  const [viewing, setViewing] = view;
  const [basket, setBasket] = cart;

  const viewHome = () => setViewing(<HomeScreen />);
  const viewShop = () => setViewing(<Shop />);
  const viewBasket = () => setViewing(<Basket />);

  return (
    <>
      <section>
        <ul style={NavBarStyles.ulStyle}>
          <li className="link" onClick={viewHome}>
            Plant Central
          </li>
          <li className="link" onClick={viewShop}>
            Shop Now
          </li>
          <li className="link" onClick={viewBasket}>
            Basket {basket.length > 0 ? basket.length : ""}
          </li>
        </ul>
      </section>
    </>
  );
};

export default NavBar;
