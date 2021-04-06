import React from "react";
import homeScreenStyle from "../Styles/homeScreenStyle";

const HomeScreen = () => {
  return (
    <>
      <section style={homeScreenStyle.homeScreenLayOut}>
        <div style={homeScreenStyle.divStyle}>
          <h2 style={homeScreenStyle.h1Style}>
            Indoor plants don’t just look good – they can make us feel good,
            too.
          </h2>
          <button>Buy Plants</button>
        </div>
        <div style={homeScreenStyle.imgContainerStyle}>
          <img
            style={homeScreenStyle.imgStyle}
            src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
        <div style={homeScreenStyle.imgContainerStyle}>
          <img
            style={homeScreenStyle.imgStyle}
            src="https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
        <div style={homeScreenStyle.divStyle}>
          <h2 style={homeScreenStyle.h1Style}>
            Indoor plants enhance the overall appearance of a space, boost
            moods, increase creativity, reduce stress, and eliminate air
            pollutants — making for a healthier, happier you.
          </h2>
          <button>Buy Plants</button>
        </div>

        <div style={(homeScreenStyle.divStyle, homeScreenStyle.quoteStyle)}>
          <h2>
            Great service at a great price, my plants were all delivered quickly
            and look wonderful. I'll be back for more soon!
          </h2>
          <p>-Ian Jones</p>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
