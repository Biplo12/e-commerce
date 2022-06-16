import React from "react";
import homeProductExample from "../../Images/Product/example-1.png";

const SingleProduct = ({ image }) => {
  console.log(image[0]);
  return (
    <>
      <img src={image[0] ? image[0] : homeProductExample} alt="" />
      <img src={image[1]} alt="" />
      <img src={image[2]} alt="" />
      <img src={image[3]} alt="" />
    </>
  );
};

export default SingleProduct;
