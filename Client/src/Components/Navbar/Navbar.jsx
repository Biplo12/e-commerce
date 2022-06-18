import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartIcon from "../../Images/Navbar/cart.svg";
import closeIcon from "../../Images/Navbar/close.svg";
import menuIcon from "../../Images/Navbar/menu.svg";
import searchIcon from "../../Images/Navbar/search.svg";
import NavbarData from "./NavbarData";
const Navbar = () => {
  //Mobile navbar state
  const [navbarOpen, setNavbarOpen] = useState(true);
  const handleNavbar = () => setNavbarOpen(!navbarOpen);

  //onSroll style change
  const [navbarOnScroll, setNavbarOnScroll] = useState(false);
  const changePosition = () => {
    if (window.scrollY >= 90) {
      setNavbarOnScroll(true);
    } else {
      setNavbarOnScroll(false);
    }
  };
  window.addEventListener("scroll", changePosition);

  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div
      className={[
        navbarOpen ? "navbar-container" : "navbar-container mobile",
        navbarOnScroll ? " onScroll" : "",
      ].join("")}
    >
      <div className={navbarOpen ? "navbar-left" : "navbar-left mobile"}>
        <div className={navbarOpen ? "navbar-logo" : "navbar-logo mobile"}>
          <Link to="/">
            <h1>e-commerce</h1>
          </Link>
        </div>
        <ul>
          <NavbarData LinkTo="/" LinkName="Home" />
          <NavbarData
            LinkTo="/products/new-collection"
            LinkName="New Collection"
          />
          <NavbarData LinkTo="/products/men" LinkName="For men" />
          <NavbarData LinkTo="/products/woman" LinkName="For woman" />
          <NavbarData LinkTo="/products/accessories" LinkName="Accessories" />
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
            <img
              src={searchIcon}
              alt="Search icon"
              width="20px"
              className="searchIcon"
            />
          </div>
        </div>
        <ul>
          <li>
            <Link to="/login">
              <span className="un">Login</span>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <span className="un">Register</span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="cart-icon">
                <img
                  src={cartIcon}
                  alt="Cart icon"
                  className={navbarOpen ? "cartIcon" : "cartIcon mobile"}
                  width="30px"
                />
                <div className="cart-badge">
                  <span>{quantity}</span>
                </div>
              </div>
            </Link>
          </li>
          <li onClick={handleNavbar}>
            <img
              src={navbarOpen ? menuIcon : closeIcon}
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
