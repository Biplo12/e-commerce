import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./Pages/Success";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "./Components/Styles/globalStyles.scss";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
