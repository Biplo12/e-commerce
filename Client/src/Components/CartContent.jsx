import React from "react";

const CartContent = () => {
  return (
    <div className="cart-container">
      <div className="cart-left">
        <h5>Your bag</h5>
        <a href="/products">
          <span className="un">Keep shopping</span>
        </a>
      </div>
      <div className="cart-right">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Color</th>
              <th>Size</th>
              <th>QTY</th>
              <th>Total price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="">
                  <img
                    src="./Assets/Product/example-1.png"
                    alt="product in cart"
                    width="75px"
                  />
                  <span className="un"> BOWLING SHIRT BLACK</span>
                </a>
              </td>
              <td>Black</td>
              <td>L</td>
              <td className="cart-product-qty">
                <span>+</span>
                <h5>1</h5>
                <span>-</span>
              </td>
              <td>$355</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartContent;
