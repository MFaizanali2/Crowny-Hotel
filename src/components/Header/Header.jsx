import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone, faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../public/assets/images/Other/logo.png";
import "./Header.css";

const Header = () => {
  // State for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Top Navigation */}
      <div className="top-bar">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="STETHO Hotel Booking" />
          </div> 

          {/* Desktop Navigation */}
          <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Testimonial</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <button className="close-menu" onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

          {/* Auth & Quote Buttons */}
          <div className="auth-buttons">
            <a href="#" className="sign-in"><i className="fas fa-sign-in-alt"></i> Sign in</a>
            <a href="#" className="register"><i className="fas fa-user-plus"></i> Register</a>
            <a href="#" className="quote-btn">Request a Quote</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Info Bar Section */}
      <div className="info-bar">
        <div className="container">
          <div className="nav-item">
            <img src={logo} alt="STETHO Hotel Booking" />
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faClock} className="icon" />
            <div>
              <strong>Working Hours</strong>
              <p>Monday - Sunday: 9.00am to 6.00pm</p>
            </div>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <div>
              <strong>Call Us</strong>
              <p>+011 123 4567</p>
            </div>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <div>
              <strong>Mail Us</strong>
              <p>info@exampal.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      
    </header>
  );
};

export default Header;
