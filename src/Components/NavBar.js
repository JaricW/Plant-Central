import React, { useContext } from "react";
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
        <ul className="absolute w-full h-12 flex justify-center md:justify-start items-center bg-gray-900 font-RocknRoll text-center gap-4 p-2 text-lightGreen"
    >
          <li className="p-2 cursor-pointer hover:text-white" onClick={viewHome}>
            Plant Central
          </li>
          <li className="p-2 cursor-pointer hover:text-white" onClick={viewShop}>
            Shop Now
          </li>
          <li className="p-2 cursor-pointer hover:text-white" onClick={viewBasket}>
            Basket {basket.length > 0 ? `(${basket.length})` : ""}
          </li>
        </ul>
      </section>
    </>
  );
};

export default NavBar;
