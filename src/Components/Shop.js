import React, {useEffect, useState} from "react";

const Shop = () => {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        fetch("data.json")
          .then((resp) => resp.json())
          .then((data) => {
          setPlants(data.plants);
           
          })
          .catch((error) => console.log(error));
      }, []);
  return(
      <>
      <h1>Sort by</h1>
      <ul>
          <li>Price</li>
          <li>Size</li>
          <li>Name</li>
      </ul>
      <h2>Shop contents</h2>
      {plants.map(plants => <p>{plants.name}</p>)}
      </>
      );
};

export default Shop;
