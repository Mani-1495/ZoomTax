import React, { useState } from "react";
import "../styles/AppointmentCard.css";

const AppointmentCard = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Appointment Booked Successfully!");
    onClose(); 
  };

  return (
    <div className="appointment-overlay">
      <div className="appointment-card">
      <button className="close-btn1" onClick={onClose}>
          ✖ 
        </button>
        <h2>Book Appointment</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email ID" value={formData.email} onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message (Optional)" value={formData.message} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
        
      </div>
    </div>
  );
};

export default AppointmentCard;
