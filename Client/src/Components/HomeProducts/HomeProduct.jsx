import React from "react";
import { Link } from "react-router-dom";
const HomeProduct = ({ image, productId }) => {
  return (
    <div className="home-product">
      <Link to={`/product/${productId}`}>
        <div className="home-product-image">
          <img src={image} alt="product home" />
        </div>
      </Link>
    </div>
  );
};

export default HomeProduct;
