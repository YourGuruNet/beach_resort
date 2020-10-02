import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaLinkedin,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="footer-logo">
          <Link to="/" className="social-logo">
            <img src={logo} alt="logo" />
          </Link>
          <p>
            "beachresort.com is a leading online accommodation site. We’re
            passionate about travel. Every day we inspire and reach millions of
            travelers across 90 local websites in 41 languages. So when it comes
            to booking the perfect hotel."
          </p>
        </div>
        <div className="social-media-wrap">
          <small className="website-rights">
            <p>
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
              PalmsResort.com
            </p>
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="instagram"
            >
              <FaInstagramSquare />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="twitter"
            >
              <FaTwitterSquare />
            </Link>
            <Link
              className="social-icon-link google"
              to="/"
              target="_blank"
              aria-label="google"
            >
              <FaGooglePlusSquare />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="linkedin"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
