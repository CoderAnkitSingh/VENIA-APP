import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-row">
          <div className="footer-links">
            <h5>Account</h5>
            <ul>
              <li>Sign In</li>
              <li>Register</li>
              <li>Order Status</li>
            </ul>
          </div>
          <div className="footer-links">
            <h5>About Us</h5>
            <ul>
              <li>Our Story</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-links">
            <h5>Help</h5>
            <ul>
              <li>Contact Us</li>
              <li>Order Status</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="footer-links">
            <h5>Follow Us!</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo similique laborum mollitia vero.
            </p>
            <div className="social-icons">
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FiFacebook />
              </a>
              <a href="#">
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="footer-copy-row">
            <div className="ft-logo">
              <Link to="/">
                <img src={Logo} alt="Venia" style={{ width: "90px" }} />
              </Link>
            </div>
            <div className="copy">
              <p>© Copyright 2024 Venia. All Rights Reserved</p>
            </div>
            <div className="ft-link">
              <Link to="/">Terms of Use</Link>
              <Link to="/">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
