import { useState } from "react";
import "./Navbar.css";
import logo from '../../../public/assets/images/Other/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone, faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="STETHO Hotel Booking" />
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
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

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
