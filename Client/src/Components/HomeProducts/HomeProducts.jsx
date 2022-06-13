import React from "react";
import { useEffect, useState } from "react";
import HomeProduct from "./HomeProduct";
import axios from "axios";
const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  //Fetching data from DB
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products?category=new-collection"
        );
        setProducts(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="home-products-container">
      {products
        .filter((item, idx) => idx < 6)
        .map((item) => (
          <HomeProduct item={item} key={item._id} />
        ))}
      ;
    </div>
  );
};

export default HomeProducts;
