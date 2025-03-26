import React, { useState } from "react";
import "../styles/cfo.css";
import Footer from "./Footer";
import WhatsApp from "../pages/whatsapp";

const CFO = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const cardData = [
    {
      title: "CFO Services",
      content:
        "A CFO service will generate a budget and financial projections to give you and your board the best financial information possible to make strategic decisions about your company’s future.",
    },
    {
      title: "Outsourced Accounting Services",
      content:
        "Outsourced accounting provides a full-service experience for small businesses: transaction coding, payables, receivables, payroll, financial reporting, and more.",
    },
    {
      title: "Payroll Services & Labour Law Compliance",
      content:
        "Our payroll consulting services help organize, analyze, and add clarity. We manage inputs, tax reports, statutory compliance, and file your ITR accurately & efficiently.",
    },
    {
      title: "Project Reports & CMA Data for Bank loans",
      content:
        "We build expert project reports for term and working capital loans and coordinate with banks for complete sanction support.",
    },
    {
      title: "Business Valuation Services",
      content:
        "We provide valuation services using DCF, Earnings Multiples, Asset-Based Value, and Comparative Methods — or combinations — for startups and enterprises.",
    },
    {
      title: "Business Due Diligence",
      content:
        "Due diligence for acquisitions, mergers, or investments: confirm facts, assess assets, analyze capabilities, and financial performance of the target company.",
    },
  ];

  return (
    <div className="cfo-container">
      <div className="cfo-header">
        <img src="/images/cfo.jpg" alt="CFO Services" className="cfo-bg" />
        <h1 className="cfo-title">Outsourcing & CFO Services</h1>
      </div>

      <div className="cfo-content">
        <div className="left-section">
          <h2>Outsourcing & CFO Services</h2>
          <p>
            We provide a range of outsourcing and CFO services to clients from startups to large enterprises, offering strategy, compliance, finance, and growth-focused support.
          </p>
        </div>

        <div className="right-section">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`cfo-card ${activeCard === index ? "active" : ""}`}
            >
              <div className="card-header" onClick={() => toggleCard(index)}>
                <span>{card.title}</span>
                <span className="toggle-symbol">{activeCard === index ? "-" : "+"}</span>
              </div>
              {activeCard === index && (
                <div className="card-content">{card.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <WhatsApp />
      <Footer />
    </div>
  );
};

export default CFO;
