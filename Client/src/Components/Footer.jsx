import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-about">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          in alias quas, accusamus harum odio. Veritatis doloremque magni iusto
          tenetur atque amet laudantium sunt quod vitae. Esse maxime eius
          provident.
        </p>
      </div>
      <div className="footer-address">
        <h3>Address</h3>
        <a>
          Example address 1/23,
          <br />
          Warsaw Poland{" "}
        </a>
      </div>
      <div className="footer-contact">
        <h3>Contact</h3>
        <ul>
          <li>
            <a href="">
              <span className="un">Email us</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="un">Call +0 000 000 000</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-details">
        <h3>Details</h3>
        <ul>
          <li>
            <a href="">
              <span className="un">Shipping</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="un">Returns</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="un">Careers</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="un">Term of service</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
