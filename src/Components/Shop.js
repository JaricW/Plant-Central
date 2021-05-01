import React, { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
import SortProducts from "./SortProducts";
import Footer from "./Footer"

const Shop = () => {
  const { cart, products, view } = useContext(GlobalContext);
  const [plants, setPlants] = products;
  const [basket, setBasket] = cart;

  const [showMessage, setShowMessage] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((resp) => resp.json())
      .then((data) => {
        setPlants(data.plants);
      })
      .catch((error) => console.log(error));
  }, []);

  const addToCart = (plants) => {
    setShowMessage(addToCartMessage);
    setTimeout(removeMessage, 3000);
    setBasket([...basket, { ...plants }]);
  };

  const addToCartMessage = (
    <h4
      id="itemAdded"
      className="fixed bottom-0 right-0 w-72 text-white bg-Green p-2"
    >
      Item added to Basket
    </h4>
  );

  const removeMessage = () => {
    setShowMessage([]);
  };

  const plantDisplay = (plants) => (
    <div className="flex items-center justify-between flex-col p-2 text-center bg-white border-2 border-black h-96 ">
      <img src={plants.img} className="max-w-full max-h-40 " />
      <h3 className="text-lg"> {plants.name}</h3>
      <p className="text-sm">{plants.description}</p>
      <p className="italic">£{plants.price}</p>
      <button
        className="text-white bg-Green rounded-lg p-2 hover:bg-white border-2 border-current hover:text-Green cursor-pointer"
        onClick={() => addToCart(plants)}
      >
        Add to Cart
      </button>
    </div>
  );

  return (
    <>
      <SortProducts />

      <section className="grid m-6 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16"
     >
        {plants.map(plantDisplay)}

        {showMessage}
      </section>
    <Footer />
    </>
  );
};

export default Shop;
