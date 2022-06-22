import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";
import StripeCheckout from "react-stripe-checkout";
const stripePublicKey =
  "pk_test_51KyFwQLyrIx7tSV8DRksQQiES0dS8k9vdL1Gvb4fN9qnYZedfONrx5t44ZVwFhE8J5cbxoACp8eX7dDAJKvwF27z00t6N9DciP";

const CartContent = () => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (mark) => {
    mark === "plus"
      ? setQuantity(quantity + 1)
      : quantity > 1 && setQuantity(quantity - 1);
  };

  const cart = useSelector((state) => state.cart);
  //Stripe checkout
  const [stripeToken, setStripeToken] = useState(null);

  let delivery = 5.0;
  let discount = 0.0;
  let total = cart.total * quantity - discount + delivery;
  //Stripe checkout state
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: total,
        });
        navigate("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate, cart?.total]);

  return (
    <div className="cart-container">
      <div className="cart-link-back">
        <a href="/products">
          <span className="un">Keep shopping</span>
        </a>
      </div>
      <div className="cart-title">
        <h5>Your bag</h5>
      </div>
      <div className="cart-table">
        {cart.quantity === 0 ? null : (
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
        )}
        {cart.quantity === 0 ? (
          <div className="empty-bag">
            <h1>Add items to your cart</h1>
          </div>
        ) : (
          cart.cart?.map((cart, id) => (
            <div className="cart-table-item" key={id}>
              <div className="product-description">
                <img
                  src={`/Assets/Product/${cart.image[0]}.png`}
                  alt="product cart"
                  width="100px"
                />
                <h2>{cart.title}</h2>
              </div>
              <div className="product-variable cart-small-box">
                <h2>{cart.size}</h2>
              </div>
              <h2>{cart.color}</h2>
              <div className="product-quantity">
                <div
                  className="cart-small-box blue-box"
                  onClick={() => handleQuantity("plus")}
                >
                  <span>+</span>
                </div>
                <div className="cart-small-box">
                  <h2>{quantity}</h2>
                </div>
                <div
                  className="cart-small-box gray-box"
                  onClick={() => handleQuantity("minus")}
                >
                  <span>-</span>
                </div>
              </div>
              <h2>{cart.price}</h2>
            </div>
          ))
        )}
      </div>
      <div className="cart-bottom-boxes">
        <div className="cart-subtotal cart-big-box">
          <h4>Subtotal: </h4>
          <h4>${(cart.total * quantity).toFixed(2)}</h4>
        </div>
        <div className="cart-discount cart-big-box">
          <h4>Discount: </h4>
          <h4>${discount.toFixed(2)}</h4>
        </div>
        <div className="cart-delivery cart-big-box">
          <h4>Delivery: </h4>
          <h4>
            $
            {cart.quantity === 0
              ? (delivery = 0.0).toFixed(2)
              : delivery.toFixed(2)}
          </h4>
        </div>
        <div className="cart-total cart-big-box">
          <h4>Total: </h4>
          <h4>
            ${cart.quantity === 0 ? (total = 0).toFixed(2) : total.toFixed(2)}
          </h4>
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
            description={`Your total is $${total.toFixed(2)}`}
            amount={total * 100}
            token={onToken}
            stripeKey={stripePublicKey}
            disabled={cart.quantity === 0 ? true : false}
          >
            <button
              type="submit"
              className={cart.quantity === 0 ? "disabled-button" : ""}
            >
              Checkout
            </button>
          </StripeCheckout>
        )}
      </div>
    </div>
  );
};

export default CartContent;
