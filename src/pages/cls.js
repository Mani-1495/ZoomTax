import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/cls.css";
import WhatsApp from "../pages/whatsapp";
const CLS = () => {
  return (
    <div>
      <div className="cls-header">
        <img src="/images/law.jpg" alt="Law" className="cls-image" />
        <div className="cls-title">Compliance & Legal Services</div>
      </div>

      <div className="cls-cards-container">
        <div className="cls-card">
          <h2 className="cls-card-title">Labour Laws</h2>
          <ul>
            <li><u>Labour Law Compliance Advisory</u></li>
            <li><u>Provident Fund Compliance</u></li>
            <li><u>ESI Compliance</u></li>
            <li><u>Gratuity Law Compliance</u></li>
            <li><u>Factories Act Compliance</u></li>
            <li><u>Shop & Establishment Act Compliance</u></li>
          </ul>
        </div>

        <div className="cls-card">
          <h2 className="cls-card-title">Income Tax</h2>
          <ul>
            <li><u>Income Tax Advisory and Filing</u></li>
            <li><u>Representation and Appeal</u></li>
            <li><u>Income Tax Audit</u></li>
            <li><u>E TDS Filing</u></li>
            <li><u>Lower TDS Deduction Certificate</u></li>
            <li><u>Tax Residency Certificate</u></li>
            <li><u>Certificate for Repatriation of Funds</u></li>
            <li><u>Transfer Pricing Consultation and Reports</u></li>
          </ul>
        </div>

        <div className="cls-card">
          <h2 className="cls-card-title">Audit & Assurance</h2>
          <ul>
            <li><u>Audit under the Companies Act</u></li>
            <li><u>Audit under the Income Tax Act</u></li>
            <li><u>Available anytime 24/7</u></li>
            <li><u>Audit under GST Act</u></li>
            <li><u>Internal and Management Audits</u></li>
            <li><u>Bank and Government Audit</u></li>
          </ul>
        </div>

        <div className="cls-card">
          <h2 className="cls-card-title">Company Laws</h2>
          <ul>
            <li><u>Company Secretarial work</u></li>
            <li><u>ROC Annual Return filing</u></li>
            <li><u>ESOP & RSU Compliance</u></li>
            <li><u>Allotment and transfer of shares</u></li>
          </ul>
        </div>

        <div className="cls-card">
          <h2 className="cls-card-title">Foreign Investment Compliance</h2>
          <ul>
            <li><u>FDI Compliance Advisory Services</u></li>
            <li><u>FDI Filings with Reserve Bank of India</u></li>
            <li><u>Share Transfer and RBI Filings</u></li>
          </ul>
        </div>

        <div className="cls-card">
          <h2 className="cls-card-title">GST Compliance</h2>
          <ul>
            <li><u>GST Advisory and Return Filing</u></li>
            <li><u>Representation and Appeal</u></li>
            <li><u>GST Refund</u></li>
            <li><u>GST Audit</u></li>
          </ul>
        </div>
      </div>
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default CLS;
