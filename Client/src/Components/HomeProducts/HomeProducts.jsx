import React from "react";
import HomeProduct from "./HomeProduct";
const HomeProducts = () => {
  return (
    <div className="home-products-container">
      <HomeProduct image={"./Assets/Product/example-1.png"} productId="" />
      <HomeProduct image={"./Assets/Product/example-2.png"} productId="" />
      <HomeProduct image={"./Assets/Product/example-3.png"} productId="" />
      <HomeProduct image={"./Assets/Product/example-4.png"} productId="" />
      <HomeProduct image={"./Assets/Product/example-5.png"} productId="" />
      <HomeProduct image={"./Assets/Product/example-6.png"} productId="" />
    </div>
  );
};

export default HomeProducts;
