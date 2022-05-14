import react, { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../Assets/cart.svg";
import searchIcon from "../Assets/search.svg";
import menuIcon from "../Assets/menu.svg";
import navbarStyles from "./Styles/navbar.scss";

const Navbar = () => {
  // const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <div className="navbar-logo-search-wrapper">
          <div className="navbar-logo">
            <h3>e-commerce</h3>
          </div>
          <div className="navbar-search-container">
            <input type="text" placeholder="Search" />
            <img src={searchIcon} alt="Search icon" width="20px" />
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-collection">New Collection</Link>
          </li>
          <li>
            <Link to="/men">For men</Link>
          </li>
          <li>
            <Link to="/woman">For woman</Link>
          </li>
          <li>
            <Link to="/register">SIGN UP</Link>
          </li>
          <li>
            <Link to="/login">SIGN IN</Link>
          </li>
          <li>
            <img
              src={cartIcon}
              alt="Cart icon"
              className="cartIcon"
              width="20px"
            />
          </li>
          <li>
            <img
              src={menuIcon}
              alt="Menu icon"
              className="menuIcon"
              width="20px"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
