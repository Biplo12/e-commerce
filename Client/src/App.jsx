import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pay from "./Pages/Pay";
import Success from "./Pages/Success";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import "./Components/Styles/globalStyles.scss";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/success" element={<Success />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
