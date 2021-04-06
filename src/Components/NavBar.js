import React, { useState, useContext } from "react";
import NavBarStyles from "../Styles/navBarStyle";
import {GlobalContext} from '../Context/GlobalState'
import HomeScreen from "./HomeScreen";
import Shop from "./Shop";

const NavBar = () => {
  const [pcStyle, setpcStyle] = useState(NavBarStyles.liStyle);
  const [snStyle, setsnStyle] = useState(NavBarStyles.liStyle);

  const [viewing, setViewing] = useContext(GlobalContext)

 const viewHome = () => {setViewing(<HomeScreen />)}
  const viewShop = () => {setViewing(<Shop />)}

  const pcHover = () =>
    pcStyle === NavBarStyles.liStyle
      ? setpcStyle(NavBarStyles.liHoverStyle)
      : setpcStyle(NavBarStyles.liStyle);

      const snHover = () =>
    snStyle === NavBarStyles.liStyle
      ? setsnStyle(NavBarStyles.liHoverStyle)
      : setsnStyle(NavBarStyles.liStyle);



  return (
    <>
    
      <section>
        <ul style={NavBarStyles.ulStyle}>
          <li style={pcStyle} onMouseEnter={pcHover} onMouseLeave={pcHover} onClick={viewHome}>
            Plant Central
          </li>
          <li style={snStyle} onMouseEnter={snHover} onMouseLeave={snHover} onClick={viewShop} >Shop Now</li>
        </ul>
      </section>

    </>
  );
};

export default NavBar;
