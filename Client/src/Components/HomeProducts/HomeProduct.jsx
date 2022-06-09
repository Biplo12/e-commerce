import React from "react";
import { Link } from "react-router-dom";
const HomeProduct = ({ image, productId }) => {
  return (
    <Link to={`/product/${productId}`}>
      <div className="home-product">
        <div className="home-product-image">
          <img src={image} alt="product home" />
        </div>
      </div>
    </Link>
  );
};

export default HomeProduct;
