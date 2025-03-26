import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ setShowAppointment }) => {
  const navigate = useNavigate();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const handleNavClick = (path) => {
    navigate(path);
    setIsSideNavOpen(false);
  };

  return (
    <nav>
      <div className="header">
        <img src="/images/ZoomTax.jpg" alt="Logo" className="logo" />
        
        <div className="info">
          <div className="contact-item">
            <img src="/images/mail_logo.png" alt="Mail" />
            <div>
              <h3>Email Address</h3>
              <p>chvapps7@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <img src="/images/phono_logo.png" alt="Phone" />
            <div>
              <h3>Phone Number</h3>
              <p>7093698955</p>
            </div>
          </div>
          <div className="contact-item">
            <img src="/images/map_logo.png" alt="Location" />
            <div>
              <h3>Our Location</h3>
              <p>Tagarapuvalasa</p>
            </div>
          </div>
        </div>

        <button className="callback-btn" onClick={() => setShowAppointment(true)}>
          Book an <br /> Appointment
        </button>

        <div className="hamburger" onClick={() => setIsSideNavOpen(true)}>
          &#9776;
        </div>
      </div>

      <div className="navbar-section">
  <p className="nav-text" onClick={() => navigate("/")}>Home</p>
  <p className="nav-text" onClick={() => navigate("/about")}>About Us</p>
  <p className="nav-text" onClick={() => navigate("/bsr")}>Business Registration Services</p>
  <p className="nav-text" onClick={() => navigate("/cls")}>Compliance & Legal Service</p>
  <p className="nav-text" onClick={() => navigate("/cfo")}>Outsourcing & CFO Services</p>
  <p className="nav-text" onClick={() => navigate("/contact")}>Contact Us</p>
</div>


      {isSideNavOpen && (
        <div className="side-navbar">
          <div className="side-nav-content">
            <span className="close-btn" onClick={() => setIsSideNavOpen(false)}>&times;</span>
            <img src="/images/ZoomTax.jpg" alt="Logo" className="side-logo" />
            <p onClick={() => handleNavClick("/")}>Home</p>
            <p onClick={() => handleNavClick("/about")}>About Us</p>
            <p onClick={() => handleNavClick("/bsr")}>Business Registration Services</p>
            <p onClick={() => handleNavClick("/cls")}>Compliance & Legal Service</p>
            <p onClick={() => handleNavClick("/cfo")}>Outsourcing & CFO Services</p>
            <p onClick={() => handleNavClick("/contact")}>Contact Us</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
