import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
const stripePublicKey =
  "pk_test_51KyFwQLyrIx7tSV8DRksQQiES0dS8k9vdL1Gvb4fN9qnYZedfONrx5t44ZVwFhE8J5cbxoACp8eX7dDAJKvwF27z00t6N9DciP";
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        navigate("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);
  return (
    <>
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="E-commerce"
          billingAddress
          shippingAddress
          description="Your total is $20"
          amount={2000}
          token={onToken}
          stripeKey={stripePublicKey}
        >
          <button>Pay</button>
        </StripeCheckout>
      )}
    </>
  );
};

export default Pay;
