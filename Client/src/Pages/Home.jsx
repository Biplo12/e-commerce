import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import HomeProducts from "../Components/HomeProducts/HomeProducts";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeProducts />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
