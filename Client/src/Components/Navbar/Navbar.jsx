import { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../Images/Navbar/cart.svg";
import closeIcon from "../../Images/Navbar/close.svg";
import menuIcon from "../../Images/Navbar/menu.svg";
import searchIcon from "../../Images/Navbar/search.svg";
import NavbarData from "./NavbarData";
const Navbar = (LinkTo, LinkName) => {
  const [navbarOpen, setNavbarOpen] = useState(true);
  const [navbarOnScroll, setNavbarOnScroll] = useState(false);
  const handleNavbar = () => setNavbarOpen(!navbarOpen);
  const changePosition = () => {
    if (window.scrollY >= 90) {
      setNavbarOnScroll(true);
    } else {
      setNavbarOnScroll(false);
    }
  };
  window.addEventListener("scroll", changePosition);
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
