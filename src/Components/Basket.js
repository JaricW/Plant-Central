import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
import basketStyle from "../Styles/basketStyle"
import StripeAppTest from "../Stripe/Card-Minimal"

const Basket = () => {
  const { cart, view, cost } = useContext(GlobalContext);
  const [basket, setBasket] = cart;
  const [viewing, setViewing] = view;
  const [totalCost, setTotalCost] = cost;

  const {itemStyle, divStyle, imgStyle, buttonStyle, titleHolderStyle, itemHolderStyle, costHolderStyle, buttonHolderStyle} = basketStyle;

  const basketView = (plants) => (
    <div
      style={itemStyle}
    >
      <div style={divStyle}><h3>{plants.name}</h3></div>
      <img style={imgStyle} alt="img of plant" src={plants.img}/>
      <p>£{plants.price}</p>
      <p>{plants.number}</p>
      <div className="button-secondary" style={buttonStyle} onClick={() => removeFromCart(plants)}>Remove</div>
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

  const payNow = () => {
    setViewing(<StripeAppTest />)
  }

  return (
    <>
      <section >
        <div style={titleHolderStyle}>
          <h1>Your Basket</h1>
          <div style={costHolderStyle}>
          <h2>Total Cost: £{totalCost}</h2>
          <div style={buttonHolderStyle}>
          <div className="button" onClick={payNow}>Pay Now</div>
          </div>
          </div> 
        </div>
        <div style={itemHolderStyle}>
        {basket.map(basketView)}
        </div>
      </section>
    </>
  );
};

export default Basket;
