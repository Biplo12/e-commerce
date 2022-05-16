import { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../Assets/Navbar/cart.svg";
import searchIcon from "../Assets/Navbar/search.svg";
import menuIcon from "../Assets/Navbar/menu.svg";
import closeMenuIcon from "../Assets/Navbar/close.svg";
import "./Styles/navbar.scss";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleNavbar = () => setNavbarOpen(!navbarOpen);

  return (
    <div
      className={navbarOpen ? "navbar-container" : "navbar-container mobile"}
    >
      <div className={navbarOpen ? "navbar-left" : "navbar-left mobile"}>
        <div className={navbarOpen ? "navbar-logo" : "navbar-logo mobile"}>
          <Link to="/">
            <h1>e-commerce</h1>
          </Link>
        </div>
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
            <Link to="/woman">Accessories</Link>
          </li>
        </ul>
      </div>
      <div className={navbarOpen ? "navbar-right" : "navbar-right mobile"}>
        <div
          className={
            navbarOpen
              ? "navbar-logo-search-wrapper"
              : "navbar-logo-search-wrapper mobile"
          }
        >
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
        <ul>
          <li>
            <Link to="/register">REGISTER</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/cart">
              <img
                src={cartIcon}
                alt="Cart icon"
                className={navbarOpen ? "cartIcon" : "cartIcon mobile"}
                width="30px"
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
