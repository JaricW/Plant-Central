import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import homeScreenStyle from "../Styles/homeScreenStyle";
import Shop from "./Shop";
import Quotes from "./Quotes";

const HomeScreen = () => {
  const { view } = useContext(GlobalContext);
  const [viewing, setViewing] = view;
  const {
    divStyle,
    h1Style,
    homeScreenLayOut,
    imgContainerStyle,
    imgStyle,
    quoteStyle,
  } = homeScreenStyle;
  const goToShop = () => setViewing(<Shop />);

  return (
    <>
      <section style={homeScreenLayOut}>
        <div style={divStyle}>
          <h2 style={h1Style}>
            Indoor plants don’t just look good – they can make us feel good,
            too.
          </h2>
          <div className="button" onClick={goToShop}>Buy Plants</div>
        </div>
        <div style={imgContainerStyle}>
          <img
            style={imgStyle}
            src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="5 green plants in a house"
          />
        </div>
        <div style={imgContainerStyle}>
          <img
            style={homeScreenStyle.imgStyle}
            src="https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="indoor cacti"
          />
        </div>
        <div style={divStyle}>
          <h2 style={h1Style}>
            Indoor plants enhance the overall appearance of a space, boost
            moods, increase creativity, reduce stress, and eliminate air
            pollutants — making for a healthier, happier you.
          </h2>
          <div className="button" onClick={goToShop}>Buy Plants</div>
        </div>

        <div style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
          <Quotes />
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
