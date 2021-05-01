import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { cost } = useContext(GlobalContext);
  const [totalCost, setTotalCost] = cost;

  const handleSubmit = async (event) => {
    // Block native form submission.
    alert(
      "Thank you for testing out my website! Your card has not been charged."
    );
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-5/6 md:w-3/6 bg-white rounded-md border-2 border-black p-4"
      >
        <section>
          <div className="flex flex-col items-center gap-2 ">
            <p className="text-lg">Your Name</p>
            <input
              className="border-2 rounded-md border-black"
              type="text"
              required
            />
            <p className="text-lg">Email</p>
            <input
              className="border-2 rounded-md border-black"
              type="email"
              required
            />
            <p className="text-lg">Street Address</p>
            <input
              className="border-2 rounded-md border-black"
              type="text"
              required
            />
            <p className="text-lg">City</p>
            <input
              className="border-2 rounded-md border-black"
              type="text"
              required
            />
            <p className="text-lg">Postcode</p>
            <input
              className="border-2 rounded-md border-black"
              type="text"
              required
            />
          </div>
        </section>
        <div className="m-auto p-6">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg">Total to pay: £{totalCost}</p>
          <button
            type="submit"
            className="text-white bg-Green rounded-lg p-2 hover:bg-white border-2 border-current hover:text-Green cursor-pointer"
            disabled={!stripe}
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const StripeAppTest = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeAppTest;
