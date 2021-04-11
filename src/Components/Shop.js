import React, { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
import SortProducts from "./SortProducts";
import shopStyle from "../Styles/shopStyle";


const Shop = () => {
  const { cart, products, view } = useContext(GlobalContext);
  const [plants, setPlants] = products;
  const [basket, setBasket] = cart;

  const {
    card,
    imgStyle,
    nameStyle,
    descStyle,
    priceStyle,
    buttonStyle,
    itemAdded,
  } = shopStyle;

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
    setShowMessage(addToCartMessage)
    setTimeout(removeMessage, 3000)
    setBasket([...basket, { ...plants }]);
  };

  const addToCartMessage = (
    <h4 id="itemAdded" style={itemAdded}>Item added to Basket</h4>
  )

  const removeMessage = () => {
    setShowMessage([])
  }


  const plantDisplay = (plants) => (
    <div style={card}>
      <img src={plants.img} style={imgStyle} />
      <h3 style={nameStyle}> {plants.name}</h3>
      <p style={descStyle}>{plants.description}</p>
      <p style={priceStyle}>£{plants.price}</p>
      <div className="button" style={buttonStyle} onClick={() => addToCart(plants)}>
        Add to Cart
      </div>
    </div>
  );

  return (
    <>
      <SortProducts />

      <section
        className="sLayout"  
      >
        {plants.map(plantDisplay)}
       
          {showMessage}
        
      </section>
    </>
  );
};

export default Shop;
