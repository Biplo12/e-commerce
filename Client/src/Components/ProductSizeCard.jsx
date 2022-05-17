import React from "react";

const ProductSizeCard = () => {
  return (
    <div className="product-size-container">
      <div className="product-size-context">
        <div className="product-size-top">
          <div className="product-size-title-price">
            <h5>BOWLING SHIRT BLACK</h5>
            <h5>$355</h5>
          </div>
          <img src="./Assets/Navbar/closeDark.svg" alt="close icon" />
        </div>
        <div className="product-size-paragrafs">
          <p>Select size</p>
          <p>Size guide</p>
        </div>
        <div className="product-sizes">
          <h2>S</h2>
          <h2>M</h2>
          <h2>L</h2>
          <br />
          <h2>XL</h2>
          <h2>XXL</h2>
        </div>
        <div className="product-size-body">
          <p>Delivery time: 5-7 buisness days</p>
          <p>100-day return period</p>
          <p>Free returns</p>
          <p>Free shipping by Dec 24</p>
        </div>
        <div className="product-size-button">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductSizeCard;
