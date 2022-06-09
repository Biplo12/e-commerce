import React from "react";
import { Link } from "react-router-dom";
const HomeProducts = () => {
  return (
    <div className="home-products-container">
      <Link to="/product">
        <div className="home-product">
          <div className="home-product-image">
            <img src="./Assets/Product/example-1.png" alt="product home" />
          </div>
        </div>
      </Link>
      <Link to="/product">
        <div className="home-product">
          <div className="home-product-image">
            <img src="./Assets/Product/example-2.png" alt="product home" />
          </div>
        </div>
      </Link>
      <Link to="/product">
        <div className="home-product">
          <div className="home-product-image">
            <img src="./Assets/Product/example-3.png" alt="product home" />
          </div>
        </div>
      </Link>
      <Link to="/product">
        <div className="home-product">
          <div className="home-product-image">
            <img src="./Assets/Product/example-4.png" alt="product home" />
          </div>
        </div>
      </Link>
      <Link to="/product">
        <div className="home-product">
          <div className="home-product-image">
            <img src="./Assets/Product/example-5.png" alt="product home" />
          </div>
        </div>
      </Link>
      <Link to="/product">
        <div className="home-product">
          <div className="home-product-image">
            <img src="./Assets/Product/example-6.png" alt="product home" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeProducts;
