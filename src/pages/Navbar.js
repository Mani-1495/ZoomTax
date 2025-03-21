import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ setShowAppointment }) => { // Accept setShowAppointment as a prop
  const navigate = useNavigate();

  return (
    <nav>
      {/* Header Section */}
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
      </div>

      {/* Navbar Section */}
      <div className="navbar-section">
        <button className="nav-button" onClick={() => navigate("/")}>Home</button>
        <button className="nav-button" onClick={() => navigate('/about')}> About Us </button>
        <button className="nav-button" onClick={() => navigate('/bsr')}> Business Registration Services </button>
        <button className="nav-button" onClick={() => navigate("/cls")}>Compliance & Legal Service</button>
        <button className="nav-button" onClick={() => navigate("/cfo")}>Outsourcing & CFO Services</button>
        <button className="nav-button" onClick={() => navigate("/contact")}>Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
