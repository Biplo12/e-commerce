import React from "react";
import { Link } from "react-router-dom";

const Products = ({ src, title, price }) => {
  return (
    <div className="products">
      <Link to="/product">
        <img src={src} alt="product" />
        <h4>{title}</h4>
        <h5>{price}</h5>
      </Link>
    </div>
  );
};

export default Products;
