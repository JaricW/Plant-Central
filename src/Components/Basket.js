import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
const Basket = () => {
  const { cart } = useContext(GlobalContext);
  const [basket, setBasket] = cart;
  const [totalCost, setTotalCost] = useState(0);

  const basketView = (plants) => (
    <div
      style={{
        display: "flex",
        width: "60%",
        gap: "2%",
        padding: "10px",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        border: "1px solid",
        height: "8vh",
        
      }}
    >
      <div style={{width: "100px"}}><h3>{plants.name}</h3></div>
      <img style={{maxHeight: "100%"}} src={plants.img}/>
      <p>£{plants.price}</p>
      <p>{plants.number}</p>
      <div className="button-secondary" style={{padding: "5px", borderRadius: "5px"}} onClick={() => removeFromCart(plants)}>Remove</div>
    </div>
  );

  useEffect(() => {
    let costs = [0];
    basket.map((plants) => (costs = [...costs, plants.price]));
    setTotalCost(costs.reduce((total, amount) => total + amount));
  }, [basket]);

  const removeFromCart = (plantsToRemove) => {
    setBasket(basket.filter((plants) => plants !== plantsToRemove));
  };

  return (
    <>
      <section style={{ height: "80vh", overflow: "scroll" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h1>Your Basket</h1>
          <div style={{display: "flex", gap: "10px"}}>
          <h2>Total Cost: £{totalCost}</h2>
          <div style={{display: "flex", alignItems: "center"}}>
          <div className="button">Pay Now</div>
          </div>
          </div> 
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        {basket.map(basketView)}
        </div>
      </section>
    </>
  );
};

export default Basket;
