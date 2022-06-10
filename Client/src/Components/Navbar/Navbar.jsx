import { useState } from "react";
import { Link } from "react-router-dom";
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
        navbarOnScroll ? "navbar-container onScroll" : "navbar-container",
      ].join(" ")}
    >
      <div className={navbarOpen ? "navbar-left" : "navbar-left mobile"}>
        <div className={navbarOpen ? "navbar-logo" : "navbar-logo mobile"}>
          <Link to="/">
            <h1>e-commerce</h1>
          </Link>
        </div>
        <ul>
          <NavbarData LinkTo="/" LinkName="Home" />
          <NavbarData LinkTo="/new-collection" LinkName="New Collection" />
          <NavbarData LinkTo="/men" LinkName="For men" />
          <NavbarData LinkTo="/woman" LinkName="For woman" />
          <NavbarData LinkTo="/accessories" LinkName="Accessories" />
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
              src="/Assets/Navbar/search.svg"
              alt="Search icon"
              width="20px"
              className="searchIcon"
            />
          </div>
        </div>
        <ul>
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
