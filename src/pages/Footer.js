import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Footer.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <img src="/images/ZoomTax.jpg" alt="ZoomTax" className="footer-logo" />
          <p className="footer-text">
            Zoom Taxes is a Chartered Accountants firm based in Thagarapuvalasa,
            committed to excellence and professional service.
          </p>
        </div>

        <div className="footer-col">
          <h2 className="footer-heading">Reach Us</h2>
          <p className="footer-contact">
            <FaPhoneAlt className="footer-icon" /> +91 7093698955
          </p>
          <p className="footer-contact">
            <FaMapMarkerAlt className="footer-icon" /> #14-7-17/1 Kolagatlavari Street,<br />
            Opp. SNR Function Hall, Thagarapuvalasa, 531162
          </p>
        </div>

        <div className="footer-col">
          <h2 className="footer-heading">Working Hours</h2>
          <button className="footer-btn" onClick={() => navigate("/contact")}>
            Call Us Today
          </button>
          <p className="footer-time">
            <FaClock className="footer-icon" /> 10 AM - 7 PM, Mon - Sat
          </p>
          <p className="footer-text small-text">
            Our Support and Sales team is available 24/7 to answer your queries.
          </p>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} ChvApps@7. All Rights Reserved.
        </p>
        <img src="/images/linkedin.jpg" alt="LinkedIn" className="footer-social" />
      </div>
    </footer>
  );
};

export default Footer;
