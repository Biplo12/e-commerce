import React from "react";
import { Link } from "react-router-dom";

const Products = ({ item }) => {
  return (
    <div className="products">
      <Link to={`/product/${item._id}`}>
        <img
          src={item.src ? item.src : "./Assets/Product/example-2.png"}
          alt="product"
        />
        <h4>{item.title}</h4>
        <h5>${item.price}</h5>
        <h2>{item.createdAt}</h2>
      </Link>
    </div>
  );
};

export default Products;
