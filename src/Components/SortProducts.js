import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import sortProductsStyle from "../Styles/sortProductsStyle";

const SortProducts = () => {
  const { products } = useContext(GlobalContext);
  const [plants, setPlants] = products;

  const {buttonStyle, buttonHolderStyle, layoutStyle} = sortProductsStyle;

  const sortPriceLow = () => {
    setPlants(
      [...plants].sort(function (a, b) {
        return a.price - b.price;
      })
    );
  };

  const sortPriceHigh = () => {
    setPlants(
      [...plants].sort(function (a, b) {
        return b.price - a.price;
      })
    );
  };

  return (
    <section style={layoutStyle}>
      <h1>Sort by</h1>
      <div style={buttonHolderStyle}>
      <div className="button-secondary" style={buttonStyle} onClick={sortPriceLow}>Price (low to high)</div>
      <div className="button-secondary" style={buttonStyle} onClick={sortPriceHigh}>Price (high to low)</div>
      </div>
    </section>
  );
};

export default SortProducts;
