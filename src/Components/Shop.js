import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Shop = () => {
  const [plants, setPlants] = useState([]);
  const { cart } = useContext(GlobalContext);
  const [basket, setBasket] = cart;

  useEffect(() => {
    fetch("data.json")
      .then((resp) => resp.json())
      .then((data) => {
        setPlants(data.plants);
      })
      .catch((error) => console.log(error));
  }, []);


  const addToCart = (plants) => {
    setBasket([...basket, {...plants}]);
  };

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

  const sortName = () => {
    setPlants([...plants].sort((a, b) => (a.name > b.name ? 1 : -1)));
  };

  const plantDisplay = (plants) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        boxShadow: "2px 2px",
        backgroundColor: "aquamarine",
        padding: "10px",
      }}
    >
      <img src={plants.img} style={{ maxHeight: "30%" }} />
      <p>{plants.name}</p>
      <p>£{plants.price}</p>
      <button onClick={() => addToCart(plants)}>Add to Cart</button>
    </div>
  );

  return (
    <>
      <section style={{ display: "flex" }}>
        <h1>Sort by</h1>
        <button onClick={sortPriceLow}>Low Price</button>
        <button onClick={sortPriceHigh}>High Price</button>
        <button onClick={sortName}>Name</button>
      </section>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "30% 30% 30%",
          gap: "5%",
          gridTemplateRows: "40% 40% 40% 40%",
          height: "100vh",
          marginLeft: "5%",
          marginRight: "5%",
          overflow: "scroll"
        }}
      >
        {plants.map(plantDisplay)}
      </section>
    </>
  );
};

export default Shop;
