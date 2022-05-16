import React from "react";
import "./Styles/productContent.scss";
import { ProductData } from "./ProductData";
const ProductContent = () => {
  const productGalley = ProductData.map((index, id, img) => (
    <img src={index.img} alt="model" key={id} width="75px" />
  ));
  console.log(ProductData[0]);
  return (
    <div className="product-container">
      <div className="product-left">
        <div className="product-gallery">{productGalley}</div>
        <div className="product-image">
          {/* <img src={ProductData.img[0]} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
