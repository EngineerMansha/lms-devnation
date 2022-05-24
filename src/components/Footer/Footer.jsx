import React from 'react';
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer-left">
            <p>&copy; 2022 DevNation PTE Ltd. All rights reserved.</p>
        </div>
        <div className="footer-right">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer