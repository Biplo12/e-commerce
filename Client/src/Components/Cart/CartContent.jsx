import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
const stripePublicKey =
  "pk_test_51KyFwQLyrIx7tSV8DRksQQiES0dS8k9vdL1Gvb4fN9qnYZedfONrx5t44ZVwFhE8J5cbxoACp8eX7dDAJKvwF27z00t6N9DciP";

const CartContent = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3001/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 35500,
          }
        );
        navigate("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);
  return (
    <div className="cart-container">
      <div className="cart-link-back">
        {" "}
        <a href="/products">
          <span className="un">Keep shopping</span>
        </a>
      </div>
      <div className="cart-title">
        <h5>Your bag</h5>
      </div>
      <div className="cart-table">
        <div className="cart-table-headlines">
          <div>
            <h3>Description</h3>
          </div>
          <div>
            <h3>Size</h3>
          </div>
          <div>
            <h3>Color</h3>
          </div>
          <div>
            <h3>Quantity</h3>
          </div>
          <div>
            <h3>Price</h3>
          </div>
        </div>
        <div className="cart-table-item">
          <div className="product-description">
            <img
              src="./Assets/Product/example-1.png"
              alt="product cart"
              width="100px"
            />
            <h2>Bowling T-shirt</h2>
          </div>
          <div className="product-variable cart-small-box">
            <h2>L</h2>
          </div>
          <h2>Black</h2>
          <div className="product-quantity">
            <div className="cart-small-box blue-box">
              <span>+</span>
            </div>
            <div className="cart-small-box">
              <h2>1</h2>
            </div>
            <div className="cart-small-box gray-box">
              <span>-</span>
            </div>
          </div>
          <h2>$355</h2>
        </div>
      </div>
      <div className="cart-bottom-boxes">
        <div className="cart-discount cart-big-box">
          <h4>Discount: </h4>
          <h4>$0.00 </h4>
        </div>
        <div className="cart-delivery cart-big-box">
          <h4>Delivery: </h4>
          <h4>$0.00 </h4>
        </div>
        <div className="cart-subtotal cart-big-box">
          <h4>Subtotal: </h4>
          <h4>$355.00 </h4>
        </div>
        <div className="cart-total cart-big-box">
          <h4>Total: </h4>
          <h4>$355.00 </h4>
        </div>
      </div>
      <div className="cart-bottom-checkout">
        {stripeToken ? (
          <button>Processing. Please wait...</button>
        ) : (
          <StripeCheckout
            name="E-commerce"
            billingAddress
            shippingAddress
            description="Your total is $355"
            amount={35500}
            token={onToken}
            stripeKey={stripePublicKey}
          >
            <button type="submit">Checkout</button>
          </StripeCheckout>
        )}
      </div>
    </div>
  );
};

export default CartContent;
