import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);
  return <div className="home-products-container"></div>;
};

export default HomeProducts;
