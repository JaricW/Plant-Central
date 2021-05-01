import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const SortProducts = () => {
  const { products } = useContext(GlobalContext);
  const [plants, setPlants] = products;


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
    <section className="pt-12 p-2 flex flex-col items-center">
      <h1 className="text-3xl">Sort by</h1>
      <div className="flex p-4 gap-2">
        <button
          className="text-white bg-blue-500 rounded-lg p-2 hover:bg-white border-2 border-current hover:text-blue-500 cursor-pointer"
          onClick={sortPriceLow}
        >
          Price (low to high)
        </button>
        <button
          className="text-white bg-blue-500 rounded-lg p-2 hover:bg-white border-2 border-current hover:text-blue-500 cursor-pointer"
          onClick={sortPriceHigh}
        >
          Price (high to low)
        </button>
      </div>
    </section>
  );
};

export default SortProducts;
