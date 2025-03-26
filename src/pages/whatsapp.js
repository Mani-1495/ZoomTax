import React, { useState } from "react";
import "../styles/whatsapp.css";

const WhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="whatsapp-container">
      <div className="whatsapp-card">Need Help? Chat with us</div>
      <div className="whatsapp-icon" onClick={() => setIsOpen(!isOpen)}>
        <img src="/images/whatsapp4.avif" alt="WhatsApp" />
      </div>
      {isOpen && (
        <div className="whatsapp-popup">
          <div className="popup-header">
            <img src="/images/whatsapp4.avif" alt="WhatsApp" className="popup-icon" />
            <div className="popup-text">
              <h3>Start a Conversation</h3>
              <p>Hi! Click one of our members below to chat on WhatsApp.</p>
            </div>
          </div>
          <div className="popup-body">
            <a href="https://wa.me/917093698955" className="whatsapp-link">
              +91 7093698955
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsApp;
