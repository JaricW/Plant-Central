import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Shop from "./Shop";
import Quotes from "./Quotes";
import Footer from "./Footer";

const HomeScreen = () => {
  const { view } = useContext(GlobalContext);
  const [viewing, setViewing] = view;
  const goToShop = () => setViewing(<Shop />);

  return (
    <>
      <section className="grid md:grid-cols-2 pt-12">
        <div className="m-4 p-16 flex flex-col justify-center items-center gap-4">
          <h2 className="text-center text-2xl">
            Indoor plants don’t just look good – they can make us feel good,
            too.
          </h2>
          <button
            className="text-white bg-Green rounded-lg p-2 hover:bg-white border-2 border-current hover:text-Green cursor-pointer"
            onClick={goToShop}
          >
            Buy Plants
          </button>
        </div>
        <div className="max-w-full m-4 flex justify-center items-center">
          <img
            src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="5 green plants in a house"
          />
        </div>
        <div className="max-w-full m-4 flex justify-center items-center">
          <img
            src="https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="indoor cacti"
          />
        </div>
        <div className="m-4 p-16 flex flex-col justify-center items-center gap-4">
          <h2 className="text-center text-2xl">
            Indoor plants enhance the overall appearance of a space, boost
            moods, increase creativity, reduce stress, and eliminate air
            pollutants — making for a healthier, happier you.
          </h2>
          <button
            className="text-white bg-Green rounded-lg p-2 hover:bg-white border-2 border-current hover:text-Green cursor-pointer"
            onClick={goToShop}
          >
            Buy Plants
          </button>
        </div>
      </section>
      <div className="h-60 md:h-40">
        <Quotes />
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
