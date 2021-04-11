import React, {useContext} from "react";
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
    alert("Thank you for testing out my website! Your card has not been charged.");
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "white",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <section >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <p>Your Name</p>
            <input type="text" required />
            Your Email
            <input type="email" required />

            Street Address
            <input type="text" required />
            City
            <input type="text" required />
            Postcode
            <input type="text" required />
         </div>
        </section>
        <div style={{width: "80%", margin: "auto", padding: "20px"}}>
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
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <p>Total to pay: £{totalCost}</p>
        <button type="submit" style={{width: "50%",}} disabled={!stripe}>
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
