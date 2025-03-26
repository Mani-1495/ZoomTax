import React from "react";
import "../styles/About.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import WhatsApp from "../pages/whatsapp";

const About = ({ setShowAppointment }) => {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      <div className="about-banner">
        <img src="/images/about.webp" alt="About Us" className="about-image" />
        <h1 className="about-title">About Us</h1>
      </div>

      <div className="about-content">
        <h2 className="firm-name">Zoom Taxes</h2>
        <h3 className="firm-tagline">
          A Chartered Accountant Firm in Thagarapuvalasa
        </h3>
        <div className="design-element"></div>
        <p className="firm-description">
          Manikanta Teja & Associates is one of the leading audit firms based
          out of Vizianagaram, India. We strongly believe that expert services
          can be provided only by a person who specializes in a niche area of
          service and obtains in-depth knowledge in such a given area over a
          period of time. To achieve this, we have divided our services into
          Auditing and Assurance, Tax Advisory Services, Company Law, FEMA,
          Labour Law Services, and Accounting Outsourcing Services.
        </p>
      </div>

      <div className="query-section">
        <div className="query-text">
          <h2>Have Any Question?</h2>
          <h2>We Can Help You..</h2>
          <p className="query-email">ChvApps7@gmail.com</p>
        </div>
        <button className="callback-btnn" onClick={() => setShowAppointment(true)}> 
          Request a call back 
        </button>
      </div>
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default About;
