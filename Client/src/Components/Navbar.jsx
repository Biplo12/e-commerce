import { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";
const Navbar = () => {
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
  const NavbarLinks = NavbarData.map((index, id) => (
    <li key={id}>
      <Link to={index.linkTo}>
        <span className="un">{index.linkName}</span>
      </Link>
    </li>
  ));
  return (
    <div
      className={[
        navbarOpen ? "navbar-container" : "navbar-container mobile",
        navbarOnScroll ? "navbar-container onScroll" : "navbar-container",
      ].join(" ")}
    >
      <div className={navbarOpen ? "navbar-left" : "navbar-left mobile"}>
        <div className={navbarOpen ? "navbar-logo" : "navbar-logo mobile"}>
          <Link to="/">
            <h1>e-commerce</h1>
          </Link>
        </div>
        <ul>{NavbarLinks.slice(1, 5)}</ul>
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
              src="/Assets/Navbar/search.svg"
              alt="Search icon"
              width="20px"
              className="searchIcon"
            />
          </div>
        </div>
        <ul>
          {NavbarLinks.slice(5, 7)}
          <li>
            <Link to="/cart">
              <img
                src="/Assets/Navbar/cart.svg"
                alt="Cart icon"
                className={navbarOpen ? "cartIcon" : "cartIcon mobile"}
                width="30px"
              />
            </Link>
          </li>
          <li onClick={handleNavbar}>
            <img
              src={
                navbarOpen
                  ? "/Assets/Navbar/menu.svg"
                  : "/Assets/Navbar/close.svg"
              }
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
