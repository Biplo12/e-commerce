import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ProductsContent from "../Components/ProductsList/ProductsContent";
import ProductsFilters from "../Components/ProductsList/ProductsFilters";
const Products = () => {
  return (
    <>
      <Navbar />
      <div className="products-container">
        <ProductsFilters />
        <ProductsContent />
      </div>
      <Footer />
    </>
  );
};

export default Products;
