import { useState } from "react";
import stripeLogo from "../../Images/Footer/stripe-logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-about">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            in alias quas, accusamus harum odio. Veritatis doloremque magni
            iusto tenetur atque amet laudantium sunt quod vitae. Esse maxime
            eius provident.
          </p>
        </div>
        <div className="footer-address">
          <h3>Address</h3>
          <h5>
            <a href="https://www.google.com/maps/place/Warszawa/data=!4m2!3m1!1s0x471ecc669a869f01:0x72f0be2a88ead3fc?sa=X&ved=2ahUKEwjY5In766D4AhWCr4sKHTYbBp4Q8gF6BAgIEAE">
              Example address 1/23, Warsaw Poland
            </a>
          </h5>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="mailto:e-commerce@gmail.com">
                <span className="un">Email us</span>
              </a>
            </li>
            <li>
              <a href="tel: 000-000-0000">
                <span className="un">+0 000 000 000</span>
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
      <div className="footer-bottom">
        <div className="footer-payments">
          <h5>Payments powered by:</h5>
          <a href="https://www.stripe.com">
            <img src={stripeLogo} alt="stripe logo" />
          </a>
        </div>
        <div className="footer-links">
          <a href="">
            <span className="un">Terms &amp; conditions</span>
          </a>
          <a href="">
            <span className="un">Privacy statement</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
