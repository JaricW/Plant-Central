import React, { useState, useEffect } from "react";

const Quotes = () => {

  const firstQuote = (
    <div className="p-4 flex text-center flex-col justify-center items-center bg-yellow-100 text-xl">
      <h2>
        Great service at a great price, my plants were all delivered quickly and
        look wonderful. I'll be back for more soon!
      </h2>
      <p className="text-lg">-Ian Jones</p>
    </div>
  );

  const secondQuote = (
    <div className="p-4 flex text-center flex-col justify-center items-center bg-yellow-100 text-xl">
      <h2>
        When I bought my first house plant from Plant Central I honestly had no
        idea what I was doing, but they lovely lady I spoke to over email
        couldn't have been more helpful and I know have my own Swiss Cheese
        plant!
      </h2>
      <p className="text-lg">-Jane Knightley</p>
    </div>
  );

  const thirdQuote = (
    <div className="p-4 flex text-center flex-col justify-center items-center bg-yellow-100 text-xl">
      <h2>
        I've been coming to Plant Central for all my indoor plants for the last
        5 years, they've always got such a great stock at an unbeatable price!
      </h2>
      <p className="text-lg">-David Bones</p>
    </div>
  );

  const [customerQuote, setCustomerQuote] = useState(firstQuote);

  useEffect(() => {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        setCustomerQuote(firstQuote);
        break;
      case 1:
        setCustomerQuote(secondQuote);
        break;
      case 2:
        setCustomerQuote(thirdQuote);
        break;
      default:
        console.log("error");
        break;
    }
  }, []);

  return <>{customerQuote}</>;
};

export default Quotes;
