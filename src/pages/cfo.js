import React, { useState } from "react";
import "../styles/cfo.css";
import Footer from "./Footer";


const CFO = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const cardData = [
    {
      title: "CFO Services",
      content:
        "A CFO service will generate a budget and financial projections to give you and your board the best financial information possible to make strategic decisions about your company’s future as well as the toolset to hold your team accountable for hitting your goals.",
    },
    {
      title: "Outsourced Accounting Services",
      content:
        "Outsourced accounting is a service which provides a full, accounting department experience for small businesses. An accounting department handles the day-to-day transaction coding, accounts payable, accounts receivable, payroll, management financial reporting and many other services.",
    },
    {
      title: "Payroll Services & Labour Law Compliance",
      content:
        "Get 100% assurance and time to focus on your business with our new age payroll consulting services in Vizianagaram that help you organize, analyze & add clarity to your core business. Our team of professionals manage consolidating payroll inputs, process the same, manage your tax reports, meet your statutory compliance, and file your ITR accurately & efficiently.",
    },
    {
      title: "Project Reports & CMA Data for Bank loans",
      content:
        "The types of loans provided by Bank and Financial Institutions to Businesses can be broadly categorized into two categories i.e 1. Term (Project) loans 2. Working capital loans. We built expertise in preparing the Project Report for both loans in a presentable format to the banks and investors. We also co-ordinates with the bank in providing additional details asked for by the banks towards appraising and sanction of the loan proposal.",
    },
    {
      title: "Business Valuation Services",
      content:
        "In today’s era of startups, Business valuation has a huge significance. There are various methods of ascertaining valuation for a business or an asset such as Discounted Cash Flow Method, Multiple of Earning, Asset Based Value, Comparative Transaction Method. Valuations is also done by adopting combination of two or more methods of valuation. We provide valuation services to deliver quality services.",
    },
    {
      title: "Business Due Diligence",
      content:
        "Business due diligence becomes necessary for business acquisitions/investments, mergers etc. Business due diligence is an exercise to undertaken by an acquiring firm to confirm all facts, to completely assess the target company’s business, assets, capabilities, and financial performance.",
    },
  ];

  return (
    <div className="cfo-container">
      <div className="cfo-header">
        <img src="/images/cfo.jpg" alt="CFO Services" className="cfo-bg" />
        <h1 className="cfo-title">Outsourcing & CFO Services</h1>
      </div><br /><br /><br /><br />

      <div className="cfo-content">
        <div className="left-section">
          <h2>Outsourcing & CFO Services</h2>
          <p>
            We provide a range of Outsourcing & CFO services to a diverse client
            base ranging from small businesses & start-ups to large groups and
            development sectors.
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
                <span className="toggle-symbol">
                  {activeCard === index ? "-" : "+"}
                </span>
              </div>
              {activeCard === index && (
                <div className="card-content">{card.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CFO;
