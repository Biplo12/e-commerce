import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./Pages/Success";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductsList from "./Pages/ProductsList";
import ScrollToTop from "./Components/ScrollToTop";
import "./Components/Styles/globalStyles.scss";
function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/products/:category" element={<ProductsList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
