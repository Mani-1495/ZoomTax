import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../styles/Header.css";
import Footer from "../pages/Footer";
import AppointmentCard from "../pages/AppointmentCard";
import WhatsApp from "../pages/whatsapp";



const FrontPage = () => {
  const [showAppointment, setShowAppointment] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      {showAppointment && <AppointmentCard onClose={() => setShowAppointment(false)} />}

      
      <div className="slideshowm">
        <img src="/images/main1.jpg" alt="Main" className="slideshow-imgm" />
        <div className="slideshowm-text">
          <h1>Looking to start a <br /> Business?</h1>
          <button className="callback-btnn" onClick={() => setShowAppointment(true)}> Request a call back </button>
        </div>
      </div>

      <div className="chartered-section">
        <h1>Zoom Taxes <br /> A Chartered Accountants Firm in Thagarapuvalasa</h1>
        <p>
          Zoom Taxes is one of the leading Chartered Accountants Thagarapuvalasa. The firm has strived with the mission to provide a comprehensive range of financial and consulting services to its clients. We offer services like accounts outsourcing, auditing, company formation in India, Business taxation, corporate compliance, starting business in India, registration of foreign companies, transfer pricing, tax due diligence, taxation of expatriates etc.
        </p>
      </div><br /><br /><br />

      <div className="value-section">
        <div className="value-image">
          <img src="/images/side.avif" alt="Value Proposition" />
        </div>
        <div className="value-text">
          <h1>Value Proposition</h1>
          <ul>
            <li> Young team of professionals understanding present-day requirements</li>
            <li> Professionals specialized in each area of services providing required expertise</li>
            <li> Dedicated team for each area of services delivering quality and timely service</li>
            <li> Service delivery model based on client value addition and client satisfaction</li>
            <li> Various statutory compliance services under one umbrella</li>
            <li> Cost competitive services</li>
            <li> Adoption of latest technology in service delivery</li>
          </ul>
        </div>

        
      </div>


      <div className="services-section">
      <h1 className="services-title">Our Services</h1>
      <div className="services-container">
        <div className="service-card">
          <h2>Business Establishment Services</h2>
          <ul>
            <li>Advice on selecting Right structure for registration</li>
            <li>Registration of Pvt Ltd, LLP, Partnership firm, Proprietorship firm, Trust, Society etc</li>
            <li>Obtaining post-registration licenses & Registration</li>
            <li>PAN, TAN, GST, IEC, MSME, PF, ESI, Shop & Establishment, PT, Factory License, Pollution Control</li>
            <li>Briefing on compliance requirements for different types of business structures</li>
          </ul>
        </div>
        <div className="service-card">
          <h2>Taxation</h2>
          <ul>
            <li>Income Tax Advisory & Compliance</li>
            <li>GST Advisory & Compliance</li>
            <li>Custom Duty Advisory & Compliance</li>
            <li>Advisory & Compliance under PT and other Tax Laws</li>
            <li>NRI Services</li>
          </ul>
        </div>
        <div className="service-card">
          <h2>Auditing & Assurance Services</h2>
          <ul>
            <li>Statutory Audit under the Companies Act, LLP Act, and other laws</li>
            <li>Internal & Management Audits</li>
            <li>Stock & Revenue Audits</li>
            <li>Tax Audits</li>
          </ul>
        </div>
      </div>
      <div className="services-container second-row">
        <div className="service-card">
          <h2>Company Law, FDI, ODI Compliance</h2>
          <ul>
            <li>Company and LLP Incorporation</li>
            <li>Various Compliances under Companies Act, LLP Act, SEBI</li>
            <li>FDI, ODI, FEMA Compliances</li>
            <li>ESOP, Investor Agreement & Other Legal Advisory Services</li>
          </ul>
        </div>
        <div className="service-card">
          <h2>Outsourcing & CFO Services</h2>
          <ul>
            <li>Accounting & Bookkeeping Services</li>
            <li>Payroll Services</li>
            <li>Due Diligence</li>
            <li>Business Valuation</li>
            <li>Project Report & Loan Syndication</li>
          </ul>
        </div>
      </div>
    </div>
    <WhatsApp />
    <Footer />
    </div>
  );
};

export default FrontPage;
