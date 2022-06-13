import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ProductsContent from "../Components/ProductsList/ProductsContent";
const Products = () => {
  return (
    <>
      <Navbar />
      <div className="products-container">
        <ProductsContent />
      </div>
      <Footer />
    </>
  );
};

export default Products;
