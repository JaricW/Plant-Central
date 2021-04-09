import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
const Basket = () => {
  const { cart } = useContext(GlobalContext);
  const [basket, setBasket] = cart;
  const [totalCost, setTotalCost] = useState(0)

  const basketView = (plants) => (
      <div style={{display: "flex", gap: "2%", padding: "10px"}}>
          <p>{plants.name}</p>
          <p>£{plants.price}</p>
          <p>{plants.number}</p>
          <button onClick={() => removeFromCart(plants)}>Remove</button>
      </div>
  )

  useEffect(() => {
    let costs = [0]
    basket.map((plants) => (costs = [...costs, plants.price]));
    setTotalCost(costs.reduce((total, amount) => total + amount));
  }, [basket]);

  const removeFromCart = (plantsToRemove) => {
    setBasket(basket.filter(plants => plants !== plantsToRemove));
  }

  return (
    <>
    <section style={{height: "80vh", overflow: "scroll"}}>
        <div style={{display: "flex", gap: "30px"}}>
      <h1>Your Basket</h1>
      <h2>Total Cost: £{totalCost}</h2>
      <button>Pay Now</button>
      </div>
      {basket.map(basketView)}
      
    </section>
    </>
  );
};

export default Basket;
