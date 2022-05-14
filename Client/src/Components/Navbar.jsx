import react, { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../Assets/cart.svg";
import searchIcon from "../Assets/search.svg";
import menuIcon from "../Assets/menu.svg";
import closeMenuIcon from "../Assets/close.svg";
import navbarStyles from "./Styles/navbar.scss";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleNavbar = () => setNavbarOpen(!navbarOpen);

  return (
    <div
      className={navbarOpen ? "navbar-container" : "navbar-container mobile"}
    >
      <div className={navbarOpen ? "navbar-left" : "navbar-left mobile"}>
        <div
          className={
            navbarOpen
              ? "navbar-logo-search-wrapper"
              : "navbar-logo-search-wrapper mobile"
          }
        >
          <div className={navbarOpen ? "navbar-logo" : "navbar-logo mobile"}>
            <h3>e-commerce</h3>
          </div>
          <div
            className={
              navbarOpen
                ? "navbar-search-container"
                : "navbar-search-container mobile"
            }
          >
            <input type="text" placeholder="Search" />
            <img src={searchIcon} alt="Search icon" width="20px" />
          </div>
        </div>
      </div>
      <div className={navbarOpen ? "navbar-right" : "navbar-right mobile"}>
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
            <Link to="/cart">
              <img
                src={cartIcon}
                alt="Cart icon"
                className={navbarOpen ? "cartIcon" : "cartIcon mobile"}
                width="20px"
              />
            </Link>
          </li>
          <li onClick={handleNavbar}>
            <img
              src={navbarOpen ? menuIcon : closeMenuIcon}
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
