/*
-Mimimal use of Stripe.js to verify card instantaneously
-
*/

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import Email from "./Email";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const CreditData = ({ handleBack, handleSum, updateEmail }) => {
  return (
    <div className="stripe">
      <Elements stripe={stripePromise}>
        <h5 className="mb-3">Please Enter your Card's Information</h5>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "26px",
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
      </Elements>
      <div className="email mt-3">
        <Email updateEmail={updateEmail} />
      </div>
      <button
        className="btn btn-outline-info btn-lg m-2"
        onClick={() => handleSum()}
      >
        Next
      </button>
      <button
        className="btn btn-outline-info btn-lg m-2"
        onClick={() => handleBack()}
      >
        Back
      </button>
    </div>
  );
};
export default CreditData;
