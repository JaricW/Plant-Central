import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
import StripeAppTest from "../Stripe/Card-Minimal";
import Footer from "../Components/Footer";

const Basket = () => {
  const { cart, view, cost } = useContext(GlobalContext);
  const [basket, setBasket] = cart;
  const [viewing, setViewing] = view;
  const [totalCost, setTotalCost] = cost;

  const basketView = (plants) => (
    <div className="flex h-16 w-5/6 p-2 items-center justify-around border-2 bg-white">
      <div className="w-12 text-center">
        <h3>{plants.name}</h3>
      </div>
      <img className="max-h-full" alt="img of plant" src={plants.img} />
      <p>£{plants.price}</p>
      <p>{plants.number}</p>
      <button
        className="text-white bg-yellow-700 rounded-lg p-2 hover:bg-white border-2 border-current hover:text-yellow-700 cursor-pointer"
        onClick={() => removeFromCart(plants)}
      >
        Remove
      </button>
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
    setViewing(<StripeAppTest />);
  };

  return (
    <>
      <section className="h-screen">
        <div className="flex flex-col items-center justify-center p-2 pt-14">
          <h1 className="text-3xl">Your Basket</h1>
          <div className="flex items-center gap-2 p-2">
            <h2 className="text-lg">Total Cost: £{totalCost}</h2>

            <button
              className="text-white bg-Green rounded-lg p-2 hover:bg-white border-2 border-current hover:text-Green cursor-pointer"
              onClick={payNow}
            >
              Pay Now
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center h-3/6 overflow-y-auto">
          {basket.map(basketView)}
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Basket;
