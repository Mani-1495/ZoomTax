import React from "react";
import "../styles/contact.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <img src="/images/cs.jpg" alt="Contact Us" className="contact-bg" />
        <h1 className="contact-title">Contact Us</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h2 className="contact-heading">Reach Us</h2><br /><br />

          <div className="contact-item">
            <img src="/images/map_logo.png" alt="Office" className="icon" />
            <div>
              <h3 className="contact-subheading">Office</h3>
              <p>#14-7-17/1 Kolagatlavari Street, Opposite to SNR Function Hall, Thagarapuvalasa, 531162</p>
            </div>
          </div><br /><br />
          <div className="contact-item">
            <img src="/images/clock.png" alt="Timings" className="icon" />
            <div>
              <h3 className="contact-subheading">Timings</h3>
              <p>10 AM - 7 PM, Monday - Saturday</p>
            </div>
          </div><br /><br />

          <div className="contact-item">
            <img src="/images/phono_logo.png" alt="Phone" className="icon" />
            <div>
              <h3 className="contact-subheading">Calling Support</h3>
              <p>+91 7093698955</p>
            </div>
          </div><br /><br />

          <div className="contact-item">
            <img src="/images/mail_logo.png" alt="Email" className="icon" />
            <div>
              <h3 className="contact-subheading">Email Information</h3>
              <p>chvapps7@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-card">
            <h2 className="question-title">Have You Any Question?</h2>
            <h1 className="write-line">Write us a line</h1>

            <form className="contact-form">
              <input type="text" placeholder="Name" className="input-field" />
              <input type="email" placeholder="Email" className="input-field" />
              <input type="text" placeholder="Subject" className="input-field" />
              <textarea placeholder="Message (optional)" className="message-box"></textarea>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
