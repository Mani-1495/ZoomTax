import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/bsr.css";

const BSR = () => {
  const slides1 = ["/images/slide1.avif", "/images/slide2.avif", "/images/slide3.avif"];
  const slides2 = ["/images/slide4.avif", "/images/slide5.avif", "/images/slide1.avif"];

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % slides1.length);
    }, 3000);

    const interval2 = setInterval(() => {
      setCurrentIndex2((prevIndex) => (prevIndex + 1) % slides2.length);
    }, 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <>
      <div className="hero-section">
        <img src="/images/fullimage.jpg" alt="Business Registration" className="hero-imagebsr" />
        <div className="hero-text">Business Registration Services</div>
      </div>

      <div className="content-section">
        <div className="left">
          <div className="slideshow">
            <img src={slides1[currentIndex1]} alt="Slideshow" />
          </div>
        </div>
        <div className="right">
          <h2 className="section-heading">Business Entity Incorporations</h2>
          <h3 className="sub-heading">For Indian Owners</h3>
          <ul className="list">
            <li>Proprietory Concern</li>
            <li>Partnership Firms</li>
            <li>Limited Liability Partnership Firms</li>
            <li>Private Limited Company</li>
            <li>Trust, Society, Section 8 company</li>
          </ul>
          <h3 className="sub-heading">For Foreign Owners</h3>
          <ul className="list">
            <li>Subsidiary Company</li>
            <li>Branch & Liason Office</li>
          </ul>
        </div>
      </div>

      <div className="content-section reverse">
        <div className="right">
          <h2 className="section-heading">Post Incorporation Registration</h2>
          <ul className="list">
            <li>PAN & TAN</li>
            <li>GST Registration</li>
            <li>Shop & Establishment Registration</li>
            <li>Provident Fund Registration & Employee</li>
            <li>State Insurance Registration</li>
            <li>Startup India Registration</li>
            <li>Trade License</li>
            <li>Food License</li>
            <li>Food License Renewal</li>
            <li>Factory License</li>
            <li>Pollution Board License</li>
            <li>MSME Registration</li>
            <li>Professional Tax (PT) Registrations</li>
            <li>STPI Registration</li>
            <li>Import & Export Code</li>
          </ul>
        </div>
        <div className="left">
          <div className="slideshow">
            <img src={slides2[currentIndex2]} alt="Slideshow" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BSR;
