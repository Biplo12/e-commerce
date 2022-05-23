import React from "react";

const CartContent = () => {
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
            <h3>Remove</h3>
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
            <h2>Bowling T-shirt adsd</h2>
          </div>
          <div className="cart-small-box">
            <h2>L</h2>
          </div>
          <h2>Black</h2>
          <div className="product-quantity">
            <div className="cart-small-box">
              <span>+</span>
            </div>
            <div className="cart-small-box">
              <h2>1</h2>
            </div>
            <div className="cart-small-box">
              <span>-</span>
            </div>
          </div>
          <div className="cart-small-box">
            <h2>x</h2>
          </div>
          <h2>$355</h2>
        </div>
      </div>
      <div className="cart-bottom-boxes">
        <div className="cart-boxes-wrapper">
          <div className="cart-discount big-box">
            <h4>Discount: </h4>
            <h4>$0.00 </h4>
          </div>
          <div className="cart-delivery big-box">
            <h4>Delivery: </h4>
            <h4>$0.00 </h4>
          </div>
          <div className="cart-subtotal big-box">
            <h4>Subtotal: </h4>
            <h4>$355.00 </h4>
          </div>
          <div className="cart-total big-box">
            <h4>Total: </h4>
            <h4>$355.00 </h4>
          </div>
        </div>
      </div>
      <div className="cart-bottom-buttons">
        <div className="cart-bottom-input">
          <p>If you have a promotion code, please enter it below:</p>
          <input type="text" placeholder="Enter your code here" />
          <button type="submit">
            <span className="un"> Apply Discount</span>
          </button>
        </div>
        <div className="cart-bottom-checkout">
          <button type="submit">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
